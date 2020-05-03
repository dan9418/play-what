export const KEY_CENTERS = {
    A: {
        id: 'A',
        name: 'A',
        p: 9,
        d: 0
    },
    B: {
        id: 'B',
        name: 'B',
        p: 11,
        d: 1
    },
    C: {
        id: 'C',
        name: 'C',
        p: 0,
        d: 2
    },
    D: {
        id: 'D',
        name: 'D',
        p: 2,
        d: 3
    },
    E: {
        id: 'E',
        name: 'E',
        p: 4,
        d: 4
    },
    F: {
        id: 'F',
        name: 'F',
        p: 5,
        d: 5
    },
    G: {
        id: 'G',
        name: 'G',
        p: 7,
        d: 6
    }
};

export const KEY_CENTERS_VALUES = Object.freeze(Object.values(KEY_CENTERS));


export const INTERVALS = Object.freeze({
    P1: {
        id: 'P1',
        name: 'Perfect Unison',
        d: 0,
        p: 0
    },
    m2: {
        id: 'm2',
        name: 'Minor 2nd',
        d: 1,
        p: 1
    },
    M2: {
        id: 'M2',
        name: 'Major 2nd',
        d: 1,
        p: 2
    },
    A2: {
        id: 'A2',
        name: 'Augmented 2nd',
        d: 1,
        p: 3
    },
    d3: {
        id: 'd3',
        name: 'Diminished 3rd',
        d: 2,
        p: 2
    },
    m3: {
        id: 'm3',
        name: 'Minor 3rd',
        d: 2,
        p: 3
    },
    M3: {
        id: 'M3',
        name: 'Major 3rd',
        d: 2,
        p: 4
    },
    A3: {
        id: 'A3',
        name: 'Augmented 3rd',
        d: 2,
        p: 5
    },
    d4: {
        id: 'd4',
        name: 'Diminished 4th',
        d: 3,
        p: 4
    },
    P4: {
        id: 'P4',
        name: 'Perfect 4th',
        d: 3,
        p: 5
    },
    A4: {
        id: 'A4',
        name: 'Augmented 4th',
        d: 3,
        p: 6
    },
    d5: {
        id: 'd5',
        name: 'Diminished 5th',
        d: 4,
        p: 6
    },
    P5: {
        id: 'P5',
        name: 'Perfect 5th',
        d: 4,
        p: 7
    },
    A5: {
        id: 'A5',
        name: 'Augmented 5th',
        d: 4,
        p: 8
    },
    d6: {
        id: 'd6',
        name: 'Diminished 6th',
        d: 5,
        p: 7
    },
    m6: {
        id: 'm6',
        name: 'Minor 6th',
        d: 5,
        p: 8
    },
    M6: {
        id: 'M6',
        name: 'Major 6th',
        d: 5,
        p: 9
    },
    A6: {
        id: 'A6',
        name: 'Augmented 6th',
        d: 5,
        p: 10
    },
    d7: {
        id: 'd7',
        name: 'Diminished 7th',
        d: 6,
        p: 9
    },
    m7: {
        id: 'm7',
        name: 'Minor 7th',
        d: 6,
        p: 10
    },
    M7: {
        id: 'M7',
        name: 'Major 7th',
        d: 6,
        p: 11
    },
    P8: {
        id: 'P8',
        name: 'Octave',
        d: 7,
        p: 12
    }
});

export const INTERVALS_VALUES = Object.freeze(Object.values(INTERVALS));

export const INTERVAL_PAIR = Object.freeze({
    P1: { id: 'P1', name: 'P1', intervals: [INTERVALS.P1, INTERVALS.P1] },
    m2: { id: 'm2', name: 'm2', intervals: [INTERVALS.P1, INTERVALS.m2] },
    M2: { id: 'M2', name: 'M2', intervals: [INTERVALS.P1, INTERVALS.M2] },
    A2: { id: 'A2', name: 'A2', intervals: [INTERVALS.P1, INTERVALS.A2] },
    d3: { id: 'd3', name: 'd3', intervals: [INTERVALS.P1, INTERVALS.d3] },
    m3: { id: 'm3', name: 'm3', intervals: [INTERVALS.P1, INTERVALS.m3] },
    M3: { id: 'M3', name: 'M3', intervals: [INTERVALS.P1, INTERVALS.M3] },
    P4: { id: 'P4', name: 'P4', intervals: [INTERVALS.P1, INTERVALS.P4] },
    A4: { id: 'A4', name: 'A4', intervals: [INTERVALS.P1, INTERVALS.A4] },
    d5: { id: 'd5', name: 'd5', intervals: [INTERVALS.P1, INTERVALS.d5] },
    P5: { id: 'P5', name: 'P5', intervals: [INTERVALS.P1, INTERVALS.P5] },
    A5: { id: 'A5', name: 'A5', intervals: [INTERVALS.P1, INTERVALS.A5] },
    d6: { id: 'd6', name: 'd6', intervals: [INTERVALS.P1, INTERVALS.d6] },
    m6: { id: 'm6', name: 'm6', intervals: [INTERVALS.P1, INTERVALS.m6] },
    M6: { id: 'M6', name: 'M6', intervals: [INTERVALS.P1, INTERVALS.M6] },
    d7: { id: 'd7', name: 'd7', intervals: [INTERVALS.P1, INTERVALS.d7] },
    m7: { id: 'm7', name: 'm7', intervals: [INTERVALS.P1, INTERVALS.m7] },
    M7: { id: 'M7', name: 'M7', intervals: [INTERVALS.P1, INTERVALS.M7] }
});

export const INTERVAL_PAIR_VALUES = Object.freeze(Object.values(INTERVAL_PAIR));

export const CHORD = Object.freeze({
    Maj: { id: 'Maj', name: 'Major Triad', intervals: [INTERVALS.P1, INTERVALS.M3, INTERVALS.P5] },
    Maj6: { id: 'Maj6', name: 'Major 6th', intervals: [INTERVALS.P1, INTERVALS.M3, INTERVALS.P5, INTERVALS.M6] },
    Maj7: { id: 'Maj7', name: 'Major 7th', intervals: [INTERVALS.P1, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7] },
    Min: { id: 'Min', name: 'Minor Triad', intervals: [INTERVALS.P1, INTERVALS.m3, INTERVALS.P5] },
    Min6: { id: 'Min6', name: 'Minor 6th', intervals: [INTERVALS.P1, INTERVALS.m3, INTERVALS.P5, INTERVALS.M6] },
    Min7: { id: 'Min7', name: 'Minor 7th', intervals: [INTERVALS.P1, INTERVALS.m3, INTERVALS.P5, INTERVALS.m7] },
    MinMaj7: { id: 'MinMaj7', name: 'Minor-Major 7th', intervals: [INTERVALS.P1, INTERVALS.m3, INTERVALS.P5, INTERVALS.M7] },
    Dom7: { id: 'Dom7', name: 'Dominant 7th', intervals: [INTERVALS.P1, INTERVALS.M3, INTERVALS.P5, INTERVALS.m7] },
    Aug: { id: 'Aug', name: 'Augmented Triad', intervals: [INTERVALS.P1, INTERVALS.M3, INTERVALS.A5] },
    Aug7: { id: 'Aug7', name: 'Augmented 7th', intervals: [INTERVALS.P1, INTERVALS.M3, INTERVALS.A5, INTERVALS.m7] },
    AugM7: { id: 'AugM7', name: 'Augmented Major 7th', intervals: [INTERVALS.P1, INTERVALS.M3, INTERVALS.A5, INTERVALS.M7] },
    Dim: { id: 'Dim', name: 'Diminished Triad', intervals: [INTERVALS.P1, INTERVALS.m3, INTERVALS.d5] },
    Dim7: { id: 'Dim7', name: 'Diminished 7th', intervals: [INTERVALS.P1, INTERVALS.m3, INTERVALS.d5, INTERVALS.d7] },
    HalfDim7: { id: 'HalfDim7', name: 'Half-Diminished 7th', intervals: [INTERVALS.P1, INTERVALS.m3, INTERVALS.d5, INTERVALS.m7] },
    Sus2: { id: 'Sus2', name: 'Suspended 2nd', intervals: [INTERVALS.P1, INTERVALS.M2, INTERVALS.P5] },
    Sus4: { id: 'Sus4', name: 'Suspended 4th', intervals: [INTERVALS.P1, INTERVALS.P4, INTERVALS.P5] }
});

export const CHORD_VALUES = Object.freeze(Object.values(CHORD));

export const SCALE = Object.freeze({
    Major1: { id: 'Majo1r', name: 'Major1', intervals: [INTERVALS.P1, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7] },
    Major: { id: 'Major', name: 'Major', intervals: [INTERVALS.P1, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7] },
    NaturalMinor: { id: 'NaturalMinor', name: 'Natural Minor', intervals: [INTERVALS.P1, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.m7] },
    HarmonicMinor: { id: 'HarmonicMinor', name: 'Harmonic Minor', intervals: [INTERVALS.P1, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.M7] },
    MajorPentatonic: { id: 'MajorPentatonic', name: 'Major Pentatonic', intervals: [INTERVALS.P1, INTERVALS.M2, INTERVALS.M3, INTERVALS.P5, INTERVALS.M6] },
    MinorPentatonic: { id: 'MinorPentatonic', name: 'Minor Pentatonic', intervals: [INTERVALS.P1, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m7] },
    Chromatic: { id: 'Chromatic', name: 'Chromatic', intervals: [INTERVALS.P1, INTERVALS.m2, INTERVALS.M2, INTERVALS.m3, INTERVALS.M3, INTERVALS.P4, INTERVALS.A4, INTERVALS.P5, INTERVALS.m6, INTERVALS.M6, INTERVALS.m7, INTERVALS.M7] }
});

export const SCALE_VALUES = Object.freeze(Object.values(SCALE));

/*export const MODE = Object.freeze({
    Ionian: { id: 'Ionian', name: 'Ionian', scale: 'Major', degree: 1 },
    Dorian: { id: 'Dorian', name: 'Dorian', scale: 'Major', degree: 2 },
    Phrygian: { id: 'Phrygian', name: 'Phrygian', scale: 'Major', degree: 3 },
    Lydian: { id: 'Lydian', name: 'Lydian', scale: 'Major', degree: 4 },
    Mixolydian: { id: 'Mixolydian', name: 'Mixolydian', scale: 'Major', degree: 5 },
    Aeolian: { id: 'Aeolian', name: 'Aeolian', scale: 'Major', degree: 6 },
    Locrian: { id: 'Locrian', name: 'Locrian', scale: 'Major', degree: 7 }
});*/
