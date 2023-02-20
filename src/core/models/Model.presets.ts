import ArrayUtils from "../general/Array.utils";
import {
  ChordId,
  IModelConfig,
  IntervalId,
  IPod,
  ModelId,
  ModelType,
  NoteId,
  ScaleId,
  Tag,
} from "./Model.constants";
import { getExtensionInversionId } from "./Pod.static";

// Helpers

const formatPreset = (
  modelType: ModelType,
  modelId: ModelId,
  name: string,
  value: any,
  tags = [] as Tag[],
  aliases = [] as string[],
  isList = false
): IModelConfig => {
  return {
    modelType,
    modelId,
    name,
    // @ts-ignore
    valueIds: value,
    value: Object.freeze(
      isList
        ? value.map((id) => {
            const isExtended =
              id.includes("9") || id.includes("11") || id.includes("13");
            let term = id;
            if (isExtended) {
              term = getExtensionInversionId(id);
            }
            // @ts-ignore
            return INTERVAL_PRESET_MAP.get(term).value;
          })
        : value
    ),
    aliases,
    tags,
  };
};

const formatPodPreset = (
  modelType: ModelType.Note | ModelType.Interval,
  modelId: ModelId,
  name: string,
  value: IPod,
  tags = [] as Tag[],
  aliases = [] as string[]
): IModelConfig => formatPreset(modelType, modelId, name, value, tags, aliases);

const formatPodListPreset = (
  modelType: ModelType.Chord | ModelType.Scale,
  modelId: ModelId,
  name: string,
  value: IntervalId[],
  tags = [] as Tag[],
  aliases = [] as string[]
): IModelConfig =>
  formatPreset(modelType, modelId, name, value, tags, aliases, true);

// Definition maps

export const NOTE_PRESET_MAP = new Map<NoteId, IModelConfig>([
  [NoteId.C, formatPodPreset(ModelType.Note, NoteId.C, "C", [0, 0])],
  [NoteId.Cs, formatPodPreset(ModelType.Note, NoteId.Cs, "C#", [1, 0])],
  [NoteId.Db, formatPodPreset(ModelType.Note, NoteId.Db, "Db", [1, 1])],
  [NoteId.D, formatPodPreset(ModelType.Note, NoteId.D, "D", [2, 1])],
  [NoteId.Ds, formatPodPreset(ModelType.Note, NoteId.Ds, "D#", [3, 1])],
  [NoteId.Eb, formatPodPreset(ModelType.Note, NoteId.Eb, "Eb", [3, 2])],
  [NoteId.E, formatPodPreset(ModelType.Note, NoteId.E, "E", [4, 2])],
  [NoteId.Es, formatPodPreset(ModelType.Note, NoteId.Es, "E#", [5, 2])],
  [NoteId.Fb, formatPodPreset(ModelType.Note, NoteId.Fb, "Fb", [4, 3])],
  [NoteId.F, formatPodPreset(ModelType.Note, NoteId.F, "F", [5, 3])],
  [NoteId.Fs, formatPodPreset(ModelType.Note, NoteId.Fs, "F#", [6, 3])],
  [NoteId.Gb, formatPodPreset(ModelType.Note, NoteId.Gb, "Gb", [6, 4])],
  [NoteId.G, formatPodPreset(ModelType.Note, NoteId.G, "G", [7, 4])],
  [NoteId.Gs, formatPodPreset(ModelType.Note, NoteId.Gs, "G#", [8, 4])],
  [NoteId.Ab, formatPodPreset(ModelType.Note, NoteId.Ab, "Ab", [8, 5])],
  [NoteId.A, formatPodPreset(ModelType.Note, NoteId.A, "A", [9, 5])],
  [NoteId.As, formatPodPreset(ModelType.Note, NoteId.As, "A#", [10, 5])],
  [NoteId.Bb, formatPodPreset(ModelType.Note, NoteId.Bb, "Bb", [10, 6])],
  [NoteId.B, formatPodPreset(ModelType.Note, NoteId.B, "B", [11, 6])],
  [NoteId.Bs, formatPodPreset(ModelType.Note, NoteId.Bs, "B#", [0, 6])],
  [NoteId.Cb, formatPodPreset(ModelType.Note, NoteId.Cb, "Cb", [11, 0])],
]);

export const INTERVAL_PRESET_MAP = new Map<IntervalId, IModelConfig>([
  [
    IntervalId.P1,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.P1,
      "Perfect Unison",
      [0, 0],
      [Tag.Perfect]
    ),
  ],
  [
    IntervalId.m2,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.m2,
      "Minor 2nd",
      [1, 1],
      [Tag.Second, Tag.Minor]
    ),
  ],
  [
    IntervalId.M2,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.M2,
      "Major 2nd",
      [2, 1],
      [Tag.Second, Tag.Major]
    ),
  ],
  [
    IntervalId.A2,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.A2,
      "Augmented 2nd",
      [3, 1],
      [Tag.Second, Tag.Augmented]
    ),
  ],
  [
    IntervalId.d3,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.d3,
      "Diminished 3rd",
      [2, 2],
      [Tag.Third, Tag.Diminished]
    ),
  ],
  [
    IntervalId.m3,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.m3,
      "Minor 3rd",
      [3, 2],
      [Tag.Third, Tag.Minor]
    ),
  ],
  [
    IntervalId.M3,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.M3,
      "Major 3rd",
      [4, 2],
      [Tag.Third, Tag.Major]
    ),
  ],
  [
    IntervalId.A3,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.A3,
      "Augmented 3rd",
      [5, 2],
      [Tag.Third, Tag.Augmented]
    ),
  ],
  [
    IntervalId.d4,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.d4,
      "Diminished 4th",
      [4, 3],
      [Tag.Fourth, Tag.Diminished]
    ),
  ],
  [
    IntervalId.P4,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.P4,
      "Perfect 4th",
      [5, 3],
      [Tag.Fourth, Tag.Perfect]
    ),
  ],
  [
    IntervalId.A4,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.A4,
      "Augmented 4th",
      [6, 3],
      [Tag.Fourth, Tag.Augmented]
    ),
  ],
  [
    IntervalId.d5,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.d5,
      "Diminished 5th",
      [6, 4],
      [Tag.Fifth, Tag.Diminished]
    ),
  ],
  [
    IntervalId.P5,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.P5,
      "Perfect 5th",
      [7, 4],
      [Tag.Fifth, Tag.Perfect]
    ),
  ],
  [
    IntervalId.A5,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.A5,
      "Augmented 5th",
      [8, 4],
      [Tag.Fifth, Tag.Augmented]
    ),
  ],
  [
    IntervalId.d6,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.d6,
      "Diminished 6th",
      [7, 5],
      [Tag.Sixth, Tag.Diminished]
    ),
  ],
  [
    IntervalId.m6,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.m6,
      "Minor 6th",
      [8, 5],
      [Tag.Sixth, Tag.Minor]
    ),
  ],
  [
    IntervalId.M6,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.M6,
      "Major 6th",
      [9, 5],
      [Tag.Sixth, Tag.Major]
    ),
  ],
  [
    IntervalId.A6,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.A6,
      "Augmented 6th",
      [10, 5],
      [Tag.Sixth, Tag.Augmented]
    ),
  ],
  [
    IntervalId.d7,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.d7,
      "Diminished 7th",
      [9, 6],
      [Tag.Seventh, Tag.Diminished]
    ),
  ],
  [
    IntervalId.m7,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.m7,
      "Minor 7th",
      [10, 6],
      [Tag.Seventh, Tag.Minor]
    ),
  ],
  [
    IntervalId.M7,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.M7,
      "Major 7th",
      [11, 6],
      [Tag.Seventh, Tag.Major]
    ),
  ],
  [
    IntervalId.P8,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.P8,
      "Octave",
      [12, 7],
      [Tag.Perfect]
    ),
  ],
  [
    IntervalId.b9,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.b9,
      "Flat Ninth",
      [13, 8],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.x9,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.x9,
      "Ninth",
      [14, 8],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.s9,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.s9,
      "Sharp Ninth",
      [15, 8],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.b11,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.b11,
      "Flat Eleventh",
      [16, 10],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.x11,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.x11,
      "Eleventh",
      [17, 10],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.s11,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.s11,
      "Sharp Eleventh",
      [18, 10],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.b13,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.b13,
      "Flat Thirteenth",
      [20, 12],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.x13,
    formatPodPreset(
      ModelType.Interval,
      IntervalId.x13,
      "Thirteenth",
      [21, 12],
      [Tag.Extended]
    ),
  ],
  [
    IntervalId.s13,
    formatPodPreset(
      ModelType.Interval,
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
    formatPodListPreset(
      ModelType.Chord,
      ChordId.MajTriad,
      "Major Triad",
      [IntervalId.P1, IntervalId.M3, IntervalId.P5],
      [Tag.Major, Tag.Triad]
    ),
  ],
  [
    ChordId.MinTriad,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.MinTriad,
      "Minor Triad",
      [IntervalId.P1, IntervalId.m3, IntervalId.P5],
      [Tag.Minor, Tag.Triad]
    ),
  ],
  [
    ChordId.AugTriad,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.AugTriad,
      "Augmented Triad",
      [IntervalId.P1, IntervalId.M3, IntervalId.A5],
      [Tag.Augmented, Tag.Triad]
    ),
  ],
  [
    ChordId.DimTriad,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.DimTriad,
      "Diminished Triad",
      [IntervalId.P1, IntervalId.m3, IntervalId.d5],
      [Tag.Diminished, Tag.Triad]
    ),
  ],
  // Sevenths
  [
    ChordId.Maj7,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.Maj7,
      "Major 7th",
      [IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M7],
      [Tag.Major, Tag.Seventh]
    ),
  ],
  [
    ChordId.Min7,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.Min7,
      "Minor 7th",
      [IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.m7],
      [Tag.Minor, Tag.Seventh]
    ),
  ],
  [
    ChordId.Dom7,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.Dom7,
      "Dominant 7th",
      [IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.m7],
      [Tag.Dominant, Tag.Seventh]
    ),
  ],
  [
    ChordId.MinMaj7,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.MinMaj7,
      "Minor-Major 7th",
      [IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M7],
      [Tag.Minor, Tag.Seventh]
    ),
  ],
  [
    ChordId.Dim7,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.Dim7,
      "Diminished 7th",
      [IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.d7],
      [Tag.Diminished, Tag.Seventh]
    ),
  ],
  [
    ChordId.HalfDim7,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.HalfDim7,
      "Half-Diminished 7th",
      [IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.m7],
      [Tag.Diminished, Tag.Seventh],
      ["Minor 7th Flat 5"]
    ),
  ],
  [
    ChordId.Aug7,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.Aug7,
      "Augmented 7th",
      [IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.m7],
      [Tag.Augmented, Tag.Seventh]
    ),
  ],
  [
    ChordId.AugMaj7,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.AugMaj7,
      "Augmented Major 7th",
      [IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.M7],
      [Tag.Augmented, Tag.Seventh]
    ),
  ],
  // Sixths
  [
    ChordId.Maj6,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.Maj6,
      "Major 6th",
      [IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M6],
      [Tag.Major, Tag.Sixth]
    ),
  ],
  [
    ChordId.Min6,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.Min6,
      "Minor 6th",
      [IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M6],
      [Tag.Minor, Tag.Sixth]
    ),
  ],
  // Suspended
  [
    ChordId.Sus2,
    formatPodListPreset(
      ModelType.Chord,
      ChordId.Sus2,
      "Suspended 2nd",
      [IntervalId.P1, IntervalId.M2, IntervalId.P5],
      [Tag.Suspended]
    ),
  ],
  [
    ChordId.Sus4,
    formatPodListPreset(
      ModelType.Chord,
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

  // @ts-ignore
  let baseIds = basePreset.valueIds;

  const extensionPreset = formatPodListPreset(
    ModelType.Chord,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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
    formatPodListPreset(
      ModelType.Scale,
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

// Definition arrays

export const NOTE_PRESETS = ArrayUtils.mapToArray(NOTE_PRESET_MAP);
export const SCALE_PRESETS = ArrayUtils.mapToArray(SCALE_PRESET_MAP);
export const CHORD_PRESETS = ArrayUtils.mapToArray(CHORD_PRESET_MAP);
export const INTERVAL_PRESETS = ArrayUtils.mapToArray(INTERVAL_PRESET_MAP);
export const ALL_PRESETS = [...CHORD_PRESETS, ...SCALE_PRESETS];

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
