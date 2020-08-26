import Preset from './Matrix.Scale.presets';
import * as Utils from './Utils';

const getNumerals = (scale) => {
  const numerals = [];
  const a = scale[0];
  for (let i = 0; i < scale.length; i++) {
    const i1 = i;
    const i3 = Utils.moduloSum(i, 2, scale.length);
    const i5 = Utils.moduloSum(i, 4, scale.length);
    const i7 = Utils.moduloSum(i, 6, scale.length);
    const numeral = [scale[i1], scale[i3], scale[i5], scale[i7]];
    numerals.push({ a, B: numeral });
  }
  return numerals;
};

const getMode = ({ scale, degree }) => {
  let mode = [...scale];
  mode = Utils.rotate(mode, degree);
  const a = mode[0];
  for (let i = 0; i < mode.length; i++) {
    const m = mode[i];
    console.log('in', m);
    m.p = Utils.moduloSum(m.p, 2, 12, 0, false);
    m.d = Utils.moduloSum(m.d, 2, 7, 0, false);
    console.log('out', m);
  }
  return mode;
};

const getAllModes = ({ scale }) => {
  const modes = [];
  for (let i = 0; i < scale.length; i++) {
    modes.push(getMode({ scale, degree: i }));
  }
  return scale.map((s, i) => ({
    a: s,
    B: modes[i]
  }));
};

export default {
  Preset,
  getNumerals,
  getMode,
  getAllModes
};
