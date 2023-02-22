import ArrayUtils from "../../core/general/Array.utils";

export enum VoicingId {
  None = "None",
  Chord_Triad_CShape_1 = "Chord_Triad_CShape_1",
  Chord_Triad_AShape_1 = "Chord_Triad_AShape_1",
  Chord_Triad_GShape_1 = "Chord_Triad_GShape_1",
  Chord_Triad_EShape_1 = "Chord_Triad_EShape_1",
  Chord_Triad_DShape_1 = "Chord_Triad_DShape_1",
  Chord_Sixth_CShape_1 = "Chord_Sixth_CShape_1",
  Chord_Sixth_AShape_1 = "Chord_Sixth_AShape_1",
  Chord_Sixth_GShape_1 = "Chord_Sixth_GShape_1",
  Chord_Sixth_EShape_1 = "Chord_Sixth_EShape_1",
  Chord_Sixth_DShape_1 = "Chord_Sixth_DShape_1",
  Chord_Seventh_CShape_1 = "Chord_Seventh_CShape_1",
  Chord_Seventh_AShape_1 = "Chord_Seventh_AShape_1",
  Chord_Seventh_GShape_1 = "Chord_Seventh_GShape_1",
  Chord_Seventh_EShape_1 = "Chord_Seventh_EShape_1",
  Chord_Seventh_DShape_1 = "Chord_Seventh_DShape_1",
  Chord_Shell_E_37 = "Chord_Shell_E_37",
  Chord_Shell_E_73 = "Chord_Shell_E_73",
  Chord_Shell_A_37 = "Chord_Shell_A_37",
  Chord_Shell_A_73 = "Chord_Shell_A_73",
  Chord_Shell_D_37 = "Chord_Shell_D_37",
  Chord_Shell_D_73 = "Chord_Shell_D_73",
  Scale_DoubleOctave_CShape_1 = "Scale_DoubleOctave_CShape_1",
  Scale_DoubleOctave_CShape_2 = "Scale_DoubleOctave_CShape_2",
  Scale_DoubleOctave_AShape_1 = "Scale_DoubleOctave_AShape_1",
  Scale_DoubleOctave_GShape_1 = "Scale_DoubleOctave_GShape_1",
  Scale_DoubleOctave_EShape_1 = "Scale_DoubleOctave_EShape_1",
  Scale_DoubleOctave_EShape_2 = "Scale_DoubleOctave_EShape_2",
  Scale_DoubleOctave_DShape_1 = "Scale_DoubleOctave_DShape_1",
}

export type VoicingValue = (number | number[] | undefined)[];

export interface IVoicing {
  id: VoicingId;
  name: string;
  value: VoicingValue;
}

const formatPreset = (
  id: VoicingId,
  name: string,
  value: VoicingValue
): IVoicing => ({
  id,
  name,
  value,
});

export const VOICING_PRESET_MAP = new Map<VoicingId, IVoicing>([
  [VoicingId.None, formatPreset(VoicingId.None, "None", [])],
  // Triads
  [
    VoicingId.Chord_Triad_CShape_1,
    formatPreset(VoicingId.Chord_Triad_CShape_1, "C Shape Triad", [
      3,
      1,
      5,
      3,
      1,
      undefined,
    ]),
  ],
  [
    VoicingId.Chord_Triad_AShape_1,
    formatPreset(VoicingId.Chord_Triad_AShape_1, "A Shape Triad", [
      5,
      3,
      1,
      5,
      1,
      undefined,
    ]),
  ],
  [
    VoicingId.Chord_Triad_GShape_1,
    formatPreset(
      VoicingId.Chord_Triad_GShape_1,
      "G Shape Triad",
      [1, 5, 1, 5, 3, 1]
    ),
  ],
  [
    VoicingId.Chord_Triad_EShape_1,
    formatPreset(
      VoicingId.Chord_Triad_EShape_1,
      "E Shape Triad",
      [1, 5, 3, 1, 5, 1]
    ),
  ],
  [
    VoicingId.Chord_Triad_DShape_1,
    formatPreset(VoicingId.Chord_Triad_DShape_1, "D Shape Triad", [
      3,
      1,
      5,
      1,
      undefined,
      undefined,
    ]),
  ],
  // Sixths
  [
    VoicingId.Chord_Sixth_CShape_1,
    formatPreset(VoicingId.Chord_Sixth_CShape_1, "C Shape 6th Chord", [
      3,
      6,
      5,
      3,
      1,
      undefined,
    ]),
  ],
  [
    VoicingId.Chord_Sixth_AShape_1,
    formatPreset(VoicingId.Chord_Sixth_AShape_1, "A Shape 6th Chord", [
      5,
      3,
      6,
      5,
      1,
      undefined,
    ]),
  ],
  [
    VoicingId.Chord_Sixth_GShape_1,
    formatPreset(
      VoicingId.Chord_Sixth_GShape_1,
      "G Shape 6th Chord",
      [6, 5, 1, 5, 3, 1]
    ),
  ],
  [
    VoicingId.Chord_Sixth_EShape_1,
    formatPreset(
      VoicingId.Chord_Sixth_EShape_1,
      "E Shape 6th Chord",
      [1, 5, 3, 6, 5, 1]
    ),
  ],
  [
    VoicingId.Chord_Sixth_DShape_1,
    formatPreset(VoicingId.Chord_Sixth_DShape_1, "D Shape 6th Chord", [
      3,
      6,
      5,
      1,
      undefined,
      undefined,
    ]),
  ],
  // Sevenths
  [
    VoicingId.Chord_Seventh_CShape_1,
    formatPreset(VoicingId.Chord_Seventh_CShape_1, "C Shape 7th Chord", [
      3,
      7,
      5,
      3,
      1,
      undefined,
    ]),
  ],
  [
    VoicingId.Chord_Seventh_AShape_1,
    formatPreset(VoicingId.Chord_Seventh_AShape_1, "A Shape 7th Chord", [
      5,
      3,
      7,
      5,
      1,
      undefined,
    ]),
  ],
  [
    VoicingId.Chord_Seventh_GShape_1,
    formatPreset(
      VoicingId.Chord_Seventh_GShape_1,
      "G Shape 7th Chord",
      [7, 5, 1, 5, 3, 1]
    ),
  ],
  [
    VoicingId.Chord_Seventh_EShape_1,
    formatPreset(
      VoicingId.Chord_Seventh_EShape_1,
      "E Shape 7th Chord",
      [1, 5, 3, 7, 5, 1]
    ),
  ],
  [
    VoicingId.Chord_Seventh_DShape_1,
    formatPreset(VoicingId.Chord_Seventh_DShape_1, "D Shape 7th Chord", [
      3,
      7,
      5,
      1,
      undefined,
      undefined,
    ]),
  ],
  // Shells
  [
    VoicingId.Chord_Shell_E_37,
    formatPreset(VoicingId.Chord_Shell_E_37, "Shell E 3-7", [
      undefined,
      undefined,
      undefined,
      7,
      3,
      1,
    ]),
  ],
  [
    VoicingId.Chord_Shell_E_73,
    formatPreset(VoicingId.Chord_Shell_E_73, "Shell E 7-3", [
      undefined,
      undefined,
      3,
      7,
      undefined,
      1,
    ]),
  ],
  [
    VoicingId.Chord_Shell_A_37,
    formatPreset(VoicingId.Chord_Shell_A_37, "Shell A 3-7", [
      undefined,
      undefined,
      7,
      3,
      1,
      undefined,
    ]),
  ],
  [
    VoicingId.Chord_Shell_A_73,
    formatPreset(VoicingId.Chord_Shell_A_73, "Shell A 7-3", [
      undefined,
      3,
      7,
      undefined,
      1,
      undefined,
    ]),
  ],
  [
    VoicingId.Chord_Shell_D_37,
    formatPreset(VoicingId.Chord_Shell_D_37, "Shell D 3-7", [
      undefined,
      7,
      3,
      1,
      undefined,
      undefined,
    ]),
  ],
  [
    VoicingId.Chord_Shell_D_73,
    formatPreset(VoicingId.Chord_Shell_D_73, "Shell D 7-3", [
      3,
      7,
      undefined,
      1,
      undefined,
      undefined,
    ]),
  ],
  // CAGED Scales
  [
    VoicingId.Scale_DoubleOctave_EShape_1,
    formatPreset(
      VoicingId.Scale_DoubleOctave_EShape_1,
      "E Shape Scale (Locrian)",
      [
        [1, 2, 3],
        [6, 7],
        [3, 4, 5],
        [7, 1, 2],
        [4, 5, 6],
        [1, 2, 3],
      ]
    ),
  ],
  [
    VoicingId.Scale_DoubleOctave_EShape_2,
    formatPreset(
      VoicingId.Scale_DoubleOctave_EShape_2,
      "E Shape Scale (Ionian)",
      [
        [7, 1, 2],
        [5, 6],
        [2, 3, 4],
        [6, 7, 1],
        [3, 4, 5],
        [1, 2],
      ]
    ),
  ],
  [
    VoicingId.Scale_DoubleOctave_DShape_1,
    formatPreset(
      VoicingId.Scale_DoubleOctave_DShape_1,
      "D Shape Scale (Dorian)",
      [
        [1, 2, 3],
        [5, 6, 7],
        [2, 3, 4],
        [6, 7, 1],
        [4, 5],
        [1, 2, 3],
      ]
    ),
  ],
  [
    VoicingId.Scale_DoubleOctave_CShape_1,
    formatPreset(
      VoicingId.Scale_DoubleOctave_CShape_1,
      "C Shape Scale (Phrygian)",
      [
        [1, 2, 3],
        [5, 6, 7],
        [3, 4],
        [7, 1, 2],
        [4, 5, 6],
        [1, 2, 3],
      ]
    ),
  ],
  [
    VoicingId.Scale_DoubleOctave_CShape_2,
    formatPreset(
      VoicingId.Scale_DoubleOctave_CShape_2,
      "C Shape Scale (Lydian)",
      [
        [7, 1, 2],
        [4, 5, 6],
        [2, 3],
        [6, 7, 1],
        [3, 4, 5],
        [1, 2],
      ]
    ),
  ],
  [
    VoicingId.Scale_DoubleOctave_AShape_1,
    formatPreset(
      VoicingId.Scale_DoubleOctave_AShape_1,
      "A Shape Scale (Mixolydian)",
      [
        [1, 2],
        [5, 6, 7],
        [2, 3, 4],
        [6, 7, 1],
        [3, 4, 5],
        [1, 2],
      ]
    ),
  ],
  [
    VoicingId.Scale_DoubleOctave_GShape_1,
    formatPreset(
      VoicingId.Scale_DoubleOctave_GShape_1,
      "G Shape Scale (Aeolian)",
      [
        [1, 2, 3],
        [5, 6, 7],
        [2, 3, 4],
        [7, 1],
        [4, 5, 6],
        [1, 2, 3],
      ]
    ),
  ],
]);

export const VOICING_PRESETS = ArrayUtils.mapToArray(VOICING_PRESET_MAP);
