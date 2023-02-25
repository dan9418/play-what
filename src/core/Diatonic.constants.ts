import ArrayUtils from "./Array.utils";
import { PresetMap } from "../models/Model.constants";
import { IPodPreset } from "../models/Pod.presets";
import { ROOT_DEGREE } from "./Degree.constants";
import { ROOT_PITCH } from "./Pitch.constants";

export enum DiatonicId {
  Tonic = "tonic",
  Supertonic = "supertonic",
  Mediant = "mediant",
  Subdominant = "submediant",
  Dominant = "dominant",
  Submediant = "submediant",
  Subtonic = "subtonic",
}

export interface IDiatonicPreset extends IPodPreset<DiatonicId> {}

export const DIATONIC_PRESET_MAP: PresetMap<DiatonicId, IDiatonicPreset> =
  new Map([
    [
      DiatonicId.Tonic,
      {
        presetId: DiatonicId.Tonic,
        name: "Tonic",
        pod: [0, 0],
      },
    ],
    [
      DiatonicId.Supertonic,
      {
        presetId: DiatonicId.Supertonic,
        name: "Supertonic",
        pod: [2, 1],
      },
    ],
    [
      DiatonicId.Mediant,
      {
        presetId: DiatonicId.Mediant,
        name: "Mediant",
        pod: [4, 2],
      },
    ],
    [
      DiatonicId.Subdominant,
      {
        presetId: DiatonicId.Subdominant,
        name: "Subdominant",
        pod: [5, 3],
      },
    ],
    [
      DiatonicId.Dominant,
      {
        presetId: DiatonicId.Dominant,
        name: "Dominant",
        pod: [7, 4],
      },
    ],
    [
      DiatonicId.Submediant,
      {
        presetId: DiatonicId.Submediant,
        name: "Submediant",
        pod: [9, 5],
      },
    ],
    [
      DiatonicId.Subtonic,
      {
        presetId: DiatonicId.Subtonic,
        name: "Subtonic",
        pod: [11, 6],
      },
    ],
  ]);

export const DIATONIC_PRESETS = ArrayUtils.mapToArray(DIATONIC_PRESET_MAP);

export const ROOT_SCALE = DIATONIC_PRESETS.map((pod, i) => [
  ROOT_PITCH + pod.value[0],
  ROOT_DEGREE + pod.value[1],
]);
