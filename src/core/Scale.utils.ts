import { CHORD_PRESETS, IChordPreset } from "./Chord.constants";
import { Tag } from "./Core.constants";
import { INotePreset } from "./Note.constants";
import { getNoteFromPod } from "./Note.utils";
import { IPod } from "./Pod.constants";
import {
  addPods,
  arePodListsEqual,
  reducePod,
  subtractPods
} from "./Pod.utils";
import ArrayUtils from "./primitives/Array.utils";
import NumberUtils from "./primitives/Number.utils";
import { IScalePreset, SCALE_PRESETS } from "./Scale.constants";

export const getNumeral = (intervalPods: IPod[], d: number): IChordPreset | undefined => {
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
  const numeral = CHORD_PRESETS.find((preset) =>
    arePodListsEqual(preset.pods, newPods)
  );
  return numeral;
};

export const getAllNumerals = (
  podListPreset: IScalePreset,
  rootNotePreset?: INotePreset
): [INotePreset | undefined, IChordPreset | undefined][] => {
  const numerals: [INotePreset | undefined, IChordPreset][] = [];
  if (podListPreset.tags.includes(Tag.Diatonic)) {
    for (let i = 0; i < podListPreset.pods.length; i++) {
      const notePod = rootNotePreset && reducePod(addPods(rootNotePreset.pod, podListPreset.pods[i]));
      const notePreset = notePod && getNoteFromPod(notePod);
      //const chordRootPreset = i === 0 ? rootNotePreset : NOTE_PRESET_MAP.get(NoteId.B)
      numerals.push([
        notePreset,
        getNumeral(podListPreset.pods, i) as IChordPreset
      ]);
    }
  }
  return numerals;
};

export const getMode = (podList: IPod[], d: number): IScalePreset | undefined => {
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
    arePodListsEqual(preset.pods, newPods)
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
      modes.push(getMode(podList, i) as IScalePreset);
    }
  }
  return modes;
};
