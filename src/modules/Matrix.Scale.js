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
  const newMode = mode.map((m) => {
    // console.log(m.p, Utils.moduloSum(m.p, 2, 12, 0, false));
    return {
      d: Utils.moduloSum(m.d, a.d, 7, 0, true),
      p: Utils.moduloSum(m.p, a.p, 12, 0, true)
    };
  });
  console.log(mode, newMode);

  return newMode;
  // m.p = Utils.moduloSum(m.p, 2, 12, 0, false);
};

const getAllModes = ({ scale, keyCenter }) => {
  const modes = [];
  for (let i = 1; i <= scale.length; i++) {
    modes.push(getMode({ scale, degree: i }));
  }
  return modes.map((m, i) => ({
    a: keyCenter,
    B: m
  }));
};

export default {
  Preset,
  getNumerals,
  getMode,
  getAllModes
};
