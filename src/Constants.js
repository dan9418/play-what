export const CONCEPT_DEFAULTS = {
    a: 'C',
    B: 'Maj',
    transforms: []
};

export const MAX_VECTOR = { p: 12, d: 7 };

export const DEGREE_MAPPING = [
    {
        name: 'A',
        pitch: 9
    },
    {
        name: 'B',
        pitch: 11
    },
    {
        name: 'C',
        pitch: 0
    },
    {
        name: 'D',
        pitch: 2
    },
    {
        name: 'E',
        pitch: 4
    },
    {
        name: 'F',
        pitch: 5
    },
    {
        name: 'G',
        pitch: 7
    }
];

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

export const ACCIDENTAL_VALUES = Object.freeze(Object.values(ACCIDENTAL));

export const SCOPE = {
    Concept: 'concept',
    Progression: 'progression',
    Section: 'section',
    Chart: 'chart'
}


/*
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

export const CALIBRATION_NOTE = {
    frequency: 440,
    noteIndex: 9
};

export const CALIBRATION_CONSTANT = Math.pow(2, 1 / 12);
*/