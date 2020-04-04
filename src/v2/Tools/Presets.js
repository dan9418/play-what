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

export const INTERVALS = Object.freeze(Object.values(INTERVAL));

export const INTERVAL_PAIR = {
    P1: { id: 'P1', name: 'P1', value: { intervals: ['P1', 'P1'] }},
    m2: { id: 'm2', name: 'm2', value: { intervals: ['P1', 'm2'] }},
    M2: { id: 'M2', name: 'M2', value: { intervals: ['P1', 'M2'] }},
    A2: { id: 'A2', name: 'A2', value: { intervals: ['P1', 'A2'] }},
    d3: { id: 'd3', name: 'd3', value: { intervals: ['P1', 'd3'] }},
    m3: { id: 'm3', name: 'm3', value: { intervals: ['P1', 'm3'] }},
    M3: { id: 'M3', name: 'M3', value: { intervals: ['P1', 'M3'] }},
    P4: { id: 'P4', name: 'P4', value: { intervals: ['P1', 'P4'] }},
    A4: { id: 'A4', name: 'A4', value: { intervals: ['P1', 'A4'] }},
    d5: { id: 'd5', name: 'd5', value: { intervals: ['P1', 'd5'] }},
    P5: { id: 'P5', name: 'P5', value: { intervals: ['P1', 'P5'] }},
    A5: { id: 'A5', name: 'A5', value: { intervals: ['P1', 'A5'] }},
    d6: { id: 'd6', name: 'd6', value: { intervals: ['P1', 'd6'] }},
    m6: { id: 'm6', name: 'm6', value: { intervals: ['P1', 'm6'] }},
    M6: { id: 'M6', name: 'M6', value: { intervals: ['P1', 'M6'] }},
    d7: { id: 'd7', name: 'd7', value: { intervals: ['P1', 'd7'] }},
    m7: { id: 'm7', name: 'm7', value: { intervals: ['P1', 'm7'] }},
    M7: { id: 'M7', name: 'M7', value: { intervals: ['P1', 'M7'] }}
};

export const CHORD = {
    Maj:        { id: 'Maj',        name: 'Major Triad',            value: { intervals: ['P1', 'M3', 'P5'] }        },
    Maj6:       { id: 'Maj6',       name: 'Major 6th',              value: { intervals: ['P1', 'M3', 'P5', 'M6'] }  },
    Maj7:       { id: 'Maj7',       name: 'Major 7th',              value: { intervals: ['P1', 'M3', 'P5', 'M7'] }  },
    Min:        { id: 'Min',        name: 'Minor Triad',            value: { intervals: ['P1', 'm3', 'P5'] }        },
    Min6:       { id: 'Min6',       name: 'Minor 6th',              value: { intervals: ['P1', 'm3', 'P5', 'M6'] }  },
    Min7:       { id: 'Min7',       name: 'Minor 7th',              value: { intervals: ['P1', 'm3', 'P5', 'm7'] }  },
    MinMaj7:    { id: 'MinMaj7',    name: 'Minor-Major 7th',        value: { intervals: ['P1', 'm3', 'P5', 'M7'] }  },
    Dom7:       { id: 'Dom7',       name: 'Dominant 7th',           value: { intervals: ['P1', 'M3', 'P5', 'm7'] }  },
    // Dom7b9:     { id: 'Dom7b9',     name: 'Dom7 b9',                value: { intervals: ['P1', 'M3', 'P5', 'm7', 'flat9'] } },
    Aug:        { id: 'Aug',        name: 'Augmented Triad',        value: { intervals: ['P1', 'M3', 'A5'] }        },
    Aug7:       { id: 'Aug7',       name: 'Augmented 7th',          value: { intervals: ['P1', 'M3', 'A5', 'm7'] }  },
    AugM7:      { id: 'AugM7',      name: 'Augmented Major 7th',    value: { intervals: ['P1', 'M3', 'A5', 'M7'] }  },
    Dim:        { id: 'Dim',        name: 'Diminished Triad',       value: { intervals: ['P1', 'm3', 'd5'] }        },
    Dim7:       { id: 'Dim7',       name: 'Diminished 7th',         value: { intervals: ['P1', 'm3', 'd5', 'd7'] }  },
    HalfDim7:   { id: 'HalfDim7',   name: 'Half-Diminished 7th',    value: { intervals: ['P1', 'm3', 'd5', 'm7'] }  },
    Sus2:       { id: 'Sus2',       name: 'Suspended 2nd',          value: { intervals: ['P1', 'M2', 'P5'] }        },
    Sus4:       { id: 'Sus4',       name: 'Suspended 4th',          value: { intervals: ['P1', 'P4', 'P5'] }        }
};

export const SCALE = {
    Major:              { id: 'Major',              name: 'Major',              value: { intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7] }   },
    NatualMinor:        { id: 'NaturalMinor',       name: 'Natural Minor',      value: { intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7] }   },
    HarmonicMinor:      { id: 'HarmonicMinor',      name: 'Harmonic Minor',     value: { intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.M7] }   },
    MajorPentatonic:    { id: 'MajorPentatonic',    name: 'Major Pentatonic',   value: { intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6] } },
    MinorPentatonic:    { id: 'MinorPentatonic',    name: 'Minor Pentatonic',   value: { intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m7] } },
    Chromatic:          { id: 'Chromatic',          name: 'Chromatic',          value: { intervals: [INTERVAL.P1, INTERVAL.m2, INTERVAL.M2, INTERVAL.m3, INTERVAL.M3, INTERVAL.P4, INTERVAL.A4, INTERVAL.P5, INTERVAL.m6, INTERVAL.M6, INTERVAL.m7, INTERVAL.M7] }  }
};

export const MODE = {
    Ionian:         { id: 'Ionian',     name: 'Ionian',     value: { scale: 'Major', degree: 1 } },
    Dorian:         { id: 'Dorian',     name: 'Dorian',     value: { scale: 'Major', degree: 2 } },
    Phrygian:       { id: 'Phrygian',   name: 'Phrygian',   value: { scale: 'Major', degree: 3 } },
    Lydian:         { id: 'Lydian',     name: 'Lydian',     value: { scale: 'Major', degree: 4 } },
    Mixolydian:     { id: 'Mixolydian', name: 'Mixolydian', value: { scale: 'Major', degree: 5 } },
    Aeolian:        { id: 'Aeolian',    name: 'Aeolian',    value: { scale: 'Major', degree: 6 } },
    Locrian:        { id: 'Locrian',    name: 'Locrian',    value: { scale: 'Major', degree: 7 } }
};