import * as Utils from './Utils';
import * as Interval from './Interval';

export const Presets = {
    NA: { id: 'NA', name: 'N/A', a: { p: 0, d: -1 } },
    Ab: { id: 'Ab', name: 'Ab', a: { p: 8, d: 0 } },
    A: { id: 'A', name: 'A', a: { p: 9, d: 0 } },
    As: { id: 'As', name: 'A#', a: { p: 10, d: 0 } },
    Bb: { id: 'Bb', name: 'Bb', a: { p: 10, d: 1 } },
    B: { id: 'B', name: 'B', a: { p: 11, d: 1 } },
    Bs: { id: 'Bs', name: 'B#', a: { p: 0, d: 1 } },
    Cb: { id: 'Cb', name: 'Cb', a: { p: 11, d: 2 } },
    C: { id: 'C', name: 'C', a: { p: 0, d: 2 } },
    Cs: { id: 'Cs', name: 'C#', a: { p: 1, d: 2 } },
    Db: { id: 'Db', name: 'Db', a: { p: 1, d: 3 } },
    D: { id: 'D', name: 'D', a: { p: 2, d: 3 } },
    Ds: { id: 'Ds', name: 'D#', a: { p: 3, d: 3 } },
    Eb: { id: 'Eb', name: 'Eb', a: { p: 3, d: 4 } },
    E: { id: 'E', name: 'E', a: { p: 4, d: 4 } },
    Es: { id: 'Es', name: 'E#', a: { p: 5, d: 4 } },
    Fb: { id: 'Fb', name: 'Fb', a: { p: 4, d: 5 } },
    F: { id: 'F', name: 'F', a: { p: 5, d: 5 } },
    Fs: { id: 'Fs', name: 'F#', a: { p: 6, d: 5 } },
    Gb: { id: 'Gb', name: 'Gb', a: { p: 6, d: 6 } },
    G: { id: 'G', name: 'G', a: { p: 7, d: 6 } },
    Gs: { id: 'Gs', name: 'G#', a: { p: 8, d: 6 } }
};

/*export const parseString = keyString => {
    if (typeof keyString !== 'string' || !keyString.length) {
        throw ('Bad keystring args')
    }
    const [tonicStr, accidentalStr] = Utils.splitAt(keyString, 1);

    const degreeIndex = DEGREE_MAPPING.findIndex(d => d.name === tonicStr);

    const accidental = ACCIDENTAL_VALUES.find(a => a.name === accidentalStr) || ACCIDENTAL.Natural;

    return {
        id: keyString,
        name: keyString,
        p: DEGREE_MAPPING[degreeIndex].pitch + accidental.offset,
        d: degreeIndex
    };
};*/

export const transpose = ({ a, interval }) => {
    return Interval.add(a, interval);
}

export const from = ({ preset }) => {
    if (!preset) throw ('only preset supported')
    return Presets[preset].a;
}
