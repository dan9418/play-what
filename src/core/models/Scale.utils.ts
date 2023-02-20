import ArrayUtils from "../general/Array.utils";
import NumberUtils from "../general/Number.utils";
import { IModelConfig, IPod, Tag } from "./Model.constants";
import { CHORD_PRESETS, SCALE_PRESETS } from "./Model.presets";
import { arePodListsEqual, subtractPods } from "./Pod.static";

export const getNumeral = (
  podList: IPod[],
  intervals: IPod[],
  root: IPod,
  notes: IPod,
  d: number
): IModelConfig => {
  // Get every other interval
  const curIntervals: IPod[] = [];
  for (let i = 0; i < podList.length; i = i + 2) {
    const curD = NumberUtils.moduloSum(d, i, podList.length);
    const curIvl = intervals[curD];
    curIntervals.push(curIvl);
  }
  // Get difference between each interval
  const newPods: IPod[] = [[0, 0]];
  for (let i = 0; i < curIntervals.length - 1; i++) {
    const newPod = subtractPods(curIntervals[i + 1], curIntervals[0]);
    newPods.push(newPod);
  }
  const numeral = CHORD_PRESETS.find((preset) =>
    arePodListsEqual(preset, newPods)
  );
  if (root && notes) {
    // numeral.applyRoot(notes[d]); TODO
  }
  return numeral;
};

export const getAllNumerals = (
  podList,
  intervas,
  root,
  notes,
  tags
): IModelConfig[] => {
  const numerals: IModelConfig[] = [];
  if (tags.includes(Tag.Diatonic)) {
    for (let i = 0; i < podList.length; i++) {
      numerals.push(getNumeral(podList, intervas, root, notes, i));
    }
  }
  return numerals;
};

export const getMode = (podList: IPod[], d: number): IModelConfig => {
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

export const getAllModes = (podList: IPod[], tags: Tag[]): IModelConfig[] => {
  const modes: IModelConfig[] = [];
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
