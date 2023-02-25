import NumberUtils from "../general/Number.utils";
import { ChordId } from "./Chord.presets";

export const getSymbol = (presetId: ChordId, symbolType = "jazz") => {
  switch (presetId) {
    case ChordId.MajTriad:
    case ChordId.Maj7:
    case ChordId.Maj6:
      return CHORD_QUALITY.major.name[symbolType];
    case ChordId.MinTriad:
    case ChordId.Min7:
    case ChordId.Min6:
      return CHORD_QUALITY.minor.name[symbolType];
    case ChordId.Dom7:
      return CHORD_QUALITY.dominant.name[symbolType];
    case ChordId.HalfDim7:
      return CHORD_QUALITY.halfDiminished.name[symbolType];
    case ChordId.AugTriad:
      return CHORD_QUALITY.augmented.name[symbolType];
    case ChordId.DimTriad:
      return CHORD_QUALITY.diminished.name[symbolType];
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
