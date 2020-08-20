import * as Utils from './Utils';
import { MAX_VECTOR } from './Interval';
import { SCHEMES } from './todo/Color'

export const getNoteName = (note) => {
    if (note.d < 0) {
        return '';
    }
    const reduced = moduloVector(note);
    const degree = getDegreeMapping(reduced.d) || { name: '?', pitch: 0 };
    return degree.name + getAccidentalString(note.p - degree.pitch);
}

export const octaveReduce = note => ({ p: Utils.modulo(note.p, MAX_VECTOR.p), d: note.d });


export const findNoteWithPitch = (notes, pitch, octaveReduce = true) => {
    const p = octaveReduce ? Utils.modulo(pitch, MAX_VECTOR.p) : pitch;
    return notes.find(n => n.p === p) || null;
}

export const findIndexOfNoteWithPitch = (notes, pitch, octaveReduce = true) => {
    const p = octaveReduce ? Utils.modulo(pitch, MAX_VECTOR.p) : pitch;
    return notes.findIndex(n => n.p === p);
}

export const findNoteIndex = (keyCenter, intervals, pitch, octaveReduce = true) => {
    const p = octaveReduce ? Utils.modulo(pitch, MAX_VECTOR.p) : pitch;
    const notes = addVectorsBatch(keyCenter, intervals);
    return notes.findIndex(n => n.p === p);
}

export const label = ({ type, notes }) => {
    switch (type) {
        case 'degree':
            return {
                callback: ctx => {
                    const i = findIndexOfNoteWithPitch(notes, ctx.noteIndex);
                    return i >= 0 ? notes[i].d + 1 : '';
                }
            };
        default:
            return '';
    }
}

export const style = ({ type, notes }) => {
    switch (type) {
        case 'degree':
            return {
                callback: ctx => {
                    const i = findIndexOfNoteWithPitch(notes, ctx.noteIndex);
                    if (i < 0) return {};
                    const id = 'd' + (notes[i].d + 1);
                    return {
                        backgroundColor: SCHEMES.degree[id]
                    };
                }
            };
        default:
            return '';
    }
}