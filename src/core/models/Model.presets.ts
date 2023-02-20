import ArrayUtils from "../general/Array.utils";
import {
  ChordId,
  IModelConfig,
  IntervalId,
  IPod,
  ModelType,
  NoteId,
  PresetId,
  PresetType,
  ScaleId,
  Tag,
} from "./Model.constants";
import { getExtensionInversionId } from "./Pod.static";

// Helpers

const getIsList = (presetType: PresetType): boolean =>
  [PresetType.Chord, PresetType.Scale].includes(presetType);

const formatIntervalList = (value: IntervalId[]) => {
  return value.map((id) => {
    const isExtended =
      id.includes("9") || id.includes("11") || id.includes("13");
    let intervalId = id;
    if (isExtended) {
      intervalId = getExtensionInversionId(id);
    }
    return (INTERVAL_PRESET_MAP.get(intervalId) as IModelConfig).value;
  });
};

const formatPreset = (
  presetType: PresetType,
  presetId: PresetId,
  name: string,
  value: IPod | IntervalId[],
  tags = [] as Tag[],
  aliases = [] as string[]
): IModelConfig => {
  const isList = getIsList(presetType);
  return {
    modelType: isList ? ModelType.Pod : ModelType.PodList,
    presetType,
    presetId,
    name,
    valueIds: value,
    value: Object.freeze(
      isList ? formatIntervalList(value as IntervalId[]) : value
    ),
    aliases,
    tags,
  };
};

// Definition maps

export const NOTE_PRESET_MAP = new Map<NoteId, IModelConfig>([
  [NoteId.C, formatPreset(PresetType.Note, NoteId.C, "C", [0, 0])],
  [NoteId.Cs, formatPreset(PresetType.Note, NoteId.Cs, "C#", [1, 0])],
  [NoteId.Db, formatPreset(PresetType.Note, NoteId.Db, "Db", [1, 1])],
  [NoteId.D, formatPreset(PresetType.Note, NoteId.D, "D", [2, 1])],
  [NoteId.Ds, formatPreset(PresetType.Note, NoteId.Ds, "D#", [3, 1])],
  [NoteId.Eb, formatPreset(PresetType.Note, NoteId.Eb, "Eb", [3, 2])],
  [NoteId.E, formatPreset(PresetType.Note, NoteId.E, "E", [4, 2])],
  [NoteId.Es, formatPreset(PresetType.Note, NoteId.Es, "E#", [5, 2])],
  [NoteId.Fb, formatPreset(PresetType.Note, NoteId.Fb, "Fb", [4, 3])],
  [NoteId.F, formatPreset(PresetType.Note, NoteId.F, "F", [5, 3])],
  [NoteId.Fs, formatPreset(PresetType.Note, NoteId.Fs, "F#", [6, 3])],
  [NoteId.Gb, formatPreset(PresetType.Note, NoteId.Gb, "Gb", [6, 4])],
  [NoteId.G, formatPreset(PresetType.Note, NoteId.G, "G", [7, 4])],
  [NoteId.Gs, formatPreset(PresetType.Note, NoteId.Gs, "G#", [8, 4])],
  [NoteId.Ab, formatPreset(PresetType.Note, NoteId.Ab, "Ab", [8, 5])],
  [NoteId.A, formatPreset(PresetType.Note, NoteId.A, "A", [9, 5])],
  [NoteId.As, formatPreset(PresetType.Note, NoteId.As, "A#", [10, 5])],
  [NoteId.Bb, formatPreset(PresetType.Note, NoteId.Bb, "Bb", [10, 6])],
  [NoteId.B, formatPreset(PresetType.Note, NoteId.B, "B", [11, 6])],
  [NoteId.Bs, formatPreset(PresetType.Note, NoteId.Bs, "B#", [0, 6])],
  [NoteId.Cb, formatPreset(PresetType.Note, NoteId.Cb, "Cb", [11, 0])],
]);

export const INTERVAL_PRESET_MAP = new Map<IntervalId, IModelConfig>([
  [
    IntervalId.P1,
    formatPreset(
      PresetType.Interval,
      IntervalId.P1,
      "Perfect Unison",
      [0, 0],
      [Tag.Perfect]
    ),
  ],
  [
    IntervalId.m2,
    formatPreset(
      PresetType.Interval,
      IntervalId.m2,
      "Minor 2nd",
      [1, 1],
      [Tag.Second, Tag.Minor]
    ),
  ],
  [
    IntervalId.M2,
    formatPreset(
      PresetType.Interval,
      IntervalId.M2,
      "Major 2nd",
      [2, 1],
      [Tag.Second, Tag.Major]
    ),
  ],
  [
    IntervalId.A2,
    formatPreset(
      PresetType.Interval,
      IntervalId.A2,
      "Augmented 2nd",
      [3, 1],
      [Tag.Second, Tag.Augmented]
    ),
  ],
  [
    IntervalId.d3,
    formatPreset(
      PresetType.Interval,
      IntervalId.d3,
      "Diminished 3rd",
      [2, 2],
      [Tag.Third, Tag.Diminished]
    ),
  ],
  [
    IntervalId.m3,
    formatPreset(
      PresetType.Interval,
      IntervalId.m3,
      "Minor 3rd",
      [3, 2],
      [Tag.Third, Tag.Minor]
    ),
  ],
  [
    IntervalId.M3,
    formatPreset(
      PresetType.Interval,
      IntervalId.M3,
      "Major 3rd",
      [4, 2],
      [Tag.Third, Tag.Major]
    ),
  ],
  [
    IntervalId.A3,
    formatPreset(
      PresetType.Interval,
      IntervalId.A3,
      "Augmented 3rd",
      [5, 2],
      [Tag.Third, Tag.Augmented]
    ),
  ],
  [
    IntervalId.d4,
    formatPreset(
      PresetType.Interval,
      IntervalId.d4,
      "Diminished 4th",
      [4, 3],
      [Tag.Fourth, Tag.Diminished]
    ),
  ],
  [
    IntervalId.P4,
    formatPreset(
      PresetType.Interval,
      IntervalId.P4,
      "Perfect 4th",
      [5, 3],
      [Tag.Fourth, Tag.Perfect]
    ),
  ],
  [
    IntervalId.A4,
    formatPreset(
      PresetType.Interval,
      IntervalId.A4,
      "Augmented 4th",
      [6, 3],
      [Tag.Fourth, Tag.Augmented]
    ),
  ],
  [
    IntervalId.d5,
    formatPreset(
      PresetType.Interval,
      IntervalId.d5,
      "Diminished 5th",
      [6, 4],
      [Tag.Fifth, Tag.Diminished]
    ),
  ],
  [
    IntervalId.P5,
    formatPreset(
      PresetType.Interval,
      IntervalId.P5,
      "Perfect 5th",
      [7, 4],
      [Tag.Fifth, Tag.Perfect]
    ),
  ],
  [
    IntervalId.A5,
    formatPreset(
      PresetType.Interval,
      IntervalId.A5,
      "Augmented 5th",
      [8, 4],
      [Tag.Fifth, Tag.Augmented]
    ),
  ],
  [
    IntervalId.d6,
    formatPreset(
      PresetType.Interval,
      IntervalId.d6,
      "Diminished 6th",
      [7, 5],
      [Tag.Sixth, Tag.Diminished]
    ),
  ],
  [
    IntervalId.m6,
    formatPreset(
      PresetType.Interval,
      IntervalId.m6,
      "Minor 6th",
      [8, 5],
      [Tag.Sixth, Tag.Minor]
    ),
  ],
  [
    IntervalId.M6,
    formatPreset(
      PresetType.Interval,
      IntervalId.M6,
      "Major 6th",
      [9, 5],
      [Tag.Sixth, Tag.Major]
    ),
  ],
  [
    IntervalId.A6,
    formatPreset(
      PresetType.Interval,
      IntervalId.A6,
      "Augmented 6th",
      [10, 5],
      [Tag.Sixth, Tag.Augmented]
    ),
  ],
  [
    IntervalId.d7,
    formatPreset(
      PresetType.Interval,
      IntervalId.d7,
      "Diminished 7th",
      [9, 6],
      [Tag.Seventh, Tag.Diminished]
    ),
  ],
  [
    IntervalId.m7,
    formatPreset(
      PresetType.Interval,
      IntervalId.m7,
      "Minor 7th",
      [10, 6],
      [Tag.Seventh, Tag.Minor]
    ),
  ],
  [
    IntervalId.M7,
    formatPreset(
      PresetType.Interval,
      IntervalId.M7,
      "Major 7th",
      [11, 6],
      [Tag.Seventh, Tag.Major]
    ),
  ],
  [
    IntervalId.P8,
    formatPreset(
      PresetType.Interval,
      IntervalId.P8,
      "Octave",
      [12, 7],
      [Tag.Perfect]
    ),
  ],
  [
    IntervalId.b9,
    formatPreset(
      PresetType.Interval,
      IntervalId.b9,
      "Flat Ninth",
      [13, 8],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.x9,
    formatPreset(
      PresetType.Interval,
      IntervalId.x9,
      "Ninth",
      [14, 8],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.s9,
    formatPreset(
      PresetType.Interval,
      IntervalId.s9,
      "Sharp Ninth",
      [15, 8],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.b11,
    formatPreset(
      PresetType.Interval,
      IntervalId.b11,
      "Flat Eleventh",
      [16, 10],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.x11,
    formatPreset(
      PresetType.Interval,
      IntervalId.x11,
      "Eleventh",
      [17, 10],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.s11,
    formatPreset(
      PresetType.Interval,
      IntervalId.s11,
      "Sharp Eleventh",
      [18, 10],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.b13,
    formatPreset(
      PresetType.Interval,
      IntervalId.b13,
      "Flat Thirteenth",
      [20, 12],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.x13,
    formatPreset(
      PresetType.Interval,
      IntervalId.x13,
      "Thirteenth",
      [21, 12],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.s13,
    formatPreset(
      PresetType.Interval,
      IntervalId.s13,
      "Sharp Thirteenth",
      [22, 12],
      [Tag.Extended]
    ),
  ],
]);

export const CHORD_PRESET_MAP = new Map<ChordId, IModelConfig>([
  // Triads
  [
    ChordId.MajTriad,
    formatPreset(
      PresetType.Chord,
      ChordId.MajTriad,
      "Major Triad",
      [IntervalId.P1, IntervalId.M3, IntervalId.P5],
      [Tag.Major, Tag.Triad]
    ),
  ],
  [
    ChordId.MinTriad,
    formatPreset(
      PresetType.Chord,
      ChordId.MinTriad,
      "Minor Triad",
      [IntervalId.P1, IntervalId.m3, IntervalId.P5],
      [Tag.Minor, Tag.Triad]
    ),
  ],
  [
    ChordId.AugTriad,
    formatPreset(
      PresetType.Chord,
      ChordId.AugTriad,
      "Augmented Triad",
      [IntervalId.P1, IntervalId.M3, IntervalId.A5],
      [Tag.Augmented, Tag.Triad]
    ),
  ],
  [
    ChordId.DimTriad,
    formatPreset(
      PresetType.Chord,
      ChordId.DimTriad,
      "Diminished Triad",
      [IntervalId.P1, IntervalId.m3, IntervalId.d5],
      [Tag.Diminished, Tag.Triad]
    ),
  ],
  // Sevenths
  [
    ChordId.Maj7,
    formatPreset(
      PresetType.Chord,
      ChordId.Maj7,
      "Major 7th",
      [IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M7],
      [Tag.Major, Tag.Seventh]
    ),
  ],
  [
    ChordId.Min7,
    formatPreset(
      PresetType.Chord,
      ChordId.Min7,
      "Minor 7th",
      [IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.m7],
      [Tag.Minor, Tag.Seventh]
    ),
  ],
  [
    ChordId.Dom7,
    formatPreset(
      PresetType.Chord,
      ChordId.Dom7,
      "Dominant 7th",
      [IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.m7],
      [Tag.Dominant, Tag.Seventh]
    ),
  ],
  [
    ChordId.MinMaj7,
    formatPreset(
      PresetType.Chord,
      ChordId.MinMaj7,
      "Minor-Major 7th",
      [IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M7],
      [Tag.Minor, Tag.Seventh]
    ),
  ],
  [
    ChordId.Dim7,
    formatPreset(
      PresetType.Chord,
      ChordId.Dim7,
      "Diminished 7th",
      [IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.d7],
      [Tag.Diminished, Tag.Seventh]
    ),
  ],
  [
    ChordId.HalfDim7,
    formatPreset(
      PresetType.Chord,
      ChordId.HalfDim7,
      "Half-Diminished 7th",
      [IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.m7],
      [Tag.Diminished, Tag.Seventh],
      ["Minor 7th Flat 5"]
    ),
  ],
  [
    ChordId.Aug7,
    formatPreset(
      PresetType.Chord,
      ChordId.Aug7,
      "Augmented 7th",
      [IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.m7],
      [Tag.Augmented, Tag.Seventh]
    ),
  ],
  [
    ChordId.AugMaj7,
    formatPreset(
      PresetType.Chord,
      ChordId.AugMaj7,
      "Augmented Major 7th",
      [IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.M7],
      [Tag.Augmented, Tag.Seventh]
    ),
  ],
  // Sixths
  [
    ChordId.Maj6,
    formatPreset(
      PresetType.Chord,
      ChordId.Maj6,
      "Major 6th",
      [IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M6],
      [Tag.Major, Tag.Sixth]
    ),
  ],
  [
    ChordId.Min6,
    formatPreset(
      PresetType.Chord,
      ChordId.Min6,
      "Minor 6th",
      [IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M6],
      [Tag.Minor, Tag.Sixth]
    ),
  ],
  // Suspended
  [
    ChordId.Sus2,
    formatPreset(
      PresetType.Chord,
      ChordId.Sus2,
      "Suspended 2nd",
      [IntervalId.P1, IntervalId.M2, IntervalId.P5],
      [Tag.Suspended]
    ),
  ],
  [
    ChordId.Sus4,
    formatPreset(
      PresetType.Chord,
      ChordId.Sus4,
      "Suspended 4th",
      [IntervalId.P1, IntervalId.P4, IntervalId.P5],
      [Tag.Suspended]
    ),
  ],
]);

interface IExtendedChordConfig {
  chordId: ChordId;
  name: string;
  baseChordId: ChordId;
  extensions: IntervalId[];
}

const addExtendedChordPreset = (config: IExtendedChordConfig) => {
  const { chordId, name, baseChordId, extensions } = config;
  const basePreset = CHORD_PRESET_MAP.get(baseChordId) as IModelConfig;

  let baseIds = basePreset.valueIds as IntervalId[];

  const extensionPreset = formatPreset(
    PresetType.Chord,
    chordId,
    name,
    [...baseIds, ...extensions],
    [...basePreset.tags, Tag.Extended],
    basePreset.aliases
  );

  return CHORD_PRESET_MAP.set(chordId, extensionPreset);
};

const EXTENDED_CHORDS: IExtendedChordConfig[] = [
  {
    name: "Dominant b9",
    chordId: ChordId.DomFlat9,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.b9],
  },
  {
    name: "Dominant 9",
    chordId: ChordId.Dom9,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.x9],
  },
  {
    name: "Dominant #9",
    chordId: ChordId.DomSharp9,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.s9],
  },
  {
    name: "Dominant 11",
    chordId: ChordId.Dom11,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.x11],
  },
  {
    name: "Dominant #11",
    chordId: ChordId.DomSharp11,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.s11],
  },
  {
    name: "Dominant b13",
    chordId: ChordId.DomFlat13,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.b13],
  },
  {
    name: "Dominant 13",
    chordId: ChordId.Dom13,
    baseChordId: ChordId.Dom7,
    extensions: [IntervalId.x13],
  },
  /*{
        name: 'Dominant b5', chordId: ChordId.DomFlat5, baseChordId: ChordId.Dom7, extensions: [
            IntervalId.d9
        ]
    },
    {
        name: 'Dominant #5', chordId: ChordId.DomSharp5, baseChordId: ChordId.Dom7, extensions: [
            IntervalId.A5
        ]
    },*/
  {
    name: "Minor b9",
    chordId: ChordId.MinFlat9,
    baseChordId: ChordId.Min7,
    extensions: [IntervalId.b9],
  },
  {
    name: "Minor 9",
    chordId: ChordId.Min9,
    baseChordId: ChordId.Min7,
    extensions: [IntervalId.x9],
  },
  {
    name: "Minor 11",
    chordId: ChordId.Min11,
    baseChordId: ChordId.Min7,
    extensions: [IntervalId.x11],
  },
  {
    name: "Minor 13",
    chordId: ChordId.Min13,
    baseChordId: ChordId.Min7,
    extensions: [IntervalId.x13],
  },
  {
    name: "Major 9",
    chordId: ChordId.Maj9,
    baseChordId: ChordId.Maj7,
    extensions: [IntervalId.x9],
  },
  {
    name: "Major 11",
    chordId: ChordId.Maj11,
    baseChordId: ChordId.Maj7,
    extensions: [IntervalId.x11],
  },
  {
    name: "Major #11",
    chordId: ChordId.MajSharp11,
    baseChordId: ChordId.Maj7,
    extensions: [IntervalId.s11],
  },
  {
    name: "Major 13",
    chordId: ChordId.Maj13,
    baseChordId: ChordId.Maj7,
    extensions: [IntervalId.x13],
  },
  /*{
        name: 'Major #5', chordId: ChordId.MajSharp5, baseChordId: ChordId.Maj7, extensions: [
            IntervalId.x9
        ]
    }*/
];

EXTENDED_CHORDS.forEach((chord) => addExtendedChordPreset(chord));

export const SCALE_PRESET_MAP = new Map<ScaleId, IModelConfig>([
  // Diatonic
  [
    ScaleId.Ionian,
    formatPreset(
      PresetType.Scale,
      ScaleId.Ionian,
      "Ionian",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Major],
      ["Major", "Diatonic"]
    ),
  ],
  [
    ScaleId.Dorian,
    formatPreset(
      PresetType.Scale,
      ScaleId.Dorian,
      "Dorian",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Minor]
    ),
  ],
  [
    ScaleId.Phrygian,
    formatPreset(
      PresetType.Scale,
      ScaleId.Phrygian,
      "Phrygian",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Minor]
    ),
  ],
  [
    ScaleId.Lydian,
    formatPreset(
      PresetType.Scale,
      ScaleId.Lydian,
      "Lydian",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.A4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Major]
    ),
  ],
  [
    ScaleId.Mixolydian,
    formatPreset(
      PresetType.Scale,
      ScaleId.Mixolydian,
      "Mixolydian",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Major, Tag.Dominant]
    ),
  ],
  [
    ScaleId.Aeolian,
    formatPreset(
      PresetType.Scale,
      ScaleId.Aeolian,
      "Aeolian",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Minor],
      ["Minor", "Natural Minor"]
    ),
  ],
  [
    ScaleId.Locrian,
    formatPreset(
      PresetType.Scale,
      ScaleId.Locrian,
      "Locrian",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.d5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Diatonic, Tag.Minor]
    ),
  ],
  // Harmonic Minor
  [
    ScaleId.HarmonicMinor,
    formatPreset(
      PresetType.Scale,
      ScaleId.HarmonicMinor,
      "Harmonic Minor",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Minor, Tag.HarmonicMode]
    ),
  ],
  [
    ScaleId.Locrian6,
    formatPreset(
      PresetType.Scale,
      ScaleId.Locrian6,
      "Locrian 6",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.d5,
        IntervalId.M6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    ),
  ],
  [
    ScaleId.IonianSharp5,
    formatPreset(
      PresetType.Scale,
      ScaleId.IonianSharp5,
      "Ionian #5",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.A5,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    ),
  ],
  [
    ScaleId.DorianSharp4,
    formatPreset(
      PresetType.Scale,
      ScaleId.DorianSharp4,
      "Dorian #4",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.A4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    ),
  ],
  [
    ScaleId.PhrygianDominant,
    formatPreset(
      PresetType.Scale,
      ScaleId.PhrygianDominant,
      "Phrygian Dominant",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.Dominant, Tag.HarmonicMode]
    ),
  ],
  [
    ScaleId.LydianSharp2,
    formatPreset(
      PresetType.Scale,
      ScaleId.LydianSharp2,
      "Lydian #2",
      [
        IntervalId.P1,
        IntervalId.A2,
        IntervalId.M3,
        IntervalId.A4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    ),
  ],
  [
    ScaleId.SuperLocrianDoubleFlat7,
    formatPreset(
      PresetType.Scale,
      ScaleId.SuperLocrianDoubleFlat7,
      "Super Locrian bb7",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.m3,
        IntervalId.d4,
        IntervalId.d5,
        IntervalId.m6,
        IntervalId.d7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    ),
  ],
  // Melodic Minor
  [
    ScaleId.MelodicMinor,
    formatPreset(
      PresetType.Scale,
      ScaleId.MelodicMinor,
      "Melodic Minor",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Minor, Tag.MelodicMode]
    ),
  ],
  [
    ScaleId.DorianFlat2,
    formatPreset(
      PresetType.Scale,
      ScaleId.DorianFlat2,
      "Dorian b2",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode]
    ),
  ],
  [
    ScaleId.LydianSharp5,
    formatPreset(
      PresetType.Scale,
      ScaleId.LydianSharp5,
      "Lydian #5",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.A4,
        IntervalId.A5,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode]
    ),
  ],
  [
    ScaleId.LydianDominiant,
    formatPreset(
      PresetType.Scale,
      ScaleId.LydianDominiant,
      "Lydian Dominant",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.A4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.Dominant, Tag.MelodicMode]
    ),
  ],
  [
    ScaleId.MixolydianFlatSix,
    formatPreset(
      PresetType.Scale,
      ScaleId.MixolydianFlatSix,
      "Mixolydian b6",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode]
    ),
  ],
  [
    ScaleId.AeolianFlat5,
    formatPreset(
      PresetType.Scale,
      ScaleId.AeolianFlat5,
      "Aeolian b5",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.d5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode]
    ),
  ],
  [
    ScaleId.SuperLocrian,
    formatPreset(
      PresetType.Scale,
      ScaleId.SuperLocrian,
      "Super Locrian",
      [
        IntervalId.P1,
        IntervalId.m2,
        IntervalId.m3,
        IntervalId.d4,
        IntervalId.d5,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode],
      ["Altered"]
    ),
  ],
  // Pentatonic
  [
    ScaleId.MajorPentatonic,
    formatPreset(
      PresetType.Scale,
      ScaleId.MajorPentatonic,
      "Major Pentatonic",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P5,
        IntervalId.M6,
      ],
      [Tag.Pentatonic, Tag.Major]
    ),
  ],
  [
    ScaleId.Egyptian,
    formatPreset(
      PresetType.Scale,
      ScaleId.Egyptian,
      "Egyptian",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m7,
      ],
      [Tag.Pentatonic, Tag.Exotic]
    ),
  ],
  [
    ScaleId.ManGong,
    formatPreset(
      PresetType.Scale,
      ScaleId.ManGong,
      "Man Gong",
      [
        IntervalId.P1,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.m6,
        IntervalId.m7,
      ],
      [Tag.Pentatonic, Tag.Exotic]
    ),
  ],
  [
    ScaleId.Ritusen,
    formatPreset(
      PresetType.Scale,
      ScaleId.Ritusen,
      "Ritusen",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
      ],
      [Tag.Pentatonic, Tag.Exotic]
    ),
  ],
  [
    ScaleId.MinorPentatonic,
    formatPreset(
      PresetType.Scale,
      ScaleId.MinorPentatonic,
      "Minor Pentatonic",
      [
        IntervalId.P1,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m7,
      ],
      [Tag.Pentatonic, Tag.Minor]
    ),
  ],
  // Blues
  [
    ScaleId.MajorBlues,
    formatPreset(
      PresetType.Scale,
      ScaleId.MajorBlues,
      "Major Blues",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.m3,
        IntervalId.M3,
        IntervalId.P5,
        IntervalId.M6,
      ],
      [Tag.Hexatonic, Tag.Blues, Tag.Major]
    ),
  ],
  [
    ScaleId.MinorBlues,
    formatPreset(
      PresetType.Scale,
      ScaleId.MinorBlues,
      "Minor Blues",
      [
        IntervalId.P1,
        IntervalId.m3,
        IntervalId.P4,
        IntervalId.d5,
        IntervalId.P5,
        IntervalId.m7,
      ],
      [Tag.Hexatonic, Tag.Blues, Tag.Minor]
    ),
  ],
  // Bebop
  [
    ScaleId.DominantBebop,
    formatPreset(
      PresetType.Scale,
      ScaleId.DominantBebop,
      "Dominant Bebob",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.M6,
        IntervalId.m7,
        IntervalId.M7,
      ],
      [Tag.Octatonic, Tag.Bebop, Tag.Major, Tag.Dominant]
    ),
  ],
  [
    ScaleId.MajorBebop,
    formatPreset(
      PresetType.Scale,
      ScaleId.MajorBebop,
      "Major Bebob",
      [
        IntervalId.P1,
        IntervalId.M2,
        IntervalId.M3,
        IntervalId.P4,
        IntervalId.P5,
        IntervalId.m6,
        IntervalId.M6,
        IntervalId.M7,
      ],
      [Tag.Octatonic, Tag.Bebop, Tag.Major]
    ),
  ],
]);

// Merged maps

// export const POD_PRESET_MAP = new Map<PresetId, IModelConfig>([
//   ...NOTE_PRESET_MAP,
//   ...INTERVAL_PRESET_MAP,
// ]);

export const POD_LIST_PRESET_MAP = new Map<PresetId, IModelConfig>([
  ...CHORD_PRESET_MAP,
  ...SCALE_PRESET_MAP,
]);

// Definition arrays

export const NOTE_PRESETS = ArrayUtils.mapToArray(NOTE_PRESET_MAP);
export const INTERVAL_PRESETS = ArrayUtils.mapToArray(INTERVAL_PRESET_MAP);
//export const POD_PRESETS = [...NOTE_PRESETS, ...INTERVAL_PRESETS]

export const SCALE_PRESETS = ArrayUtils.mapToArray(SCALE_PRESET_MAP);
export const CHORD_PRESETS = ArrayUtils.mapToArray(CHORD_PRESET_MAP);
export const POD_LIST_PRESETS = [...SCALE_PRESETS, ...CHORD_PRESETS];

// Definition groupings

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

// console.log('pw-presets', NOTE_PRESETS, INTERVAL_PRESETS, CHORD_PRESETS, SCALE_PRESETS);

export const logPresetJson = () => {
  console.log("pw-presets notes", JSON.stringify(NOTE_PRESETS));
  console.log("pw-presets intervals", JSON.stringify(INTERVAL_PRESETS));
  console.log("pw-presets chords", JSON.stringify(CHORD_PRESETS));
  console.log("pw-presets scales", JSON.stringify(SCALE_PRESETS));
};
