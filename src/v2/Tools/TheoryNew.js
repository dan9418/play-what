const TheoryNew = {
    MAX_VECTOR: { p: 12, d: 7 },
    DEGREE_MAPPING: [
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
    ],
    KEY_CENTERS: [
        {
            id: 'A',
            name: 'A',
            p: 9,
            d: 0
        },
        {
            id: 'B',
            name: 'B',
            p: 11,
            d: 1
        },
        {
            id: 'C',
            name: 'C',
            p: 0,
            d: 2
        },
        {
            id: 'D',
            name: 'D',
            p: 2,
            d: 3
        },
        {
            id: 'E',
            name: 'E',
            p: 4,
            d: 4
        },
        {
            id: 'F',
            name: 'F',
            p: 5,
            d: 5
        },
        {
            id: 'G',
            name: 'G',
            p: 7,
            d: 6
        }
    ],
    INTERVALS: [
        {
            id: 'P1',
            name: 'Perfect Unison',
            d: 0,
            p: 0
        },
        {
            id: 'm2',
            name: 'Minor 2nd',
            d: 1,
            p: 1
        },
        {
            id: 'M2',
            name: 'Major 2nd',
            d: 1,
            p: 2
        },
        {
            id: 'A2',
            name: 'Augmented 2nd',
            d: 1,
            p: 3
        },
        {
            id: 'd3',
            name: 'Diminished 3rd',
            d: 2,
            p: 2
        },
        {
            id: 'm3',
            name: 'Minor 3rd',
            d: 2,
            p: 3
        },
        {
            id: 'M3',
            name: 'Major 3rd',
            d: 2,
            p: 4
        },
        {
            id: 'A3',
            name: 'Augmented 3rd',
            d: 2,
            p: 5
        },
        {
            id: 'd4',
            name: 'Diminished 4th',
            d: 3,
            p: 4
        },
        {
            id: 'P4',
            name: 'Perfect 4th',
            d: 3,
            p: 5
        },
        {
            id: 'A4',
            name: 'Augmented 4th',
            d: 3,
            p: 6
        },
        {
            id: 'd5',
            name: 'Diminished 5th',
            d: 4,
            p: 6
        },
        {
            id: 'P5',
            name: 'Perfect 5th',
            d: 4,
            p: 7
        },
        {
            id: 'A5',
            name: 'Augmented 5th',
            d: 4,
            p: 8
        },
        {
            id: 'd6',
            name: 'Diminished 6th',
            d: 5,
            p: 7
        },
        {
            id: 'm6',
            name: 'Minor 6th',
            d: 5,
            p: 8
        },
        {
            id: 'M6',
            name: 'Major 6th',
            d: 5,
            p: 9
        },
        {
            id: 'A6',
            name: 'Augmented 6th',
            d: 5,
            p: 10
        },
        {
            id: 'd7',
            name: 'Diminished 7th',
            d: 6,
            p: 9
        },
        {
            id: 'm7',
            name: 'Minor 7th',
            d: 6,
            p: 10
        },
        {
            id: 'M7',
            name: 'Major 7th',
            d: 6,
            p: 11
        },
        {
            id: 'P8',
            name: 'Octave',
            d: 7,
            p: 12
        }
    ],
    getAccidentalString: (offset) => {
        switch (offset) {
            case 0:
                return ''
            case 1:
                return '#';
            case 2:
                return 'x';
            case -1:
                return 'b';
            case -2:
                return 'bb';
            default:
                return (offset < 0) ? -offset + 'b' : offset + '#';
        }
    },
    addVectors: (origin, vector, max) => {
        return {
            p: (origin.p + vector.p) % max.p,
            d: (origin.d + vector.d) % max.d
        };
    }
}

export default TheoryNew;