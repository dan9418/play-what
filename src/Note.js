export const getNoteName = (note) => {
    if (note.d < 0) {
        return '';
    }
    const reduced = moduloVector(note);
    const degree = getDegreeMapping(reduced.d) || { name: '?', pitch: 0 };
    return degree.name + getAccidentalString(note.p - degree.pitch);
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