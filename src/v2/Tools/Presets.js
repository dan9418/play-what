/*
    Entity
        api: (...) => result: any
            fromX: (x: X) => class: Entity
        presets: IEnityConfig
        class: "immutible static class representing config state snapshot with OO api wrappers for chaining function calls"
            constructor(presetId || config || array)
            toConfig: IEntityConfig
*/


/*
    IKeyCenterArgs
        keyString: string ||
        IKeyCenterConfig
            tonic: ITonicArgs
            accidental: IAccidentalArgs
            octave: number
*/

/*
    IDegreeArgs
        presetId: string ||
        IDegreeConfig: nubmer
*/

/*
    IPitchClassArgs
        presetId: string ||
        IPitchClassConfig: number
*/


/*
    ITonicArgs
        presetId: string ||
        config: ITonicConfig
            id?: string,
            name?: string,
            degreeInC?: number,
            pitchClass?: number
*/

export const TONIC = Object.freeze({
    C: {
        id: 'C',
        name: 'C',
        degreeInC: 1,
        pitchClass: 0
    },
    D: {
        id: 'D',
        name: 'D',
        degreeInC: 2,
        pitchClass: 2
    },
    E: {
        id: 'E',
        name: 'E',
        degreeInC: 3,
        pitchClass: 4
    },
    F: {
        id: 'F',
        name: 'F',
        degreeInC: 4,
        pitchClass: 5
    },
    G: {
        id: 'G',
        name: 'G',
        degreeInC: 5,
        pitchClass: 7
    },
    A: {
        id: 'A',
        name: 'A',
        degreeInC: 6,
        pitchClass: 9
    },
    B: {
        id: 'B',
        name: 'B',
        degreeInC: 7,
        pitchClass: 11
    }
});

export const TONICS = Object.freeze(Object.values(TONIC));

/*
    IAccidentalArgs
        presetId: string ||
        config: IAccidentalConfig
            id?: string,
            name?: string,
            offset?: number,
            symbol?: number
*/

export const ACCIDENTAL = Object.freeze({
    Flat: {
        id: 'flat',
        name: 'Flat',
        symbol: 'b',
        offset: -1
    },
    Natural: {
        id: 'natural',
        name: 'Natural',
        symbol: '♮',
        offset: 0
    },
    Sharp: {
        id: 'sharp',
        name: 'Sharp',
        symbol: '#',
        offset: 1
    }
});

/*
    IIntervalArgs
        presetId: string ||
        config: IIntervalConfig
            id?: string,
            name?: string,
            degree?: number,
            semitones?: number,
            desending?: bool,

*/

export const INTERVAL = Object.freeze({
    P1: {
        id: 'P1',
        name: 'Perfect Unison',
        degree: 1,
        semitones: 0,
    },
    m2: {
        id: 'm2',
        name: 'Minor 2nd',
        degree: 2,
        semitones: 1,
    },
    M2: {
        id: 'M2',
        name: 'Major 2nd',
        degree: 2,
        semitones: 2,
    },
    A2: {
        id: 'A2',
        name: 'Augmented 2nd',
        degree: 2,
        semitones: 3,
    },
    d3: {
        id: 'd3',
        name: 'Diminished 3rd',
        degree: 3,
        semitones: 2,
    },
    m3: {
        id: 'm3',
        name: 'Minor 3rd',
        degree: 3,
        semitones: 3,
    },
    M3: {
        id: 'M3',
        name: 'Major 3rd',
        degree: 3,
        semitones: 4,
    },
    A3: {
        id: 'A3',
        name: 'Augmented 3rd',
        degree: 3,
        semitones: 5,
    },
    d4: {
        id: 'd4',
        name: 'Diminished 4th',
        degree: 4,
        semitones: 4,
    },
    P4: {
        id: 'P4',
        name: 'Perfect 4th',
        degree: 4,
        semitones: 5,
    },
    A4: {
        id: 'A4',
        name: 'Augmented 4th',
        degree: 4,
        semitones: 6,
    },
    d5: {
        id: 'd5',
        name: 'Diminished 5th',
        degree: 5,
        semitones: 6,
    },
    P5: {
        id: 'P5',
        name: 'Perfect 5th',
        degree: 5,
        semitones: 7,
    },
    A5: {
        id: 'A5',
        name: 'Augmented 5th',
        degree: 5,
        semitones: 8,
    },
    d6: {
        id: 'd6',
        name: 'Diminished 6th',
        degree: 6,
        semitones: 7,
    },
    m6: {
        id: 'm6',
        name: 'Minor 6th',
        degree: 6,
        semitones: 8,
    },
    M6: {
        id: 'M6',
        name: 'Major 6th',
        degree: 6,
        semitones: 9,
    },
    A6: {
        id: 'A6',
        name: 'Augmented 6th',
        degree: 6,
        semitones: 10,
    },
    d7: {
        id: 'd7',
        name: 'Diminished 7th',
        degree: 7,
        semitones: 9,
    },
    m7: {
        id: 'm7',
        name: 'Minor 7th',
        degree: 7,
        semitones: 10,
    },
    M7: {
        id: 'M7',
        name: 'Major 7th',
        degree: 7,
        semitones: 11,
    },
    P8: {
        id: 'P8',
        name: 'Octave',
        degree: 8,
        semitones: 12,
    }
});

export const INTERVALS = Object.freeze(Object.values(INTERVAL));

/*
    IIntervalPairArgs
        preset: string ||    
        config: IIntervalPairConfig
            id?: string,
            name?: string,
            interval: IIntervalArgs

    IntervalPair
        fromPreset(presetId: string)
        fromConfig(config: IIntervalPairConfig)
*/

export const INTERVAL_PAIR = Object.freeze({
    P1: { id: 'P1', name: 'P1', interval: 'P1' },
    m2: { id: 'm2', name: 'm2', interval: 'm2' },
    M2: { id: 'M2', name: 'M2', interval: 'M2' },
    A2: { id: 'A2', name: 'A2', interval: 'A2' },
    d3: { id: 'd3', name: 'd3', interval: 'd3' },
    m3: { id: 'm3', name: 'm3', interval: 'm3' },
    M3: { id: 'M3', name: 'M3', interval: 'M3' },
    P4: { id: 'P4', name: 'P4', interval: 'P4' },
    A4: { id: 'A4', name: 'A4', interval: 'A4' },
    d5: { id: 'd5', name: 'd5', interval: 'd5' },
    P5: { id: 'P5', name: 'P5', interval: 'P5' },
    A5: { id: 'A5', name: 'A5', interval: 'A5' },
    d6: { id: 'd6', name: 'd6', interval: 'd6' },
    m6: { id: 'm6', name: 'm6', interval: 'm6' },
    M6: { id: 'M6', name: 'M6', interval: 'M6' },
    d7: { id: 'd7', name: 'd7', interval: 'd7' },
    m7: { id: 'm7', name: 'm7', interval: 'm7' },
    M7: { id: 'M7', name: 'M7', interval: 'M7' }
});

/*
    IChordArgs
        presetId: string ||
        config: IChordConfig
            id?: string,
            name?: string,
            intervals: IIntervalArgs[],
            transforms?: IChordTransformArgs[]
*/

export const CHORD = Object.freeze({
    Maj: { id: 'Maj', name: 'Major Triad', intervals: ['P1', 'M3', 'P5'] },
    Maj6: { id: 'Maj6', name: 'Major 6th', intervals: ['P1', 'M3', 'P5', 'M6'] },
    Maj7: { id: 'Maj7', name: 'Major 7th', intervals: ['P1', 'M3', 'P5', 'M7'] },
    Min: { id: 'Min', name: 'Minor Triad', intervals: ['P1', 'm3', 'P5'] },
    Min6: { id: 'Min6', name: 'Minor 6th', intervals: ['P1', 'm3', 'P5', 'M6'] },
    Min7: { id: 'Min7', name: 'Minor 7th', intervals: ['P1', 'm3', 'P5', 'm7'] },
    MinMaj7: { id: 'MinMaj7', name: 'Minor-Major 7th', intervals: ['P1', 'm3', 'P5', 'M7'] },
    Dom7: { id: 'Dom7', name: 'Dominant 7th', intervals: ['P1', 'M3', 'P5', 'm7'] },
    // Dom7b9:     { id: 'Dom7b9',     name: 'Dom7 b9',                intervals: ['P1', 'M3', 'P5', 'm7', 'flat9'] },
    Aug: { id: 'Aug', name: 'Augmented Triad', intervals: ['P1', 'M3', 'A5'] },
    Aug7: { id: 'Aug7', name: 'Augmented 7th', intervals: ['P1', 'M3', 'A5', 'm7'] },
    AugM7: { id: 'AugM7', name: 'Augmented Major 7th', intervals: ['P1', 'M3', 'A5', 'M7'] },
    Dim: { id: 'Dim', name: 'Diminished Triad', intervals: ['P1', 'm3', 'd5'] },
    Dim7: { id: 'Dim7', name: 'Diminished 7th', intervals: ['P1', 'm3', 'd5', 'd7'] },
    HalfDim7: { id: 'HalfDim7', name: 'Half-Diminished 7th', intervals: ['P1', 'm3', 'd5', 'm7'] },
    Sus2: { id: 'Sus2', name: 'Suspended 2nd', intervals: ['P1', 'M2', 'P5'] },
    Sus4: { id: 'Sus4', name: 'Suspended 4th', intervals: ['P1', 'P4', 'P5'] }
});

/*
    IScaleArgs
        presetId: string ||
        config: IScaleConfig
            id?: string,
            name?: string,
            intervals: IIntervalArgs[],
            transforms?: IScaleTransformArgs[]
*/

export const SCALE = Object.freeze({
    Major: { id: 'Major', name: 'Major', intervals: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'] },
    NatualMinor: { id: 'NaturalMinor', name: 'Natural Minor', intervals: ['P1', 'M2', 'm3', 'P4', 'P5', 'm6', 'm7'] },
    HarmonicMinor: { id: 'HarmonicMinor', name: 'Harmonic Minor', intervals: ['P1', 'M2', 'm3', 'P4', 'P5', 'm6', 'M7'] },
    MajorPentatonic: { id: 'MajorPentatonic', name: 'Major Pentatonic', intervals: ['P1', 'M2', 'M3', 'P5', 'M6'] },
    MinorPentatonic: { id: 'MinorPentatonic', name: 'Minor Pentatonic', intervals: ['P1', 'm3', 'P4', 'P5', 'm7'] },
    Chromatic: { id: 'Chromatic', name: 'Chromatic', intervals: ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'A4', 'P5', 'm6', 'M6', 'm7', 'M7'] }
});

/*
    IModeArgs
        presetId: string
        config: IIntervalPair
            id?: string,
            name?: string,
            scale: IScaleArgs,
            degree: number,
            transforms?: IScaleTransformArgs[]
*/

export const MODE = Object.freeze({
    Ionian: { id: 'Ionian', name: 'Ionian', scale: 'Major', degree: 1 },
    Dorian: { id: 'Dorian', name: 'Dorian', scale: 'Major', degree: 2 },
    Phrygian: { id: 'Phrygian', name: 'Phrygian', scale: 'Major', degree: 3 },
    Lydian: { id: 'Lydian', name: 'Lydian', scale: 'Major', degree: 4 },
    Mixolydian: { id: 'Mixolydian', name: 'Mixolydian', scale: 'Major', degree: 5 },
    Aeolian: { id: 'Aeolian', name: 'Aeolian', scale: 'Major', degree: 6 },
    Locrian: { id: 'Locrian', name: 'Locrian', scale: 'Major', degree: 7 }
});

/*
    IRomanNumeralArgs
        presetId: string
        config: IRomanNumeralConfig
            id?: string,
            name?: string,
            scale?: IScaleArgs
            degree?: number,
            quality?: 'string',
            transforms?: IChordTransformArgs[]
            serializer? IRomanNumeralSerializerArgs
*/