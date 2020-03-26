// Key Center

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

export const ACCIDENTAL = Object.freeze({
    Flat: {
        id: 'Flat',
        name: 'b',
        offset: -1
    },
    Natural: {
        id: 'Natural',
        name: '♮',
        offset: 0
    },
    Sharp: {
        id: 'Sharp',
        name: '#',
        offset: 1
    }
});

export const PITCH_CLASS_NAMES = [
    'C',
    'C#/Db',
    'D',
    'D#/Eb',
    'E',
    'F',
    'F#/Gb',
    'G',
    'G#/Ab',
    'A',
    'A#/Bb',
    'B'
];

// Intervals

export const INTERVAL = Object.freeze({
    P1: {
        degree: 1,
        semitones: 0,
        id: 'P1',
        name: 'Perfect Unison'
    },
    m2: {
        degree: 2,
        semitones: 1,
        id: 'm2',
        name: 'Minor 2nd'
    },
    M2: {
        degree: 2,
        semitones: 2,
        id: 'M2',
        name: 'Major 2nd'
    },
    A2: {
        degree: 2,
        semitones: 3,
        id: 'A2',
        name: 'Augmented 2nd'
    },
    d3: {
        degree: 3,
        semitones: 2,
        id: 'd3',
        name: 'Diminished 3rd'
    },
    m3: {
        degree: 3,
        semitones: 3,
        id: 'm3',
        name: 'Minor 3rd'
    },
    M3: {
        degree: 3,
        semitones: 4,
        id: 'M3',
        name: 'Major 3rd'
    },
    A3: {
        degree: 3,
        semitones: 5,
        id: 'A3',
        name: 'Augmented 3rd'
    },
    d4: {
        degree: 4,
        semitones: 4,
        id: 'd4',
        name: 'Diminished 4th'
    },
    P4: {
        degree: 4,
        semitones: 5,
        id: 'P4',
        name: 'Perfect 4th'
    },
    A4: {
        degree: 4,
        semitones: 6,
        id: 'A4',
        name: 'Augmented 4th'
    },
    d5: {
        degree: 5,
        semitones: 6,
        id: 'd5',
        name: 'Diminished 5th'
    },
    P5: {
        degree: 5,
        semitones: 7,
        id: 'P5',
        name: 'Perfect 5th'
    },
    A5: {
        degree: 5,
        semitones: 8,
        id: 'A5',
        name: 'Augmented 5th'
    },
    d6: {
        degree: 6,
        semitones: 7,
        id: 'd6',
        name: 'Diminished 6th'
    },
    m6: {
        degree: 6,
        semitones: 8,
        id: 'm6',
        name: 'Minor 6th'
    },
    M6: {
        degree: 6,
        semitones: 9,
        id: 'M6',
        name: 'Major 6th'
    },
    A6: {
        degree: 6,
        semitones: 10,
        id: 'A6',
        name: 'Augmented 6th'
    },
    d7: {
        degree: 7,
        semitones: 9,
        id: 'd7',
        name: 'Diminished 7th'
    },
    m7: {
        degree: 7,
        semitones: 10,
        id: 'm7',
        name: 'Minor 7th'
    },
    M7: {
        degree: 7,
        semitones: 11,
        id: 'M7',
        name: 'Major 7th'
    },
    P8: {
        degree: 8,
        semitones: 12,
        id: 'P8',
        name: 'Octave'
    },
    // Extended (experimental)
    flat9: {
        degree: 9,
        semitones: 13,
        id: 'b9',
        name: 'Flat Ninth'
    },
    ext9: {
        degree: 9,
        semitones: 14,
        id: '9',
        name: 'Ninth'
    },
    sharp9: {
        degree: 9,
        semitones: 15,
        id: '#9',
        name: 'Sharp Ninth'
    },
    flat11: {
        degree: 11,
        semitones: 16,
        id: 'b11',
        name: 'Flat Eleventh'
    },
    ext11: {
        degree: 11,
        semitones: 17,
        id: '11',
        name: 'Eleventh'
    },
    sharp11: {
        degree: 11,
        semitones: 18,
        id: '#11',
        name: 'Sharp Eleventh'
    },
    P12: {
        degree: 12,
        semitones: 19,
        id: 'P12',
        name: 'Perfect 12th'
    },
    flat13: {
        degree: 13,
        semitones: 20,
        id: 'b13',
        name: 'Flat Thirteenth'
    },
    ext13: {
        degree: 13,
        semitones: 21,
        id: '13',
        name: 'Thirteenth'
    },
    sharp13: {
        degree: 13,
        semitones: 22,
        id: '#13',
        name: 'Sharp Thirteenth'
    },
    flat15: {
        degree: 15,
        semitones: 23,
        id: 'b15',
        name: 'Flat Fifthteenth'
    },
    ext15: {
        degree: 15,
        semitones: 24,
        id: '15',
        name: 'Fifthteenth'
    }
});


// Tuning

export const CALIBRATION_NOTE = {
    frequency: 440,
    noteIndex: 9
};

export const CALIBRATION_CONSTANT = Math.pow(2,
    1 / 12);