import ArrayUtils from "../general/Array.utils";
import { IPreset, PresetMap } from "./Model.constants";

export enum AccidentalId {
  DoubleFlat = "double-flat",
  Flat = "flat",
  Natural = "natural",
  Sharp = "sharp",
  DoubleSharp = "double-sharp",
}

interface IAccidentalPreset extends IPreset<AccidentalId, number> {
  symbol: string;
}

export const ACCIDENTAL_PRESET_MAP: PresetMap<AccidentalId, IAccidentalPreset> =
  new Map([
    [
      AccidentalId.DoubleFlat,
      {
        presetId: AccidentalId.DoubleFlat,
        name: "Double Flat",
        symbol: "bb",
        value: -2,
      },
    ],
    [
      AccidentalId.Flat,
      {
        presetId: AccidentalId.Flat,
        name: "Flat",
        symbol: "b",
        value: -1,
      },
    ],
    [
      AccidentalId.Natural,
      {
        presetId: AccidentalId.Natural,
        name: "Natural",
        symbol: "♮",
        value: 0,
      },
    ],
    [
      AccidentalId.Sharp,
      {
        presetId: AccidentalId.Sharp,
        name: "Sharp",
        symbol: "#",
        value: 1,
      },
    ],
    [
      AccidentalId.DoubleSharp,
      {
        presetId: AccidentalId.DoubleSharp,
        name: "Double Sharp",
        symbol: "##",
        value: 2,
      },
    ],
  ]);

export const ACCIDENTAL_PRESETS = ArrayUtils.mapToArray(ACCIDENTAL_PRESET_MAP);
