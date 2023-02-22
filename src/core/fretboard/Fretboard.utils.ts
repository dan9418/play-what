import { IModelConfig, IPod } from "../../core/models/Model.constants";
import { getDegree, tryGetPodPairAtPitch } from "../../core/models/Pod.static";
import { ITuning, TuningId, TUNING_PRESET_MAP } from "./Fretboard.tuning";
import { IVoicing } from "./Fretboard.voicing";

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

export const getFretColor = (props: IFretProps): string | undefined => {
  const { stringIndex, fretIndex, tuning, model, voicing } = props;
  const noteIndex = (tuning as number[])[stringIndex] + fretIndex;
  const [interval, note] = tryGetPodPairAtPitch(
    undefined as any,
    undefined as any,
    noteIndex
  );

  if (!note) return;

  if (voicing && !isIntervalInVoicing(interval, voicing, stringIndex)) {
    return `#00000011`;
  }

  if (interval[0] === 0 && interval[1] === 0) return "red";

  return "#555";
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

export interface IFretLabelProps {
  note?: IPod;
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
  model?: IModelConfig;
}

export interface IFretProps extends IFretboardProps {
  stringIndex: number;
  fretIndex: number;
}

export const DEFAULT_FRETBOARD_PROPS: IFretboardProps = {
  fretRange: [1, 12],
  tuning: (TUNING_PRESET_MAP.get(TuningId.Standard) as ITuning).value,
  showFretDots: true,
  showFretNumbers: true,
  colorMapFn: getFretColor,
};
