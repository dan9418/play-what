import Vector from '../Vector/Vector';
import Utils from '../Utils';

import Chord from './Matrix.Chord';
import Mode from './Matrix.Mode';
import Numeral from './Matrix.Numeral';
import Scale from './Matrix.Scale';

const isValid = (matrix) => {
  return matrix !== null && Array.isArray(matrix) && !matrix.find((v) => !Vector.isValid(v));
};

const areEqual = ({ list1, list2 }) => {
  if (!list1 || !list2) return false;
  if (list1.length !== list2.length) return false;
  for (let i = 0; i < list1.length; i++) {
    if (!Vector.areEqual(list1[i], list2[i])) { return false; }
  }
  return true;
};

const findVectorWithPitch = ({ matrix, pitch, pitchClass = false }) => {
  const p = pitchClass ? Utils.modulo(pitch, Vector.max.p) : pitch;
  const index = matrix.findIndex((n) => n.p === p);
  return index > -1 ? [matrix[index], index] : [null, index];
};

export default {
  Chord,
  Scale,
  Mode,
  Numeral,
  isValid,
  areEqual,
  findVectorWithPitch
};
