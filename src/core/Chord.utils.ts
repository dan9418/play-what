import { ChordId } from "./Chord.constants";
import {
  ChordQualityId,
  CHORD_QUALITY_PRESET_MAP,
  IChordQualityPreset,
} from "./ChordQuality.constants";
import NumberUtils from "./primitives/Number.utils";

export const getSymbol = (presetId: ChordId, symbolType = "jazz") => {
  switch (presetId) {
    case ChordId.MajTriad:
    case ChordId.Maj7:
    case ChordId.Maj6:
      return (
        CHORD_QUALITY_PRESET_MAP.get(
          ChordQualityId.Major
        ) as IChordQualityPreset
      ).term[symbolType];
    case ChordId.MinTriad:
    case ChordId.Min7:
    case ChordId.Min6:
      return (
        CHORD_QUALITY_PRESET_MAP.get(
          ChordQualityId.Minor
        ) as IChordQualityPreset
      ).term[symbolType];
    case ChordId.Dom7:
      return (
        CHORD_QUALITY_PRESET_MAP.get(
          ChordQualityId.Dominant
        ) as IChordQualityPreset
      ).term[symbolType];
    case ChordId.HalfDim7:
      return (
        CHORD_QUALITY_PRESET_MAP.get(
          ChordQualityId.HalfDiminished
        ) as IChordQualityPreset
      ).term[symbolType];
    case ChordId.AugTriad:
      return (
        CHORD_QUALITY_PRESET_MAP.get(
          ChordQualityId.Augmented
        ) as IChordQualityPreset
      ).term[symbolType];
    case ChordId.DimTriad:
      return (
        CHORD_QUALITY_PRESET_MAP.get(
          ChordQualityId.Diminished
        ) as IChordQualityPreset
      ).term[symbolType];
  }
};

export const getNumeralText = (n, presetId) => {
  const text = NumberUtils.romanize(n);
  switch (presetId) {
    case ChordId.HalfDim7:
    case ChordId.Min7:
    case ChordId.MinTriad:
    case ChordId.DimTriad:
      return text.toLowerCase();
    case ChordId.MajTriad:
    case ChordId.Maj7:
    case ChordId.Dom7:
    case ChordId.AugTriad:
    default:
      return text;
  }
};

export const getNumeralParts = (
  presetId: ChordId,
  n: number,
  symbolType?: string
): [string, string] => {
  return [getNumeralText(n, presetId), getSymbol(presetId, symbolType)];
};
