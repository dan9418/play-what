import Chord from "../../core/models/Chord";
import IntervalSpan from "../../core/models/Interval";
import { IModelConfig } from "../../core/models/Model.constants";
import Note from "../../core/models/Note";
import Scale from "../../core/models/Scale";
import { ITuning, TuningId, TUNING_PRESET_MAP } from "./Fretboard.tuning";
import { IVoicing } from "./Fretboard.voicing";

export interface IFretLabelProps {
  note?: Note;
  color?: string;
  freq?: number;
}

export interface IFretboardProps {
  fretRange?: [number, number];
  showFretDots?: boolean;
  showFretNumbers?: boolean;
  colorMapFn?: (fretProps: IFretProps) => string | undefined;
  voicing?: IVoicing;
  tuning?: number[]; // ITuning,
  model?: Chord | Scale;
}

export interface IFretProps extends IFretboardProps {
  stringIndex: number;
  fretIndex: number;
}

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
  interval: IntervalSpan,
  voicing: IVoicing,
  stringIndex: number
) => {
  if (!voicing || !voicing.value) return true;
  const v = voicing.value[stringIndex];
  const d = interval.getDegree();
  if (Array.isArray(v)) {
    return v.some((n) => doesVoicingValueMatch(d, n));
  } else if (typeof v === "number") {
    return doesVoicingValueMatch(d, v);
  }
  return false;
};

export const getFretColor = (props: IFretProps): string | undefined => {
  const { stringIndex, fretIndex, tuning, model, voicing } = props;
  const noteIndex = tuning[stringIndex] + fretIndex;
  const [interval, note] = model.tryGetPodPairAtPitch(noteIndex);

  if (!note) return;

  if (voicing && !isIntervalInVoicing(interval, voicing, stringIndex)) {
    return `#00000033`;
  }

  return interval.getColor();
};

export const DEFAULT_FRETBOARD_PROPS: IFretboardProps = {
  fretRange: [1, 12],
  tuning: TUNING_PRESET_MAP.get(TuningId.Standard).value,
  showFretDots: true,
  showFretNumbers: true,
  colorMapFn: getFretColor,
};

export const getFretRatios = (numFrets: number): number[] => {
  const ratios = [];
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
