import ArrayUtils from "../general/Array.utils";
import { IPreset, PresetMap } from "./Model.constants";

export enum IntervalQualityId {
  Diminished = "diminished",
  Minor = "minor",
  Perfect = "perfect",
  Major = "major",
  Augmented = "augmented",
}

export interface IIntervalQualityPreset extends IPreset<IntervalQualityId> {
  symbol: string;
  down?: IntervalQualityId;
  up?: IntervalQualityId;
}

export const INTERVAL_QUALITY_PRESET_MAP: PresetMap<
  IntervalQualityId,
  IIntervalQualityPreset
> = new Map([
  [
    IntervalQualityId.Diminished,
    {
      presetId: IntervalQualityId.Diminished,
      name: "Diminished",
      symbol: "d",
      down: undefined,
      up: IntervalQualityId.Minor,
    },
  ],
  [
    IntervalQualityId.Minor,
    {
      presetId: IntervalQualityId.Minor,
      name: "Minor",
      symbol: "m",
      down: IntervalQualityId.Diminished,
      up: IntervalQualityId.Major,
    },
  ],
  [
    IntervalQualityId.Perfect,
    {
      presetId: IntervalQualityId.Perfect,
      name: "Perfect",
      symbol: "P",
      down: IntervalQualityId.Diminished,
      up: IntervalQualityId.Augmented,
    },
  ],
  [
    IntervalQualityId.Major,
    {
      presetId: IntervalQualityId.Major,
      name: "Major",
      symbol: "M",
      down: IntervalQualityId.Minor,
      up: IntervalQualityId.Augmented,
    },
  ],
  [
    IntervalQualityId.Augmented,
    {
      presetId: IntervalQualityId.Augmented,
      name: "Augmented",
      symbol: "A",
      down: IntervalQualityId.Major,
      up: undefined,
    },
  ],
]);

export const INTERVAL_QUALITY_PRESETS = ArrayUtils.mapToArray(
  INTERVAL_QUALITY_PRESET_MAP
);
