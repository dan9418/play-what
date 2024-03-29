import { ColorSchemeFn, ColorSchemeId } from "./Color.utils";
import { CHORD_PRESETS } from "./Chord.constants";
import { TuningId } from "./Tuning.constants";
import { VoicingId, VoicingValue } from "./Voicing.constants";
import { AnyPodListPreset } from "./Core.derived";
import { INotePreset, NOTE_PRESETS } from "./Note.constants";

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
  podListPreset: AnyPodListPreset;
  rootNotePreset: INotePreset;
}

export interface IFretContext {
  stringIndex: number;
  fretIndex: number;
  tuningValue: number[];
  podListPreset: AnyPodListPreset;
  rootNotePreset: INotePreset;
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
  podListPreset: CHORD_PRESETS[0],
  rootNotePreset: NOTE_PRESETS[0],
};
