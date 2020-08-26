import * as Color from 'color';

export const Preset = {
  white: '#000000',
  black: '#FFFFFF',
  d1: '#E6194B',
  d2: '#F58231',
  d3: '#FFE119',
  d4: '#3CB44B',
  d5: '#4363D8',
  d6: '#911DB4',
  d7: '#F032E6',
  pc0: '#ED1C24',
  pc1: '#F1592A',
  pc2: '#F8981E',
  pc3: '#FCB040',
  pc4: '#FFF200',
  pc5: '#8CC63F',
  pc6: '#056839',
  pc7: '#13A89E',
  pc8: '#A898C8',
  pc9: '#662D91',
  pc10: '#92278F',
  pc11: '#C2305E'
};

export const Scheme = {
  Binary: {
    active: null,
    inacitve: Preset.Black
  },
  Degree: {
    d0: null,
    d1: Preset.d1,
    d2: Preset.d2,
    d3: Preset.d3,
    d4: Preset.d4,
    d5: Preset.d5,
    d6: Preset.d6,
    d7: Preset.d7
  },
  PitchClass: {
    pc0: Preset.pc0,
    pc1: Preset.pc1,
    pc2: Preset.pc2,
    pc3: Preset.pc3,
    pc4: Preset.pc4,
    pc5: Preset.pc5,
    pc6: Preset.pc6,
    pc7: Preset.pc7,
    pc8: Preset.pc8,
    pc9: Preset.pc9,
    pc10: Preset.pc10,
    pc11: Preset.pc11
  },
  Octave: {
    min: Preset.White,
    max: Preset.Black
  },
  Frequency: {
    min: Preset.White,
    max: Preset.Black
  },
  NoteIndex: {
    min: Preset.White,
    max: Preset.Black
  }
};

export const getFgColor = (bg) => {
  if (!bg) return Preset.black;
  return Color(bg).isDark() ? Preset.black : Preset.white;
};

/* export const getColorFromContinuousScheme = (value, min, max, scheme) => {
  let percent = (value - min) / (max - min);
  percent = percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

  const initialColor = Color(scheme.min);
  const finalColor = Color(scheme.max);
  const background = initialColor.mix(finalColor, percent);

  return background;
}; */
