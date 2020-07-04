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

export const getDegree = degree => ({ d: Utils.modulo(degree, DEGREE_MAPPING.length), p: getDegreeMapping(degree).pitch });

export const getAllDegrees = () => DEGREE_MAPPING.map((m, i) => ({ d: i, p: m.pitch }));

export const getNoteName = (note, max = MAX_VECTOR) => {
    const reduced = moduloVectors(note, max);
    const degree = getDegreeMapping(reduced.d) || { name: '?', pitch: 0 };
    return degree.name + getAccidentalString(note.p - degree.pitch);
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

export const findIndexOfNoteWithPitch = (notes, pitch, octaveReduce = false) => {
    const p = octaveReduce ? Utils.modulo(pitch, MAX_VECTOR.p) : n.p;
    return notes.findIndex(n => n.p === p);
}

export const findNoteIndex = (keyCenter, intervals, pitch, octaveReduce = false) => {
    const p = octaveReduce ? Utils.modulo(pitch, MAX_VECTOR.p) : n.p;
    const notes = addVectorsBatch(keyCenter, intervals);
    return notes.findIndex(n => n.p === p);
}

export const CUSTOM_PRESET = {
    id: 'custom',
    name: 'Custom',
    intervals: []
};

export const areIntervalEqual = (a, b) => {
    if (!a || !b) return false;
    return a.p === b.p && a.d === b.d;
}

export const areIntervalsEqual = (a, b) => {
    if (!a || !b) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (!areIntervalEqual(a[i], b[i]))
            return false;
    }
    return true;
}

export const findPreset = intervals => {
    const preset = Presets.CONCEPT_PRESET_VALUES.find(p => areIntervalsEqual(intervals, p.intervals));
    return preset ? preset : { ...CUSTOM_PRESET, intervals: intervals }
}

export const getFrequency = p => {
    const a = p + 3;
    const b = a / 12;
    const c = Math.pow(2, b);
    const f = 440 * c;
    return f;
}

export const getFrequencies = pitches => {
    return pitches.map(p => getFrequency(p.p));
}