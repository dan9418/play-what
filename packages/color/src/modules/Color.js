import color from 'color';

const preset = {
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

const Scheme = {
	Binary: {
		active: null,
		inacitve: preset.Black
	},
	Degree: {
		d0: null,
		d1: preset.d1,
		d2: preset.d2,
		d3: preset.d3,
		d4: preset.d4,
		d5: preset.d5,
		d6: preset.d6,
		d7: preset.d7
	},
	PitchClass: {
		pc0: preset.pc0,
		pc1: preset.pc1,
		pc2: preset.pc2,
		pc3: preset.pc3,
		pc4: preset.pc4,
		pc5: preset.pc5,
		pc6: preset.pc6,
		pc7: preset.pc7,
		pc8: preset.pc8,
		pc9: preset.pc9,
		pc10: preset.pc10,
		pc11: preset.pc11
	},
	Octave: {
		min: preset.White,
		max: preset.Black
	},
	Frequency: {
		min: preset.White,
		max: preset.Black
	},
	NoteIndex: {
		min: preset.White,
		max: preset.Black
	}
};

const getFgColor = (bg) => {
	if (!bg) return preset.black;
	return color(bg).isDark() ? preset.black : preset.white;
};

/* const getColorFromContinuousScheme = (value, min, max, scheme) => {
  let percent = (value - min) / (max - min);
  percent = percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

  const initialColor = color(scheme.min);
  const finalColor = color(scheme.max);
  const background = initialColor.mix(finalColor, percent);

  return background;
}; */

export default {
	preset,
	Scheme,
	getFgColor
};
