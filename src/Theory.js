import { DEGREE_MAPPING, MAX_VECTOR } from "./Constants";
import Utils from './Utils';
import * as Presets from "./Presets";

export const getAccidentalString = (offset) => {
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
};

export const addVectors = (a, b, max) => ({
    p: Utils.moduloSum(a.p, b.p, max.p),
    d: Utils.moduloSum(a.d, b.d, max.d)
});

export const addVectorsBatch = (a, vectors, max = MAX_VECTOR) => vectors.map(v => addVectors(a, v, max));

export const moduloVectors = (a, b, max = MAX_VECTOR) => ({
    p: Utils.modulo(a.p, b.p),
    d: Utils.modulo(a.d, b.d)
});

export const getDegreeMapping = degree => DEGREE_MAPPING[Utils.modulo(degree, DEGREE_MAPPING.length)];

export const getAllDegrees = () => DEGREE_MAPPING.map((m, i) => ({ d: i, p: m.p }));

export const getNoteName = (note, max = MAX_VECTOR) => {
    const reduced = moduloVectors(note, max);
    const degree = getDegreeMapping(reduced.d);
    return degree.name + getAccidentalString(note.p - degree.p);
}

export const getIntervalName = (interval, max = MAX_VECTOR) => {
    const reduced = moduloVectors(interval, max);
    const preset = Presets.INTERVALS_VALUES.find(i => i.p === reduced.p && i.d === reduced.d);
    return preset ? preset.id : '?';
}

export const octaveReduce = note => ({ p: Utils.modulo(note.p, MAX_VECTOR.p), d: note.d });

export const findNoteWithPitch = (notes, pitch, octaveReduce = false) => {
    const p = octaveReduce ? Utils.modulo(pitch, MAX_VECTOR.p) : n.p;
    return notes.find(n => n.p === p) || null;
}