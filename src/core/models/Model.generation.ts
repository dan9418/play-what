import Chord from "./Chord";
import IntervalSpan from "./Interval";
import { IPod } from "./Model.constants";
import {
  CHORD_PRESETS,
  INTERVAL_PRESETS,
  NOTE_PRESETS,
  SCALE_PRESETS,
} from "./Model.presets";
import Note from "./Note";
import {
  arePodListsEqual,
  arePodsEqual,
  reducePod,
  reducePodList,
} from "./Pod.static";
import Scale from "./Scale";

const fromValue = (
  presetArray,
  subclass,
  value: any,
  compareFn: any,
  reduceFn: any,
  fromId = false
) => {
  const preset = presetArray.find((p) => compareFn(p.value, reduceFn(value)));
  if (!preset) {
    console.error(presetArray[0].modelId, value, presetArray);
    throw new Error("Unknown model value");
  }
  return fromId
    ? subclass.fromId(preset.modelId)
    : new subclass(preset.modelId);
};

export const getIntervalFromValue = (value: IPod) =>
  fromValue(INTERVAL_PRESETS, IntervalSpan, value, arePodsEqual, reducePod);

export const getNotefromValue = (value: IPod) =>
  fromValue(NOTE_PRESETS, Note, value, arePodsEqual, reducePod, true);

export const getChordfromValue = (value: IPod[]) =>
  fromValue(CHORD_PRESETS, Chord, value, arePodListsEqual, reducePodList);

export const getScalefromValue = (value: IPod[]) =>
  fromValue(SCALE_PRESETS, Scale, value, arePodListsEqual, reducePodList);
