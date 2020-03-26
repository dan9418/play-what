// Tonics

export const TONIC = Object.freeze({
    C: {
        id: 'C',
        name: 'C',
        value: {
            degreeInC: 1,
            pitchClass: 0
        }
    },
    D: {
        id: 'D',
        name: 'D',
        value: {
            degreeInC: 2,
            pitchClass: 2
        }
    },
    E: {
        id: 'E',
        name: 'E',
        value: {
            degreeInC: 3,
            pitchClass: 4
        }
    },
    F: {
        id: 'F',
        name: 'F',
        value: {
            degreeInC: 4,
            pitchClass: 5
        }
    },
    G: {
        id: 'G',
        name: 'G',
        value: {
            degreeInC: 5,
            pitchClass: 7
        }
    },
    A: {
        id: 'A',
        name: 'A',
        value: {
            degreeInC: 6,
            pitchClass: 9
        }
    },
    B: {
        id: 'B',
        name: 'B',
        value: {
            degreeInC: 7,
            pitchClass: 11
        }
    }
});

// Accidentals

export const ACCIDENTAL = Object.freeze({
    Flat: {
        id: 'flat',
        name: 'Flat',
        value: {
            symbol: 'b',
            offset: -1
        }
    },
    Natural: {
        id: 'natural',
        name: 'Natural',
        value: {
            symbol: '♮',
            offset: 0
        }
    },
    Sharp: {
        id: 'sharp',
        name: 'Sharp',
        value: {
            symbol: '#',
            offset: 1
        }
    }
});

// Intervals

export const INTERVAL = Object.freeze({
    P1: {
        id: 'P1',
        name: 'Perfect Unison',
        value: {
            degree: 1,
            semitones: 0,
        }
    },
    m2: {
        id: 'm2',
        name: 'Minor 2nd',
        value: {
            degree: 2,
            semitones: 1,
        }
    },
    M2: {
        id: 'M2',
        name: 'Major 2nd',
        value: {
            degree: 2,
            semitones: 2,
        }
    },
    A2: {
        id: 'A2',
        name: 'Augmented 2nd',
        value: {
            degree: 2,
            semitones: 3,
        }
    },
    d3: {
        id: 'd3',
        name: 'Diminished 3rd',
        value: {
            degree: 3,
            semitones: 2,
        }
    },
    m3: {
        id: 'm3',
        name: 'Minor 3rd',
        value: {
            degree: 3,
            semitones: 3,
        }
    },
    M3: {
        id: 'M3',
        name: 'Major 3rd',
        value: {
            degree: 3,
            semitones: 4,
        }
    },
    A3: {
        id: 'A3',
        name: 'Augmented 3rd',
        value: {
            degree: 3,
            semitones: 5,
        }
    },
    d4: {
        id: 'd4',
        name: 'Diminished 4th',
        value: {
            degree: 4,
            semitones: 4,
        }
    },
    P4: {
        id: 'P4',
        name: 'Perfect 4th',
        value: {
            degree: 4,
            semitones: 5,
        }
    },
    A4: {
        id: 'A4',
        name: 'Augmented 4th',
        value: {
            degree: 4,
            semitones: 6,
        }
    },
    d5: {
        id: 'd5',
        name: 'Diminished 5th',
        value: {
            degree: 5,
            semitones: 6,
        }
    },
    P5: {
        id: 'P5',
        name: 'Perfect 5th',
        value: {
            degree: 5,
            semitones: 7,
        }
    },
    A5: {
        id: 'A5',
        name: 'Augmented 5th',
        value: {
            degree: 5,
            semitones: 8,
        }
    },
    d6: {
        id: 'd6',
        name: 'Diminished 6th',
        value: {
            degree: 6,
            semitones: 7,
        }
    },
    m6: {
        id: 'm6',
        name: 'Minor 6th',
        value: {
            degree: 6,
            semitones: 8,
        }
    },
    M6: {
        id: 'M6',
        name: 'Major 6th',
        value: {
            degree: 6,
            semitones: 9,
        }
    },
    A6: {
        id: 'A6',
        name: 'Augmented 6th',
        value: {
            degree: 6,
            semitones: 10,
        }
    },
    d7: {
        id: 'd7',
        name: 'Diminished 7th',
        value: {
            degree: 7,
            semitones: 9,
        }
    },
    m7: {
        id: 'm7',
        name: 'Minor 7th',
        value: {
            degree: 7,
            semitones: 10,
        }
    },
    M7: {
        id: 'M7',
        name: 'Major 7th',
        value: {
            degree: 7,
            semitones: 11,
        }
    },
    P8: {
        id: 'P8',
        name: 'Octave',
        value: {
            degree: 8,
            semitones: 12,
        }
    }
});