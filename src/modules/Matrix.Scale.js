import Preset from './Matrix.Scale.presets';
import * as Utils from './Utils';

const getNumerals = (scale) => {
  const numerals = [];
  for (let i = 0; i < scale.length; i++) {
    const i1 = i;
    const i3 = Utils.moduloSum(i, 2, scale.length);
    const i5 = Utils.moduloSum(i, 4, scale.length);
    const numeral = [scale[i1], scale[i3], scale[i5]];
    numerals.push(numeral);
  }
  return numerals;
};

export default {
  Preset,
  getNumerals
};
