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

export const DEGREE_PRESET_MAP = new Map<DegreeId, any>([
  [
    DegreeId.C,
    {
      id: DegreeId.C,
      name: "C",
      tags: [],
      value: 0,
    },
  ],
  [
    DegreeId.D,
    {
      id: DegreeId.D,
      name: "D",
      tags: [],
      value: 1,
    },
  ],
  [
    DegreeId.E,
    {
      id: DegreeId.E,
      name: "E",
      tags: [],
      value: 2,
    },
  ],
  [
    DegreeId.F,
    {
      id: DegreeId.F,
      name: "F",
      tags: [],
      value: 3,
    },
  ],
  [
    DegreeId.G,
    {
      id: DegreeId.G,
      name: "G",
      tags: [],
      value: 4,
    },
  ],
  [
    DegreeId.A,
    {
      id: DegreeId.A,
      name: "A",
      tags: [],
      value: 5,
    },
  ],
  [
    DegreeId.B,
    {
      id: DegreeId.B,
      name: "B",
      tags: [],
      value: 6,
    },
  ],
]);

export const ROOT_DEGREE = DEGREE_PRESET_MAP.get(DegreeId.C).value;

export const DEGREE_PRESETS = Array.from(DEGREE_PRESET_MAP).map(([k, v]) => v);
