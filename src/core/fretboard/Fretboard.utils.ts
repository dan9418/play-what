import { IModelConfig, IPod } from "../../core/models/Model.constants";
import {
  getDegree,
  getNotePods,
  tryGetPodPairAtPitch,
} from "../../core/models/Pod.static";
import {
  ColorSchemeFn,
  ColorSchemeId,
  COLOR_SCHEME_PRESET_MAP,
  IColorScheme,
} from "../color/Color.utils";
import { CHORD_PRESETS, NOTE_PRESETS } from "../models/Model.presets";
import { ITuning, TuningId, TUNING_PRESET_MAP } from "./Fretboard.tuning";
import {
  IVoicing,
  VoicingId,
  VoicingValue,
  VOICING_PRESET_MAP,
} from "./Fretboard.voicing";

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

export const isIntervalInVoicing = (
  interval: IPod,
  voicing: IVoicing,
  stringIndex: number
) => {
  if (!voicing || !voicing.value) return true;
  const v = voicing.value[stringIndex];
  const d = getDegree(interval);
  if (Array.isArray(v)) {
    return v.some((n) => doesVoicingValueMatch(d, n));
  } else if (typeof v === "number") {
    return doesVoicingValueMatch(d, v);
  }
  return false;
};

const getFretConfig = (fretContext: IFretContext): IFretConfig => {
  const {
    stringIndex,
    fretIndex,
    tuningValue,
    modelConfig,
    rootModelConfig,
    voicingValue,
    colorSchemeFn,
  } = fretContext;

  const noteIndex = tuningValue[stringIndex] + fretIndex;

  const rootPod = rootModelConfig.value;
  const intervalPods = modelConfig.value;
  const notePods = getNotePods(rootPod, intervalPods);

  const [interval, note] = tryGetPodPairAtPitch(
    intervalPods,
    notePods,
    noteIndex
  );

  if (!note) return {};

  const color = colorSchemeFn(note, interval);

  return {
    color,
    //opacity: voicingValue && !isIntervalInVoicing(interval, voicingValue, stringIndex) ? 0.5 : 1
  };
};

export const getFretRatios = (numFrets: number): number[] => {
  const ratios: number[] = [];
  for (let i = 1; i <= numFrets; i++) {
    ratios.push(i <= 1 ? 1 : ratios[i - 2] * FRET_SIZE_RATIO);
  }
  return ratios;
};

export const getDotsForFret = (fretNumber: number): string => {
  if (fretNumber === 0) return "";
  const mod = fretNumber % 12;
  if (mod === 0) return "• •";
  else if (DOTTED_FRET_INDICES[mod]) return "•";
  return "";
};

const doesVoicingValueMatch = (d: number, v: number) => {
  return d + 1 === v;
};

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

export const getFretMapFromFretboardProps = (
  userProps: Partial<IFretboardProps>
): IFretMap => {
  const props = { ...DEFAULT_FRETBOARD_PROPS, ...userProps };

  const {
    showFretDots,
    showFretNumbers,
    fretRange,
    tuningId,
    colorSchemeId,
    voicingId,
    modelConfig,
    rootModelConfig,
  } = props;

  const [lo, hi] = fretRange;

  const tuningValue = (TUNING_PRESET_MAP.get(tuningId) as ITuning).value;
  const voicingValue = (VOICING_PRESET_MAP.get(voicingId) as IVoicing).value;
  const colorSchemeFn = (
    COLOR_SCHEME_PRESET_MAP.get(colorSchemeId) as IColorScheme
  ).fn;

  const numFrets = hi - lo + 1;
  const numStrings = tuningValue.length;

  const fretNums: number[] = [];
  if (showFretNumbers) {
    for (let i = 0; i < numFrets; i++) {
      fretNums.push(lo + i);
    }
  }

  const fretDots: string[] = [];
  if (showFretDots) {
    for (let i = 0; i < numFrets; i++) {
      fretDots.push(getDotsForFret(lo + i));
    }
  }

  const strings: IFretConfig[][] = [];
  for (let s = 0; s < numStrings; s++) {
    const frets: IFretConfig[] = [];
    for (let f = lo; f <= hi; f++) {
      frets.push(
        getFretConfig({
          stringIndex: s,
          fretIndex: f,
          tuningValue,
          modelConfig,
          rootModelConfig,
          colorSchemeFn,
          voicingValue,
        })
      );
    }
    strings.push(frets);
  }

  return {
    fretNums,
    fretDots,
    strings,
  };
};
