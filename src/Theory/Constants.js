// Enums

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

// Tuning

export const CALIBRATION_NOTE = {
    frequency: 440,
    noteIndex: 9
};

export const CALIBRATION_CONSTANT = Math.pow(2, 1 / 12);