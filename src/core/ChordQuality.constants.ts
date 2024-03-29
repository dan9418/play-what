import { IPreset, PresetMap } from "./Core.constants";
import ArrayUtils from "./primitives/Array.utils";

export enum ChordQualityId {
  Major = "major",
  Minor = "minor",
  Dominant = "dominant",
  HalfDiminished = "half-diminished",
  Diminished = "diminished",
  Augmented = "augmented",
}

export interface IChordQualityPreset extends IPreset<ChordQualityId> {
  term: {
    long: string;
    medium: string;
    short: string;
    minimal: string;
    jazz: string;
  };
  triad: ChordQualityId;
}

export const CHORD_QUALITY_PRESET_MAP: PresetMap<
  ChordQualityId,
  IChordQualityPreset
> = new Map([
  [
    ChordQualityId.Major,
    {
      presetId: ChordQualityId.Major,
      name: "Major",
      term: {
        long: "Major",
        medium: "Maj",
        short: "M",
        minimal: "",
        jazz: "Δ",
      },
      triad: ChordQualityId.Major,
    },
  ],
  [
    ChordQualityId.Minor,
    {
      presetId: ChordQualityId.Minor,
      name: "Minor",
      term: {
        long: "Minor",
        medium: "Min",
        short: "m",
        minimal: "m",
        jazz: "-",
      },
      triad: ChordQualityId.Minor,
    },
  ],
  [
    ChordQualityId.Dominant,
    {
      presetId: ChordQualityId.Dominant,
      name: "Dominant",
      term: {
        long: "Dominant",
        medium: "Dom",
        short: "7",
        minimal: "7",
        jazz: "⁷",
      },
      triad: ChordQualityId.Major,
    },
  ],
  [
    ChordQualityId.HalfDiminished,
    {
      presetId: ChordQualityId.HalfDiminished,
      name: "Half-Diminished",
      term: {
        long: "Half-Diminished",
        medium: "Half-Dim",
        short: "ø",
        minimal: "ø",
        jazz: "ø",
      },
      triad: ChordQualityId.Diminished,
    },
  ],
  [
    ChordQualityId.Diminished,
    {
      presetId: ChordQualityId.Diminished,
      name: "Diminished",
      term: {
        long: "Diminished",
        medium: "Dim",
        short: "d",
        minimal: "d",
        jazz: "o",
      },
      triad: ChordQualityId.Diminished,
    },
  ],
  [
    ChordQualityId.Augmented,
    {
      presetId: ChordQualityId.Augmented,
      name: "Augmented",
      term: {
        long: "Augmented",
        medium: "Aug",
        short: "A",
        minimal: "",
        jazz: "+",
      },
      triad: ChordQualityId.Augmented,
    },
  ],
]);

export const CHORD_QUALITY_PRESETS = ArrayUtils.mapToArray(
  CHORD_QUALITY_PRESET_MAP
);
