import IntervalSpan from "./Interval";
import { IPod } from "./Model.constants";
import { INTERVAL_PRESETS } from "./Model.presets";
import { arePodsEqual, reducePod } from "./Pod.static";

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
    console.error(presetArray[0].presetId, value, presetArray);
    throw new Error("Unknown model value");
  }
  return fromId
    ? subclass.fromId(preset.presetId)
    : new subclass(preset.presetId);
};

export const getIntervalFromValue = (value: IPod) =>
  fromValue(INTERVAL_PRESETS, IntervalSpan, value, arePodsEqual, reducePod);

// export const getNotefromValue = (value: IPod) =>
//   fromValue(NOTE_PRESETS, Note, value, arePodsEqual, reducePod, true);

// export const getChordfromValue = (value: IPod[]) =>
//   fromValue(CHORD_PRESETS, Chord, value, arePodListsEqual, reducePodList);

// export const getScalefromValue = (value: IPod[]) =>
//   fromValue(SCALE_PRESETS, Scale, value, arePodListsEqual, reducePodList);
