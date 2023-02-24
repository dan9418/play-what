import ArrayUtils from "../general/Array.utils";
import { IPreset, PresetMap } from "./Model.constants";

export enum ChordQualityId {
  Major = "major",
  Minor = "minor",
  Dominant = "dominant",
  HalfDiminished = "half-diminished",
  Diminished = "diminished",
  Augmented = "augmented",
}

interface IChordQuality {
  term: {
    long: string;
    medium: string;
    short: string;
    minimal: string;
    jazz: string;
  };
  triad: ChordQualityId;
}

export interface IChordQualityPreset
  extends IPreset<ChordQualityId, IChordQuality> {}

export const CHORD_QUALITY_MAP: PresetMap<ChordQualityId, IChordQualityPreset> =
  new Map([
    [
      ChordQualityId.Major,
      {
        presetId: ChordQualityId.Major,
        name: "Major",
        value: {
          term: {
            long: "Major",
            medium: "Maj",
            short: "M",
            minimal: "",
            jazz: "Δ",
          },
          triad: ChordQualityId.Major,
        },
      },
    ],
    [
      ChordQualityId.Minor,
      {
        presetId: ChordQualityId.Minor,
        name: "Minor",
        value: {
          term: {
            long: "Minor",
            medium: "Min",
            short: "m",
            minimal: "m",
            jazz: "-",
          },
          triad: ChordQualityId.Minor,
        },
      },
    ],
    [
      ChordQualityId.Dominant,
      {
        presetId: ChordQualityId.Dominant,
        name: "Dominant",
        value: {
          term: {
            long: "Dominant",
            medium: "Dom",
            short: "7",
            minimal: "7",
            jazz: "⁷",
          },
          triad: ChordQualityId.Major,
        },
      },
    ],
    [
      ChordQualityId.HalfDiminished,
      {
        presetId: ChordQualityId.HalfDiminished,
        name: "Half-Diminished",
        value: {
          term: {
            long: "Half-Diminished",
            medium: "Half-Dim",
            short: "ø",
            minimal: "ø",
            jazz: "ø",
          },
          triad: ChordQualityId.Diminished,
        },
      },
    ],
    [
      ChordQualityId.Diminished,
      {
        presetId: ChordQualityId.Diminished,
        name: "Diminished",
        value: {
          term: {
            long: "Diminished",
            medium: "Dim",
            short: "d",
            minimal: "d",
            jazz: "o",
          },
          triad: ChordQualityId.Diminished,
        },
      },
    ],
    [
      ChordQualityId.Augmented,
      {
        presetId: ChordQualityId.Augmented,
        name: "Augmented",
        value: {
          term: {
            long: "Augmented",
            medium: "Aug",
            short: "A",
            minimal: "",
            jazz: "+",
          },
          triad: ChordQualityId.Augmented,
        },
      },
    ],
  ]);

export const CHORD_QUALITY_PRESETS = ArrayUtils.mapToArray(CHORD_QUALITY_MAP);
