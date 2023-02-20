import NumberUtils from "../general/Number.utils";
import { ChordId, CHORD_QUALITY } from "./Model.constants";

export const getSymbol = (modelId, symbolType = "jazz") => {
  switch (modelId) {
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

export const getNumeralText = (n, modelId) => {
  const text = NumberUtils.romanize(n);
  switch (modelId) {
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
