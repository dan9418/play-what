import { IModelConfig } from "../../core/models/Model.constants";
import { ColorSchemeFn, ColorSchemeId } from "../color/Color.utils";
import { CHORD_PRESETS, NOTE_PRESETS } from "../models/Model.presets";
import { TuningId } from "./Fretboard.tuning";
import { VoicingId, VoicingValue } from "./Fretboard.voicing";

export const DOTTED_FRET_INDICES = [
  true,
  false,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
];

export const FRET_SIZE_RATIO = Math.pow(1 / 2, 1 / 12);

export interface IFretboardProps {
  // UI
  fretRange: [number, number];
  showFretDots: boolean;
  showFretNumbers: boolean;
  // Info
  colorSchemeId: ColorSchemeId;
  voicingId: VoicingId;
  tuningId: TuningId;
  modelConfig: IModelConfig;
  rootModelConfig: IModelConfig;
}

export interface IFretContext {
  stringIndex: number;
  fretIndex: number;
  tuningValue: number[];
  modelConfig: IModelConfig;
  rootModelConfig: IModelConfig;
  colorSchemeFn: ColorSchemeFn;
  voicingValue: VoicingValue;
}

export interface IFretConfig {
  color?: string;
  opacity?: number;
}

export interface IFretMap {
  fretNums: number[];
  fretDots: string[];
  strings: IFretConfig[][];
}

export const DEFAULT_FRETBOARD_PROPS: IFretboardProps = {
  fretRange: [1, 12],
  showFretDots: true,
  showFretNumbers: true,
  colorSchemeId: ColorSchemeId.HighlightRoot,
  voicingId: VoicingId.None,
  tuningId: TuningId.Standard,
  modelConfig: CHORD_PRESETS[0],
  rootModelConfig: NOTE_PRESETS[0],
};
