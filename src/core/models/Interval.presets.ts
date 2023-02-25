import { PresetMap, Tag } from "./Model.constants";
import ArrayUtils from "../general/Array.utils";
import { formatPodPreset, IPod, IPodPreset } from "./Pod.presets";

export enum IntervalId {
  P1 = "unison",
  m2 = "minor-2nd",
  M2 = "major-2nd",
  A2 = "augmented-2nd",
  d3 = "diminished-3rd",
  m3 = "minor-3rd",
  M3 = "major-3rd",
  A3 = "augmented-3rd",
  d4 = "diminished-4th",
  P4 = "perfect-4th",
  A4 = "augmented-4th",
  d5 = "diminished-5th",
  P5 = "perfect-5th",
  A5 = "augmented-5th",
  d6 = "diminished-6th",
  m6 = "minor-6th",
  M6 = "major-6th",
  A6 = "augmented-6th",
  d7 = "diminished-7th",
  m7 = "minor-7th",
  M7 = "major-7th",
  P8 = "octave",
  b9 = "flat-9th",
  x9 = "9th",
  s9 = "sharp-9th",
  b11 = "flat-11th",
  x11 = "11th",
  s11 = "sharp-11th",
  b13 = "flat-13th",
  x13 = "13th",
  s13 = "sharp-13th",
}

export interface IIntervalPreset extends IPodPreset<IntervalId> {}

const formatIntervalPreset = (
  presetId: IntervalId,
  name: string,
  pod: IPod,
  tags: Tag[]
): IIntervalPreset => formatPodPreset(presetId, name, pod, tags);

export const INTERVAL_PRESET_MAP: PresetMap<IntervalId, IIntervalPreset> =
  new Map([
    [
      IntervalId.P1,
      formatIntervalPreset(
        IntervalId.P1,
        "Perfect Unison",
        [0, 0],
        [Tag.Perfect]
      ),
    ],
    [
      IntervalId.m2,
      formatIntervalPreset(
        IntervalId.m2,
        "Minor 2nd",
        [1, 1],
        [Tag.Second, Tag.Minor]
      ),
    ],
    [
      IntervalId.M2,
      formatIntervalPreset(
        IntervalId.M2,
        "Major 2nd",
        [2, 1],
        [Tag.Second, Tag.Major]
      ),
    ],
    [
      IntervalId.A2,
      formatIntervalPreset(
        IntervalId.A2,
        "Augmented 2nd",
        [3, 1],
        [Tag.Second, Tag.Augmented]
      ),
    ],
    [
      IntervalId.d3,
      formatIntervalPreset(
        IntervalId.d3,
        "Diminished 3rd",
        [2, 2],
        [Tag.Third, Tag.Diminished]
      ),
    ],
    [
      IntervalId.m3,
      formatIntervalPreset(
        IntervalId.m3,
        "Minor 3rd",
        [3, 2],
        [Tag.Third, Tag.Minor]
      ),
    ],
    [
      IntervalId.M3,
      formatIntervalPreset(
        IntervalId.M3,
        "Major 3rd",
        [4, 2],
        [Tag.Third, Tag.Major]
      ),
    ],
    [
      IntervalId.A3,
      formatIntervalPreset(
        IntervalId.A3,
        "Augmented 3rd",
        [5, 2],
        [Tag.Third, Tag.Augmented]
      ),
    ],
    [
      IntervalId.d4,
      formatIntervalPreset(
        IntervalId.d4,
        "Diminished 4th",
        [4, 3],
        [Tag.Fourth, Tag.Diminished]
      ),
    ],
    [
      IntervalId.P4,
      formatIntervalPreset(
        IntervalId.P4,
        "Perfect 4th",
        [5, 3],
        [Tag.Fourth, Tag.Perfect]
      ),
    ],
    [
      IntervalId.A4,
      formatIntervalPreset(
        IntervalId.A4,
        "Augmented 4th",
        [6, 3],
        [Tag.Fourth, Tag.Augmented]
      ),
    ],
    [
      IntervalId.d5,
      formatIntervalPreset(
        IntervalId.d5,
        "Diminished 5th",
        [6, 4],
        [Tag.Fifth, Tag.Diminished]
      ),
    ],
    [
      IntervalId.P5,
      formatIntervalPreset(
        IntervalId.P5,
        "Perfect 5th",
        [7, 4],
        [Tag.Fifth, Tag.Perfect]
      ),
    ],
    [
      IntervalId.A5,
      formatIntervalPreset(
        IntervalId.A5,
        "Augmented 5th",
        [8, 4],
        [Tag.Fifth, Tag.Augmented]
      ),
    ],
    [
      IntervalId.d6,
      formatIntervalPreset(
        IntervalId.d6,
        "Diminished 6th",
        [7, 5],
        [Tag.Sixth, Tag.Diminished]
      ),
    ],
    [
      IntervalId.m6,
      formatIntervalPreset(
        IntervalId.m6,
        "Minor 6th",
        [8, 5],
        [Tag.Sixth, Tag.Minor]
      ),
    ],
    [
      IntervalId.M6,
      formatIntervalPreset(
        IntervalId.M6,
        "Major 6th",
        [9, 5],
        [Tag.Sixth, Tag.Major]
      ),
    ],
    [
      IntervalId.A6,
      formatIntervalPreset(
        IntervalId.A6,
        "Augmented 6th",
        [10, 5],
        [Tag.Sixth, Tag.Augmented]
      ),
    ],
    [
      IntervalId.d7,
      formatIntervalPreset(
        IntervalId.d7,
        "Diminished 7th",
        [9, 6],
        [Tag.Seventh, Tag.Diminished]
      ),
    ],
    [
      IntervalId.m7,
      formatIntervalPreset(
        IntervalId.m7,
        "Minor 7th",
        [10, 6],
        [Tag.Seventh, Tag.Minor]
      ),
    ],
    [
      IntervalId.M7,
      formatIntervalPreset(
        IntervalId.M7,
        "Major 7th",
        [11, 6],
        [Tag.Seventh, Tag.Major]
      ),
    ],
    [
      IntervalId.P8,
      formatIntervalPreset(IntervalId.P8, "Octave", [12, 7], [Tag.Perfect]),
    ],
    [
      IntervalId.b9,
      formatIntervalPreset(
        IntervalId.b9,
        "Flat Ninth",
        [13, 8],
        [Tag.Extended]
      ),
    ],
    [
      IntervalId.x9,
      formatIntervalPreset(IntervalId.x9, "Ninth", [14, 8], [Tag.Extended]),
    ],
    [
      IntervalId.s9,
      formatIntervalPreset(
        IntervalId.s9,
        "Sharp Ninth",
        [15, 8],
        [Tag.Extended]
      ),
    ],
    [
      IntervalId.b11,
      formatIntervalPreset(
        IntervalId.b11,
        "Flat Eleventh",
        [16, 10],
        [Tag.Extended]
      ),
    ],
    [
      IntervalId.x11,
      formatIntervalPreset(
        IntervalId.x11,
        "Eleventh",
        [17, 10],
        [Tag.Extended]
      ),
    ],
    [
      IntervalId.s11,
      formatIntervalPreset(
        IntervalId.s11,
        "Sharp Eleventh",
        [18, 10],
        [Tag.Extended]
      ),
    ],
    [
      IntervalId.b13,
      formatIntervalPreset(
        IntervalId.b13,
        "Flat Thirteenth",
        [20, 12],
        [Tag.Extended]
      ),
    ],
    [
      IntervalId.x13,
      formatIntervalPreset(
        IntervalId.x13,
        "Thirteenth",
        [21, 12],
        [Tag.Extended]
      ),
    ],
    [
      IntervalId.s13,
      formatIntervalPreset(
        IntervalId.s13,
        "Sharp Thirteenth",
        [22, 12],
        [Tag.Extended]
      ),
    ],
  ]);

export const CORE_INTERVALS = [
  [INTERVAL_PRESET_MAP.get(IntervalId.P1)],
  [
    INTERVAL_PRESET_MAP.get(IntervalId.m2),
    INTERVAL_PRESET_MAP.get(IntervalId.M2),
  ],
  [
    INTERVAL_PRESET_MAP.get(IntervalId.m3),
    INTERVAL_PRESET_MAP.get(IntervalId.M3),
  ],
  [INTERVAL_PRESET_MAP.get(IntervalId.P4)],
  [INTERVAL_PRESET_MAP.get(IntervalId.P5)],
  [
    INTERVAL_PRESET_MAP.get(IntervalId.m6),
    INTERVAL_PRESET_MAP.get(IntervalId.M6),
  ],
  [
    INTERVAL_PRESET_MAP.get(IntervalId.m7),
    INTERVAL_PRESET_MAP.get(IntervalId.M7),
  ],
];

export const INTERVAL_PRESETS = ArrayUtils.mapToArray(INTERVAL_PRESET_MAP);
