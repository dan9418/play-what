import { COLOR_SCHEME_PRESET_MAP, IColorSchemePreset } from "./Color.utils";
import {
  DEFAULT_FRETBOARD_PROPS,
  DOTTED_FRET_INDICES,
  FRET_SIZE_RATIO,
  IFretboardProps,
  IFretConfig,
  IFretContext,
  IFretMap,
} from "./Fretboard.constants";
import { IPod } from "./Pod.constants";
import { getDegree, getNotePods, tryGetPodPairAtPitch } from "./Pod.utils";
import { ITuningPreset, TUNING_PRESET_MAP } from "./Tuning.constants";
import { IVoicingPreset, VOICING_PRESET_MAP } from "./Voicing.constants";

export const isIntervalInVoicing = (
  interval: IPod,
  voicing: IVoicingPreset,
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
    podListPreset,
    rootNotePreset,
    voicingValue,
    colorSchemeFn,
  } = fretContext;

  const noteIndex = tuningValue[stringIndex] + fretIndex;

  const rootPod = rootNotePreset.pod;
  const intervalPods = podListPreset.pods;
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
    podListPreset,
    rootNotePreset,
  } = props;

  const [lo, hi] = fretRange;

  const tuningValue = (TUNING_PRESET_MAP.get(tuningId) as ITuningPreset).value;
  const voicingValue = (VOICING_PRESET_MAP.get(voicingId) as IVoicingPreset)
    .value;
  const colorSchemeFn = (
    COLOR_SCHEME_PRESET_MAP.get(colorSchemeId) as IColorSchemePreset
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
          podListPreset,
          rootNotePreset,
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
