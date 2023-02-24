import NumberUtils from "../general/Number.utils";
import {
  ChordId,
  IModelConfig,
  IntervalId,
  IPod,
  MAX_POD,
  NoteId,
  PresetId,
  PresetType,
  ScaleId,
} from "./Model.constants";
import {
  CHORD_PRESETS,
  CHORD_PRESET_MAP,
  INTERVAL_PRESET_MAP,
  NOTE_PRESET_MAP,
  SCALE_PRESETS,
  SCALE_PRESET_MAP,
} from "./Model.presets";
import { getName } from "./Note.utils";

// Sound

/*static playSound = (note: IPod): void => {
    const frequency = TuningUtils.getFrequency(note[0]);
    ToneUtils.playSound(frequency)
}*/

/*static playSoundList = (notes: IPod[]): void => {
    const frequencies = notes.map(n => TuningUtils.getFrequency(n[0]));
    ToneUtils.playSound(frequencies)
}*/

// Search

const isPodAtPitch = (
  pod: IPod,
  p: number,
  matchOctave = false
): IPod | null => {
  const pitchOffset = 0;
  const target = p - pitchOffset;
  let a = pod[0];
  let b = target;
  if (!matchOctave) {
    a = NumberUtils.modulo(a, 12);
    b = NumberUtils.modulo(b, 12);
  }
  return a === b ? pod : null;
};

export const getIndexOfPodAtPitch = (
  A: IPod[],
  p: number,
  matchOctave: boolean
): number | null => {
  const pod = A.findIndex((a) => isPodAtPitch(a, p, matchOctave));
  return pod !== -1 ? pod : null;
};

/*static sort = (podList: IPod[]) => {
    return podList.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        else if (a[0] > b[0]) return 1;
        else {
            if (a[1] < b[1]) return -1;
            else if (a[1] > b[1]) return 1;
            else return 0;
        }
    });
}*/

export const addPods = (a: IPod, b: IPod): IPod => {
  const p = a[0] + b[0];
  const d = a[1] + b[1];
  const result: IPod = [p, d];
  return result;
};

export const subtractPods = (a: IPod, b: IPod): IPod => {
  const p = a[0] - b[0];
  const d = a[1] - b[1];
  const result: IPod = [p, d];
  return result;
};

export const addPodList = (a: IPod, B: IPod[]): IPod[] => {
  const result = B.map((b) => addPods(a, b));
  return result;
};

export const reducePod = (a: IPod, max = MAX_POD): IPod => {
  const p = NumberUtils.modulo(a[0], max[0]);
  const d = NumberUtils.modulo(a[1], max[1]);
  return [p, d];
};

export const arePodsEqual = (a: IPod, b: IPod): boolean => {
  if (!a || !b || a.length !== 2 || b.length !== 2) return false;
  return a[0] === b[0] && a[1] === b[1];
};

export const reducePodList = (A: IPod[]): IPod[] => {
  return A.map((a) => reducePod(a));
};

export const arePodListsEqual = (A: IPod[], B: IPod[]): boolean => {
  if (!A || !B || A.length !== B.length) return false;
  for (let i = 0; i < A.length; i++) {
    const a = A[i];
    const b = B[i];
    if (!arePodsEqual(a, b)) return false;
  }
  return true;
};

export const listContainsSubset = (
  podList: IPod[],
  subset: IPod[]
): boolean => {
  for (let i = 0; i < subset.length; i++) {
    if (!podList.find((x) => x[0] === subset[i][0] && x[1] === subset[i][1]))
      return false;
  }
  return true;
};

export const getDegree = (pod: IPod) => {
  return NumberUtils.modulo(pod[1], MAX_POD[1]);
};

export const getShortName = (str) =>
  str
    .replace("Major", "Maj")
    .replace("Minor", "Min")
    .replace("Augmented", "Aug")
    .replace("Diminished", "Dim")
    .replace("Suspended", "Sus")
    .replace("Dominant", "Dom")
    .replace("Pentatonic", "Pent")
    .replace("st", "")
    .replace("nd", "")
    .replace("rd", "")
    .replace("th", "");

export const getRootedName = (
  modelConfig: IModelConfig,
  rootModelConfig?: IModelConfig
) => {
  return `${rootModelConfig ? `${getName(rootModelConfig.value)} ` : ""}${
    modelConfig.name
  }`;
};

export const isInSuperset = (intervalPods: IPod[], superset: IPod[]) => {
  if (superset.length <= intervalPods.length) return false;
  return listContainsSubset(superset, intervalPods);
};

export const containsSubset = (intervalPods: IPod[], subset: IPod[]) => {
  if (subset.length >= intervalPods.length) return false;
  return listContainsSubset(intervalPods, subset);
};

export const getSubchords = (intervalPods: IPod[]) => {
  return CHORD_PRESETS.filter((preset) =>
    containsSubset(intervalPods, preset.value)
  );
};

export const getSuperchords = (intervalPods: IPod[]) => {
  return CHORD_PRESETS.filter((preset) =>
    isInSuperset(intervalPods, preset.value)
  );
};

export const getSubscales = (intervalPods: IPod[]) => {
  return SCALE_PRESETS.filter((preset) =>
    containsSubset(intervalPods, preset.value)
  );
};

export const getSuperscales = (intervalPods: IPod[]) => {
  return SCALE_PRESETS.filter((preset) =>
    isInSuperset(intervalPods, preset.value)
  );
};

export const getAllRelated = (intervalPods: IPod[]) => {
  return [
    ...getSubchords(intervalPods),
    ...getSubscales(intervalPods),
    ...getSuperchords(intervalPods),
    ...getSuperscales(intervalPods),
  ];
};

// applyRoot(root: IPod) {
//   let notePods;
//   try {
//     notePods = this.intervalPods.map((ivl) => addPods(root, ivl));
//   } catch (e) {
//     console.error(e);
//     throw new Error("Unable to apply root");
//   }
//   this.root = root;
//   this.notePods = notePods;
//   this.name = `${"ROOT"} ${this.name}`;
//   return this;
// }

export const tryGetPodPairAtPitch = (
  intervalPods: IPod[],
  notePods: IPod[],
  noteIndex: number
): [IPod, IPod] | [undefined, undefined] => {
  if (!notePods) return [undefined, undefined];

  const index = getIndexOfPodAtPitch(notePods, noteIndex, false);

  if (index == null) return [undefined, undefined];

  return [intervalPods[index], (notePods as IPod[])[index]];
};

export const getModelConfigById = (
  presetType: PresetType,
  presetId: PresetId
) => {
  if (presetType === PresetType.Interval) {
    return INTERVAL_PRESET_MAP.get(presetId as IntervalId);
  } else if (presetType === PresetType.Note) {
    return NOTE_PRESET_MAP.get(presetId as NoteId);
  } else if (presetType === PresetType.Chord) {
    return CHORD_PRESET_MAP.get(presetId as ChordId);
  } else if (presetType === PresetType.Scale) {
    return SCALE_PRESET_MAP.get(presetId as ScaleId);
  }
};

export const getNotePods = (
  rootPod: IPod,
  intervalPods: IPod[],
  octave = 4
): IPod[] => {
  const notePods = intervalPods.map((ivl) => {
    const notePod = addPods(rootPod, ivl);
    return [
      (octave - 4) * 12 + NumberUtils.modulo(notePod[0], 12),
      notePod[1],
    ] as IPod;
  });
  return notePods;
};
