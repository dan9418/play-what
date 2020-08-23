import * as Vector from './Vector';
import * as Utils from './Utils';

import _Chord from './Matrix.Chord';
import _Mode from './Matrix.Mode';
import _Numeral from './Matrix.Numeral';
import _Scale from './Matrix.Scale';

export const Chord = _Chord;
export const Mode = _Mode;
export const Numeral = _Numeral;
export const Scale = _Scale;

export const areEqual = ({ list1, list2 }) => {
  if (!list1 || !list2) return false;
  if (list1.length !== list2.length) return false;
  for (let i = 0; i < list1.length; i++) {
    if (!Vector.areEqual(list1[i], list2[i])) { return false; }
  }
  return true;
};

export const findVectorWithPitch = ({ matrix, pitch, pitchClass = false }) => {
  const p = pitchClass ? Utils.modulo(pitch, Vector.max.p) : pitch;
  return matrix.find((n) => n.p === p) || null;
};

// export const from = ({ a, B }) => B.map((b) => Note.add({ x: a, y: b }));
