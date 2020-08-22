import * as Utils from './Utils';
import * as Color from './Color';

export const max = {
  p: 12,
  d: 7,
};

export const areEqual = ({ interval1, interval2 }) => {
  if (!interval1 || !interval2) return false;
  return interval1.p === interval2.p && interval1.d === interval2.d;
};

export const add = ({ x, y }) => ({
  p: Utils.moduloSum(x.p, y.p, max.p),
  d: Utils.moduloSum(x.d, y.d, max.d),
});

export const reduce = ({ p, d }) => ({ p: Utils.modulo(p, max.p), d });

export const findNoteWithPitch = (notes, pitch, octaveReduce = true) => {
  const p = octaveReduce ? Utils.modulo(pitch, max.p) : pitch;
  return notes.find((n) => n.p === p) || null;
};

export const findIndexOfNoteWithPitch = (notes, pitch, octaveReduce = true) => {
  const p = octaveReduce ? Utils.modulo(pitch, max.p) : pitch;
  return notes.findIndex((n) => n.p === p);
};

/*
export const findNoteIndex = (keyCenter, intervals, pitch, octaveReduce = true) => {
    const p = octaveReduce ? Utils.modulo(pitch, max.p) : pitch;
    const notes = addVectorsBatch(keyCenter, intervals);
    return notes.findIndex(n => n.p === p);
} */

export const label = ({ type, notes }) => {
  switch (type) {
    case 'pitchClass':
      return (ctx) => {
        if (!notes) return Utils.modulo(ctx.noteIndex, 12);
        const i = findIndexOfNoteWithPitch(notes, ctx.noteIndex);
        return i >= 0 ? notes[i].p : '';
      };
    case 'degree':
      return (ctx) => {
        if (!notes) return '';
        const i = findIndexOfNoteWithPitch(notes, ctx.noteIndex);
        return i >= 0 ? notes[i].d + 1 : '';
      };
    default:
      return '';
  }
};

export const style = ({ type, notes }) => {
  switch (type) {
    case 'pitchClass':
      return (ctx) => {
        if (!notes) {
          const pc = Utils.modulo(ctx.noteIndex, 12);
          const pcId = `pc${pc}`;
          return Color.getStylesFromColor(Color.scheme.pitchClass[pcId]);
        }
        const i = findIndexOfNoteWithPitch(notes, ctx.noteIndex);
        if (i < 0) return {};
        const id = `pc${notes[i].p}`;
        return Color.getStylesFromColor(Color.scheme.pitchClass[id]);
      };
    case 'degree':
      return (ctx) => {
        if (!notes) return {};
        const i = findIndexOfNoteWithPitch(notes, ctx.noteIndex);
        if (i < 0) return {};
        const id = `d${notes[i].d + 1}`;
        return Color.getStylesFromColor(Color.scheme.degree[id]);
      };
    default:
      return '';
  }
};

/*
export const getNoteName = (note) => {
    if (note.d < 0) {
        return '';
    }
    const reduced = moduloVector(note);
    const degree = getDegreeMapping(reduced.d) || { name: '?', pitch: 0 };
    return degree.name + getAccidentalString(note.p - degree.pitch);
} */
