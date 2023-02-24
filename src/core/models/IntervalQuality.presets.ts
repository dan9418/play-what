import ArrayUtils from "../general/Array.utils";
import { IPreset, PresetMap } from "./Model.constants";

export enum IntervalQualityId {
  Diminished = "diminished",
  Minor = "minor",
  Perfect = "perfect",
  Major = "major",
  Augmented = "augmented",
}

interface IIntervalQuality {
  symbol: string;
  down?: IntervalQualityId;
  up?: IntervalQualityId;
}

export interface IIntervalQualityPreset
  extends IPreset<IntervalQualityId, IIntervalQuality> {}

export const INTERVAL_QUALITY_PRESET_MAP: PresetMap<
  IntervalQualityId,
  IIntervalQualityPreset
> = new Map([
  [
    IntervalQualityId.Diminished,
    {
      presetId: IntervalQualityId.Diminished,
      name: "Diminished",
      value: {
        symbol: "d",
        down: undefined,
        up: IntervalQualityId.Minor,
      },
    },
  ],
  [
    IntervalQualityId.Minor,
    {
      presetId: IntervalQualityId.Minor,
      name: "Minor",
      value: {
        symbol: "m",
        down: IntervalQualityId.Diminished,
        up: IntervalQualityId.Major,
      },
    },
  ],
  [
    IntervalQualityId.Perfect,
    {
      presetId: IntervalQualityId.Perfect,
      name: "Perfect",
      value: {
        symbol: "P",
        down: IntervalQualityId.Diminished,
        up: IntervalQualityId.Augmented,
      },
    },
  ],
  [
    IntervalQualityId.Major,
    {
      presetId: IntervalQualityId.Major,
      name: "Major",
      value: {
        symbol: "M",
        down: IntervalQualityId.Minor,
        up: IntervalQualityId.Augmented,
      },
    },
  ],
  [
    IntervalQualityId.Augmented,
    {
      presetId: IntervalQualityId.Augmented,
      name: "Augmented",
      value: {
        symbol: "A",
        down: IntervalQualityId.Major,
        up: undefined,
      },
    },
  ],
]);

export const INTERVAL_QUALITY_PRESETS = ArrayUtils.mapToArray(
  INTERVAL_QUALITY_PRESET_MAP
);
