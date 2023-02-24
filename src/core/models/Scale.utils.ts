import ArrayUtils from "../general/Array.utils";
import NumberUtils from "../general/Number.utils";
import { CHORD_PRESETS, IChordPreset } from "./Chord.presets";
import { INTERVAL_PRESETS } from "./Interval.presets";
import { Tag } from "./Model.constants";
import { INotePreset } from "./Note.presets";
import { IPod } from "./Pod.presets";
import {
  arePodListsEqual,
  arePodsEqual,
  reducePod,
  subtractPods,
} from "./Pod.utils";
import { IScalePreset, SCALE_PRESETS } from "./Scale.presets";

export const getNumeral = (intervalPods: IPod[], d: number): IChordPreset => {
  // Get every other interval
  const curIntervals: IPod[] = [];
  for (let i = 0; i < intervalPods.length; i = i + 2) {
    const curD = NumberUtils.moduloSum(d, i, intervalPods.length);
    const curIvl = intervalPods[curD];
    curIntervals.push(curIvl);
  }
  // Get difference between each interval
  const newPods: IPod[] = [[0, 0]];
  for (let i = 0; i < curIntervals.length - 1; i++) {
    const newPod = subtractPods(curIntervals[i + 1], curIntervals[0]);
    newPods.push(reducePod(newPod));
  }
  console.log(
    "dpb",
    newPods.map((p) =>
      INTERVAL_PRESETS.find((ivl) => arePodsEqual(ivl.value, p))
    )
  );
  const numeral = CHORD_PRESETS.find((preset) =>
    arePodListsEqual(preset.value, newPods)
  );
  return numeral;
};

export const getAllNumerals = (
  podListPreset: IScalePreset,
  rootNotePreset?: INotePreset
): [INotePreset | undefined, IChordPreset][] => {
  const numerals: [INotePreset | undefined, IChordPreset][] = [];
  if (podListPreset.tags.includes(Tag.Diatonic)) {
    for (let i = 0; i < podListPreset.value.length; i++) {
      numerals.push([rootNotePreset, getNumeral(podListPreset.value, i)]);
    }
  }
  return numerals;
};

export const getMode = (podList: IPod[], d: number): IScalePreset => {
  let rotated = [...podList];
  rotated = ArrayUtils.rotate(rotated, d);
  for (let i = podList.length - d; i < rotated.length; i++) {
    const curPod = rotated[i];
    rotated[i] = [curPod[0] + 12, curPod[1] + 7];
  }
  // Get difference between each interval
  const newPods: IPod[] = [[0, 0]];
  for (let i = 0; i < rotated.length - 1; i++) {
    const newPod = subtractPods(rotated[i + 1], rotated[0]);
    newPods.push(newPod);
  }
  const mode = SCALE_PRESETS.find((preset) =>
    arePodListsEqual(preset, newPods)
  );

  return mode;
};

export const getAllModes = (podList: IPod[], tags: Tag[]): IScalePreset[] => {
  const modes: IScalePreset[] = [];
  if (
    tags.includes(Tag.Diatonic) ||
    tags.includes(Tag.Pentatonic) ||
    tags.includes(Tag.MelodicMode) ||
    tags.includes(Tag.HarmonicMode)
  ) {
    for (let i = 0; i < podList.length; i++) {
      modes.push(getMode(podList, i));
    }
  }
  return modes;
};
