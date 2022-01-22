import ArrayUtils from "../general/Array.utils";
import { ChordId, IModelConfig, IntervalId, IPod, ModelId, NoteId, PresetId, ScaleId, Tag } from "./Model.constants";

// Helpers

const formatPreset = (modelId: ModelId, id: PresetId, name: string, value: any, tags = [], aliases = [], isList = false): IModelConfig => {
    return {
        modelId,
        id,
        name,
        value: Object.freeze(isList ? value.map(id => INTERVAL_PRESET_MAP.get(id).value) as any : value),
        aliases,
        tags
    }
};

const formatNotePreset = (id: PresetId, name: string, value: IPod, tags = [], aliases = []): IModelConfig =>
    formatPreset(ModelId.Note, id, name, value, tags, aliases);


const formatIntervalPreset = (id: PresetId, name: string, value: IPod, tags = [], aliases = []): IModelConfig =>
    formatPreset(ModelId.Interval, id, name, value, tags, aliases);


const formatChordPreset = (id: PresetId, name: string, value: IntervalId[], tags = [], aliases = []): IModelConfig =>
    formatPreset(ModelId.Chord, id, name, value, tags, aliases, true);


const formatScalePreset = (id: PresetId, name: string, value: IntervalId[], tags = [], aliases = []): IModelConfig =>
    formatPreset(ModelId.Scale, id, name, value, tags, aliases, true);


const podToPodList = (podPresets: IModelConfig[]): IModelConfig[] =>
    podPresets.map(preset => ({ ...preset, value: [preset.value] as any }));

// Definition maps

export const NOTE_PRESET_MAP = new Map<NoteId, IModelConfig>([
    [NoteId.C, formatNotePreset(NoteId.C, 'C', [0, 0])],
    [NoteId.Cs, formatNotePreset(NoteId.Cs, 'C#', [1, 0])],
    [NoteId.Db, formatNotePreset(NoteId.Db, 'Db', [1, 1])],
    [NoteId.D, formatNotePreset(NoteId.D, 'D', [2, 1])],
    [NoteId.Ds, formatNotePreset(NoteId.Ds, 'D#', [3, 1])],
    [NoteId.Eb, formatNotePreset(NoteId.Eb, 'Eb', [3, 2])],
    [NoteId.E, formatNotePreset(NoteId.E, 'E', [4, 2])],
    [NoteId.Es, formatNotePreset(NoteId.Es, 'E#', [5, 2])],
    [NoteId.Fb, formatNotePreset(NoteId.Fb, 'Fb', [4, 3])],
    [NoteId.F, formatNotePreset(NoteId.F, 'F', [5, 3])],
    [NoteId.Fs, formatNotePreset(NoteId.Fs, 'F#', [6, 3])],
    [NoteId.Gb, formatNotePreset(NoteId.Gb, 'Gb', [6, 4])],
    [NoteId.G, formatNotePreset(NoteId.G, 'G', [7, 4])],
    [NoteId.Gs, formatNotePreset(NoteId.Gs, 'G#', [8, 4])],
    [NoteId.Ab, formatNotePreset(NoteId.Ab, 'Ab', [8, 5])],
    [NoteId.A, formatNotePreset(NoteId.A, 'A', [9, 5])],
    [NoteId.As, formatNotePreset(NoteId.As, 'A#', [10, 5])],
    [NoteId.Bb, formatNotePreset(NoteId.Bb, 'Bb', [10, 6])],
    [NoteId.B, formatNotePreset(NoteId.B, 'B', [11, 6])],
    [NoteId.Bs, formatNotePreset(NoteId.Bs, 'B#', [0, 6])],
    [NoteId.Cb, formatNotePreset(NoteId.Cb, 'Cb', [11, 0])]
]);

export const INTERVAL_PRESET_MAP = new Map<IntervalId, IModelConfig>([
    [IntervalId.P1, formatIntervalPreset(
        IntervalId.P1,
        'Perfect Unison',
        [0, 0],
        [Tag.Perfect]
    )],
    [IntervalId.m2, formatIntervalPreset(
        IntervalId.m2,
        'Minor 2nd',
        [1, 1],
        [Tag.Second, Tag.Minor]
    )],
    [IntervalId.M2, formatIntervalPreset(
        IntervalId.M2,
        'Major 2nd',
        [2, 1],
        [Tag.Second, Tag.Major]
    )],
    [IntervalId.A2, formatIntervalPreset(
        IntervalId.A2,
        'Augmented 2nd',
        [3, 1],
        [Tag.Second, Tag.Augmented]
    )],
    [IntervalId.d3, formatIntervalPreset(
        IntervalId.d3,
        'Diminished 3rd',
        [2, 2],
        [Tag.Third, Tag.Diminished]
    )],
    [IntervalId.m3, formatIntervalPreset(
        IntervalId.m3,
        'Minor 3rd',
        [3, 2],
        [Tag.Third, Tag.Minor]
    )],
    [IntervalId.M3, formatIntervalPreset(
        IntervalId.M3,
        'Major 3rd',
        [4, 2],
        [Tag.Third, Tag.Major]
    )],
    [IntervalId.A3, formatIntervalPreset(
        IntervalId.A3,
        'Augmented 3rd',
        [5, 2],
        [Tag.Third, Tag.Augmented]
    )],
    [IntervalId.d4, formatIntervalPreset(
        IntervalId.d4,
        'Diminished 4th',
        [4, 3],
        [Tag.Fourth, Tag.Diminished]
    )],
    [IntervalId.P4, formatIntervalPreset(
        IntervalId.P4,
        'Perfect 4th',
        [5, 3],
        [Tag.Fourth, Tag.Perfect]
    )],
    [IntervalId.A4, formatIntervalPreset(
        IntervalId.A4,
        'Augmented 4th',
        [6, 3],
        [Tag.Fourth, Tag.Augmented]
    )],
    [IntervalId.d5, formatIntervalPreset(
        IntervalId.d5,
        'Diminished 5th',
        [6, 4],
        [Tag.Fifth, Tag.Diminished]
    )],
    [IntervalId.P5, formatIntervalPreset(
        IntervalId.P5,
        'Perfect 5th',
        [7, 4],
        [Tag.Fifth, Tag.Perfect]
    )],
    [IntervalId.A5, formatIntervalPreset(
        IntervalId.A5,
        'Augmented 5th',
        [8, 4],
        [Tag.Fifth, Tag.Augmented]
    )],
    [IntervalId.d6, formatIntervalPreset(
        IntervalId.d6,
        'Diminished 6th',
        [7, 5],
        [Tag.Sixth, Tag.Diminished]
    )],
    [IntervalId.m6, formatIntervalPreset(
        IntervalId.m6,
        'Minor 6th',
        [8, 5],
        [Tag.Sixth, Tag.Minor]
    )],
    [IntervalId.M6, formatIntervalPreset(
        IntervalId.M6,
        'Major 6th',
        [9, 5],
        [Tag.Sixth, Tag.Major]
    )],
    [IntervalId.A6, formatIntervalPreset(
        IntervalId.A6,
        'Augmented 6th',
        [10, 5],
        [Tag.Sixth, Tag.Augmented]
    )],
    [IntervalId.d7, formatIntervalPreset(
        IntervalId.d7,
        'Diminished 7th',
        [9, 6],
        [Tag.Seventh, Tag.Diminished]
    )],
    [IntervalId.m7, formatIntervalPreset(
        IntervalId.m7,
        'Minor 7th',
        [10, 6],
        [Tag.Seventh, Tag.Minor]
    )],
    [IntervalId.M7, formatIntervalPreset(
        IntervalId.M7,
        'Major 7th',
        [11, 6],
        [Tag.Seventh, Tag.Major]
    )],
    [IntervalId.P8, formatIntervalPreset(
        IntervalId.P8,
        'Octave',
        [12, 7],
        [Tag.Perfect]
    )],
    [IntervalId.b9, formatIntervalPreset(
        IntervalId.b9,
        'Flat Ninth',
        [13, 8],
        [Tag.Extended]
    )],
    [IntervalId.x9, formatIntervalPreset(
        IntervalId.x9,
        'Ninth',
        [14, 8],
        [Tag.Extended]
    )],
    [IntervalId.s9, formatIntervalPreset(
        IntervalId.s9,
        'Sharp Ninth',
        [15, 8],
        [Tag.Extended]
    )],
    [IntervalId.b11, formatIntervalPreset(
        IntervalId.b11,
        'Flat Eleventh',
        [16, 10],
        [Tag.Extended]
    )],
    [IntervalId.x11, formatIntervalPreset(
        IntervalId.x11,
        'Eleventh',
        [17, 10],
        [Tag.Extended]
    )],
    [IntervalId.s11, formatIntervalPreset(
        IntervalId.s11,
        'Sharp Eleventh',
        [18, 10],
        [Tag.Extended]
    )],
    [IntervalId.b13, formatIntervalPreset(
        IntervalId.b13,
        'Flat Thirteenth',
        [20, 12],
        [Tag.Extended]
    )],
    [IntervalId.x13, formatIntervalPreset(
        IntervalId.x13,
        'Thirteenth',
        [21, 12],
        [Tag.Extended]
    )],
    [IntervalId.s13, formatIntervalPreset(
        IntervalId.s13,
        'Sharp Thirteenth',
        [22, 12],
        [Tag.Extended]
    )]
]);

export const CHORD_PRESET_MAP = new Map<ChordId, IModelConfig>([
    // Triads
    [ChordId.MajTriad, formatChordPreset(
        ChordId.MajTriad,
        'Major Triad',
        [IntervalId.P1, IntervalId.M3, IntervalId.P5],
        [Tag.Major, Tag.Triad]
    )],
    [ChordId.MinTriad, formatChordPreset(
        ChordId.MinTriad,
        'Minor Triad',
        [IntervalId.P1, IntervalId.m3, IntervalId.P5],
        [Tag.Minor, Tag.Triad]
    )],
    [ChordId.AugTriad, formatChordPreset(
        ChordId.AugTriad,
        'Augmented Triad',
        [IntervalId.P1, IntervalId.M3, IntervalId.A5],
        [Tag.Augmented, Tag.Triad]
    )],
    [ChordId.DimTriad, formatChordPreset(
        ChordId.DimTriad,
        'Diminished Triad',
        [IntervalId.P1, IntervalId.m3, IntervalId.d5],
        [Tag.Diminished, Tag.Triad]
    )],
    // Sevenths
    [ChordId.Maj7, formatChordPreset(
        ChordId.Maj7,
        'Major 7th',
        [IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M7],
        [Tag.Major, Tag.Seventh]
    )],
    [ChordId.Min7, formatChordPreset(
        ChordId.Min7,
        'Minor 7th',
        [IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.m7],
        [Tag.Minor, Tag.Seventh]
    )],
    [ChordId.Dom7, formatChordPreset(
        ChordId.Dom7,
        'Dominant 7th',
        [IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.m7],
        [Tag.Dominant, Tag.Seventh]
    )],
    [ChordId.MinMaj7, formatChordPreset(
        ChordId.MinMaj7,
        'Minor-Major 7th',
        [IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M7],
        [Tag.Minor, Tag.Seventh]
    )],
    [ChordId.Dim7, formatChordPreset(
        ChordId.Dim7,
        'Diminished 7th',
        [IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.d7],
        [Tag.Diminished, Tag.Seventh]
    )],
    [ChordId.HalfDim7, formatChordPreset(
        ChordId.HalfDim7,
        'Half-Diminished 7th',
        [IntervalId.P1, IntervalId.m3, IntervalId.d5, IntervalId.m7],
        [Tag.Diminished, Tag.Seventh],
        ['Minor 7th Flat 5']
    )],
    [ChordId.Aug7, formatChordPreset(
        ChordId.Aug7,
        'Augmented 7th',
        [IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.m7],
        [Tag.Augmented, Tag.Seventh]
    )],
    [ChordId.AugMaj7, formatChordPreset(
        ChordId.AugMaj7,
        'Augmented Major 7th',
        [IntervalId.P1, IntervalId.M3, IntervalId.A5, IntervalId.M7],
        [Tag.Augmented, Tag.Seventh]
    )],
    // Sixths
    [ChordId.Maj6, formatChordPreset(
        ChordId.Maj6,
        'Major 6th',
        [IntervalId.P1, IntervalId.M3, IntervalId.P5, IntervalId.M6],
        [Tag.Major, Tag.Sixth]
    )],
    [ChordId.Min6, formatChordPreset(
        ChordId.Min6,
        'Minor 6th',
        [IntervalId.P1, IntervalId.m3, IntervalId.P5, IntervalId.M6],
        [Tag.Minor, Tag.Sixth]
    )],
    // Suspended
    [ChordId.Sus2, formatChordPreset(
        ChordId.Sus2,
        'Suspended 2nd',
        [IntervalId.P1, IntervalId.M2, IntervalId.P5],
        [Tag.Suspended, Tag.Triad]
    )],
    [ChordId.Sus4, formatChordPreset(
        ChordId.Sus4,
        'Suspended 4th',
        [IntervalId.P1, IntervalId.P4, IntervalId.P5],
        [Tag.Suspended, Tag.Triad]
    )]
]);

export const SCALE_PRESET_MAP = new Map<ScaleId, IModelConfig>([
    // Diatonic
    [ScaleId.Ionian, formatScalePreset(
        ScaleId.Ionian, 'Ionian',
        [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.M7],
        [Tag.Heptatonic, Tag.Diatonic, Tag.Major],
        ['Major', 'Diatonic']
    )],
    [ScaleId.Dorian, formatScalePreset(
        ScaleId.Dorian, 'Dorian',
        [IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.m7],
        [Tag.Heptatonic, Tag.Diatonic, Tag.Minor]
    )],
    [ScaleId.Phrygian, formatScalePreset(
        ScaleId.Phrygian, 'Phrygian',
        [IntervalId.P1, IntervalId.m2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7],
        [Tag.Heptatonic, Tag.Diatonic, Tag.Minor]
    )],
    [ScaleId.Lydian, formatScalePreset(
        ScaleId.Lydian, 'Lydian',
        [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.A4, IntervalId.P5, IntervalId.M6, IntervalId.M7],
        [Tag.Heptatonic, Tag.Diatonic, Tag.Major]
    )],
    [ScaleId.Mixolydian, formatScalePreset(
        ScaleId.Mixolydian, 'Mixolydian',
        [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.m7],
        [Tag.Heptatonic, Tag.Diatonic, Tag.Major, Tag.Dominant]
    )],
    [ScaleId.Aeolian, formatScalePreset(
        ScaleId.Aeolian, 'Aeolian',
        [IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7],
        [Tag.Heptatonic, Tag.Diatonic, Tag.Minor],
        ['Minor', 'Natural Minor']
    )],
    [ScaleId.Locrian, formatScalePreset(
        ScaleId.Locrian, 'Locrian',
        [IntervalId.P1, IntervalId.m2, IntervalId.m3, IntervalId.P4, IntervalId.d5, IntervalId.m6, IntervalId.m7],
        [Tag.Heptatonic, Tag.Diatonic, Tag.Minor]
    )],
    // Harmonic Minor
    [ScaleId.HarmonicMinor, formatScalePreset(
        ScaleId.HarmonicMinor, 'Harmonic Minor',
        [IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.M7],
        [Tag.Heptatonic, Tag.Minor, Tag.HarmonicMode]
    )],
    [ScaleId.Locrian6, formatScalePreset(
        ScaleId.Locrian6, 'Locrian 6',
        [IntervalId.P1, IntervalId.m2, IntervalId.m3, IntervalId.P4, IntervalId.d5, IntervalId.M6, IntervalId.m7],
        [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    )],
    [ScaleId.IonianSharp5, formatScalePreset(
        ScaleId.IonianSharp5, 'Ionian #5',
        [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.A5, IntervalId.M6, IntervalId.M7],
        [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    )],
    [ScaleId.DorianSharp4, formatScalePreset(
        ScaleId.DorianSharp4, 'Dorian #4',
        [IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.A4, IntervalId.P5, IntervalId.M6, IntervalId.m7],
        [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    )],
    [ScaleId.PhrygianDominant, formatScalePreset(
        ScaleId.PhrygianDominant, 'Phrygian Dominant',
        [IntervalId.P1, IntervalId.m2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7],
        [Tag.Heptatonic, Tag.Exotic, Tag.Dominant, Tag.HarmonicMode]
    )],
    [ScaleId.LydianSharp2, formatScalePreset(
        ScaleId.LydianSharp2, 'Lydian #2',
        [IntervalId.P1, IntervalId.A2, IntervalId.M3, IntervalId.A4, IntervalId.P5, IntervalId.M6, IntervalId.M7],
        [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    )],
    [ScaleId.SuperLocrianDoubleFlat7, formatScalePreset(
        ScaleId.SuperLocrianDoubleFlat7, 'Super Locrian bb7',
        [IntervalId.P1, IntervalId.m2, IntervalId.m3, IntervalId.d4, IntervalId.d5, IntervalId.m6, IntervalId.d7],
        [Tag.Heptatonic, Tag.Exotic, Tag.HarmonicMode]
    )],
    // Melodic Minor
    [ScaleId.MelodicMinor, formatScalePreset(
        ScaleId.MelodicMinor, 'Melodic Minor',
        [IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.M7],
        [Tag.Heptatonic, Tag.Minor, Tag.MelodicMode]
    )],
    [ScaleId.DorianFlat2, formatScalePreset(
        ScaleId.DorianFlat2, 'Dorian b2',
        [IntervalId.P1, IntervalId.m2, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.m7],
        [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode]
    )],
    [ScaleId.LydianSharp5, formatScalePreset(
        ScaleId.LydianSharp5, 'Lydian #5',
        [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.A4, IntervalId.A5, IntervalId.M6, IntervalId.M7],
        [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode]
    )],
    [ScaleId.LydianDominiant, formatScalePreset(
        ScaleId.LydianDominiant, 'Lydian Dominant',
        [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.A4, IntervalId.P5, IntervalId.M6, IntervalId.m7],
        [Tag.Heptatonic, Tag.Exotic, Tag.Dominant, Tag.MelodicMode]
    )],
    [ScaleId.MixolydianFlatSix, formatScalePreset(
        ScaleId.MixolydianFlatSix, 'Mixolydian b6',
        [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.m7],
        [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode]
    )],
    [ScaleId.AeolianFlat5, formatScalePreset(
        ScaleId.AeolianFlat5, 'Aeolian b5',
        [IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.P4, IntervalId.d5, IntervalId.m6, IntervalId.m7],
        [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode]
    )],
    [ScaleId.SuperLocrian, formatScalePreset(
        ScaleId.SuperLocrian, 'Super Locrian',
        [IntervalId.P1, IntervalId.m2, IntervalId.m3, IntervalId.d4, IntervalId.d5, IntervalId.m6, IntervalId.m7],
        [Tag.Heptatonic, Tag.Exotic, Tag.MelodicMode],
        ['Altered']
    )],
    // Pentatonic
    [ScaleId.MajorPentatonic, formatScalePreset(
        ScaleId.MajorPentatonic, 'Major Pentatonic',
        [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P5, IntervalId.M6],
        [Tag.Pentatonic, Tag.Major]
    )],
    [ScaleId.Egyptian, formatScalePreset(
        ScaleId.Egyptian, 'Egyptian',
        [IntervalId.P1, IntervalId.M2, IntervalId.P4, IntervalId.P5, IntervalId.m7],
        [Tag.Pentatonic, Tag.Exotic]
    )],
    [ScaleId.ManGong, formatScalePreset(
        ScaleId.ManGong, 'Man Gong',
        [IntervalId.P1, IntervalId.m3, IntervalId.P4, IntervalId.m6, IntervalId.m7],
        [Tag.Pentatonic, Tag.Exotic]
    )],
    [ScaleId.Ritusen, formatScalePreset(
        ScaleId.Ritusen, 'Ritusen',
        [IntervalId.P1, IntervalId.M2, IntervalId.P4, IntervalId.P5, IntervalId.M6],
        [Tag.Pentatonic, Tag.Exotic]
    )],
    [ScaleId.MinorPentatonic, formatScalePreset(
        ScaleId.MinorPentatonic, 'Minor Pentatonic',
        [IntervalId.P1, IntervalId.m3, IntervalId.P4, IntervalId.P5, IntervalId.m7],
        [Tag.Pentatonic, Tag.Minor]
    )],
    // Blues
    [ScaleId.MajorBlues, formatScalePreset(
        ScaleId.MajorBlues, 'Major Blues',
        [IntervalId.P1, IntervalId.M2, IntervalId.m3, IntervalId.M3, IntervalId.P5, IntervalId.M6],
        [Tag.Hexatonic, Tag.Blues, Tag.Major]
    )],
    [ScaleId.MinorBlues, formatScalePreset(
        ScaleId.MinorBlues, 'Minor Blues',
        [IntervalId.P1, IntervalId.m3, IntervalId.P4, IntervalId.d5, IntervalId.P5, IntervalId.m7],
        [Tag.Hexatonic, Tag.Blues, Tag.Minor]
    )],
    // Bebop
    [ScaleId.DominantBebop, formatScalePreset(
        ScaleId.DominantBebop, 'Dominant Bebob',
        [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.M6, IntervalId.m7, IntervalId.M7],
        [Tag.Octatonic, Tag.Bebop, Tag.Major, Tag.Dominant]
    )],
    [ScaleId.MajorBebop, formatScalePreset(
        ScaleId.MajorBebop, 'Major Bebob',
        [IntervalId.P1, IntervalId.M2, IntervalId.M3, IntervalId.P4, IntervalId.P5, IntervalId.m6, IntervalId.M6, IntervalId.M7],
        [Tag.Octatonic, Tag.Bebop, Tag.Major]
    )]
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
    [INTERVAL_PRESET_MAP.get(IntervalId.m2), INTERVAL_PRESET_MAP.get(IntervalId.M2)],
    [INTERVAL_PRESET_MAP.get(IntervalId.m3), INTERVAL_PRESET_MAP.get(IntervalId.M3)],
    [INTERVAL_PRESET_MAP.get(IntervalId.P4)],
    [INTERVAL_PRESET_MAP.get(IntervalId.P5)],
    [INTERVAL_PRESET_MAP.get(IntervalId.m6), INTERVAL_PRESET_MAP.get(IntervalId.M6)],
    [INTERVAL_PRESET_MAP.get(IntervalId.m7), INTERVAL_PRESET_MAP.get(IntervalId.M7)]
];

//console.log('pw-presets', NOTE_PRESETS, INTERVAL_PRESETS, CHORD_PRESETS, SCALE_PRESETS);

export const logPresetJson = () => {
    console.log('pw-presets notes', JSON.stringify(NOTE_PRESETS));
    console.log('pw-presets intervals', JSON.stringify(INTERVAL_PRESETS));
    console.log('pw-presets chords', JSON.stringify(CHORD_PRESETS));
    console.log('pw-presets scales', JSON.stringify(SCALE_PRESETS));
}
