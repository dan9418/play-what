import {
  ITuning,
  TuningId,
  TUNING_PRESET_MAP,
} from "../fretboard/Fretboard.tuning";
import { getDotsForFret } from "../fretboard/Fretboard.utils";

// FRETBOARD

interface IFretboardContext {
  fretRange: [number, number];
  tuning: ITuning;
}

const DEFAULT_FRETBOARD_CONTEXT: IFretboardContext = {
  fretRange: [0, 12],
  tuning: TUNING_PRESET_MAP.get(TuningId.Standard) as ITuning,
};

interface IFretboardConfig {
  fretNumberLabels: (number | undefined)[];
  fretDotLabels: (string | undefined)[];
  stringLabels: (number | string | undefined)[];
}

// FRET

interface IFretContext {
  index: number;
  number: number;
  noteIndex: number;
}

export interface IFretConfig {
  color?: string;
  text?: string | number;
  opacity?: number;
}

// TYPES

type TGetFretboardConfig = (
  fretboardContext: IFretboardContext
) => IFretboardConfig;

type TGetFretConfig = (fretContext: IFretContext) => IFretConfig;

export interface IFretTableProps {
  fretboardConfig: IFretboardConfig;
  fretMap: IFretConfig[][];
}

// FUNCTIONS

export const DEFAULT_GET_FRETBOARD_CONFIG: TGetFretboardConfig = (
  fretboardContext = DEFAULT_FRETBOARD_CONTEXT
): IFretboardConfig => {
  const { fretRange, tuning } = fretboardContext;
  const [lo, hi] = fretRange as [number, number];
  const numFrets = hi - lo + 1;
  const numStrings = (tuning as ITuning).value.length;

  const fretNumberLabels: number[] = [];
  for (let i = 0; i < numFrets; i++) {
    fretNumberLabels.push(lo + i);
  }

  const fretDotLabels: string[] = [];
  for (let i = 0; i < numFrets; i++) {
    fretDotLabels.push(getDotsForFret(lo + i));
  }

  const stringLabels: string[] = [];
  for (let i = 0; i < numStrings; i++) {
    stringLabels.push("");
  }

  return {
    fretDotLabels,
    fretNumberLabels,
    stringLabels,
  };
};

export const DEFAULT_GET_FRET_CONFIG: TGetFretConfig = (
  fretContext
): IFretConfig => {
  return {
    color: "blue",
    text: "",
    opacity: 1,
  };
};

export const getFretTableProps = (
  fretboardContext = DEFAULT_FRETBOARD_CONTEXT,
  getFretboardConfig: TGetFretboardConfig = DEFAULT_GET_FRETBOARD_CONFIG,
  getFretConfig: TGetFretConfig = DEFAULT_GET_FRET_CONFIG
): IFretTableProps => {
  const { fretRange, tuning } = fretboardContext;
  const [lo, hi] = fretRange as [number, number];
  const numFrets = hi - lo + 1;
  const numStrings = (tuning as ITuning).value.length;

  const strings: IFretConfig[][] = [];
  for (let s = 0; s < numStrings; s++) {
    const frets: IFretConfig[] = [];
    for (let f = 0; f < numFrets; f++) {
      const openNoteIndex = (tuning as ITuning).value[f];
      frets.push(
        getFretConfig({
          index: f,
          number: lo + f,
          noteIndex: openNoteIndex + f,
        })
      );
    }
    strings.push(frets);
  }

  return {
    fretboardConfig: getFretboardConfig(fretboardContext),
    fretMap: strings,
  };
};
