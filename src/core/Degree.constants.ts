import { IPreset, PresetMap } from "./Core.constants";
import ArrayUtils from "./primitives/Array.utils";

export const MAX_DEGREE = 7;

export enum DegreeId {
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  A = "A",
  B = "B",
}

export interface IDegreePreset extends IPreset<DegreeId> {
  degreeIndex: number;
}

export const DEGREE_PRESET_MAP: PresetMap<DegreeId, IDegreePreset> = new Map([
  [
    DegreeId.C,
    {
      presetId: DegreeId.C,
      name: "C",
      degreeIndex: 0,
    },
  ],
  [
    DegreeId.D,
    {
      presetId: DegreeId.D,
      name: "D",
      degreeIndex: 1,
    },
  ],
  [
    DegreeId.E,
    {
      presetId: DegreeId.E,
      name: "E",
      degreeIndex: 2,
    },
  ],
  [
    DegreeId.F,
    {
      presetId: DegreeId.F,
      name: "F",
      degreeIndex: 3,
    },
  ],
  [
    DegreeId.G,
    {
      presetId: DegreeId.G,
      name: "G",
      degreeIndex: 4,
    },
  ],
  [
    DegreeId.A,
    {
      presetId: DegreeId.A,
      name: "A",
      degreeIndex: 5,
    },
  ],
  [
    DegreeId.B,
    {
      presetId: DegreeId.B,
      name: "B",
      degreeIndex: 6,
    },
  ],
]);

export const ROOT_DEGREE = (DEGREE_PRESET_MAP.get(DegreeId.C) as IDegreePreset)
  .degreeIndex;

export const DEGREE_PRESETS = ArrayUtils.mapToArray(DEGREE_PRESET_MAP);
