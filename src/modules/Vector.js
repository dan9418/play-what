import * as Utils from './Utils';
import * as Color from './Color';

export const max = {
  p: 12,
  d: 7
};

export const areEqual = ({ interval1, interval2 }) => {
  if (!interval1 || !interval2) return false;
  return interval1.p === interval2.p && interval1.d === interval2.d;
};

export const add = ({ x, y }) => ({
  p: Utils.moduloSum(x.p, y.p, max.p),
  d: Utils.moduloSum(x.d, y.d, max.d)
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

export const addVector = ({ a, b }) => ({
  p: Utils.moduloSum(a.p, b.p, max.p),
  d: Utils.moduloSum(a.d, b.d, max.d)
});

export const addMatrix = ({ a, B }) => B.map((b) => addVector({ a, b }));

// export const transpose = ({ a, interval }) => Interval.add(a, interval);

export const colorBy = (props) => {
  const { type, reduced } = props;
  return (ctx) => {
    const { note } = ctx;

    if (!note) return null;

    let data = { ...note };
    if (reduced) {
      data = reduce(data);
    }

    switch (type) {
      // case 'binary':
      //  return data ? Color.Scheme.Binary.active : Color.Scheme.Binary.inacitve;
      case 'degree':
        return Color.Scheme.Degree[`d${data.d + 1}`];
      case 'pitchClass':
        return Color.Scheme.PitchClass[`pc${data.p + 1}`];
      default:
        return null;
    }
  };
};

export const textBy = (props) => {
  const { type } = props;
  return (ctx) => {
    const { note } = ctx;
    switch (type) {
      case 'degree':
        return note ? note.d + 1 : '';
      case 'pitchClass':
        return note ? note.p : '';
      default:
        return '';
    }
  };
};
