export const DEGREE_COLOR_SCHEME = [
	'#E6194B',
	'#F58231',
	'#FFE119',
	'#3CB44B',
	'#4363D8',
	'#911DB4',
	'#F032E6'
];

export const PITCH_COLOR_SCHEME = [
	'#ED1C24',
	'#F1592A',
	'#F8981E',
	'#FCB040',
	'#FFF200',
	'#8CC63F',
	'#056839',
	'#13A89E',
	'#A898C8',
	'#662D91',
	'#92278F',
	'#C2305E'
];

export const COLOR_SCHEME = {
	degree: {
		id: 'degree',
		name: 'Degree',
		value: pod => pod ? DEGREE_COLOR_SCHEME[pod[1]] : null
	},
	pitch: {
		id: 'pitch',
		name: 'Pitch',
		value: pod => pod ? PITCH_COLOR_SCHEME[pod[0]] : null
	}
};

export const COLOR_SCHEME_VALUES = Object.values(COLOR_SCHEME);
