// Degrees

const DEGREE_MAP = [
	{
		name: 'A',
		value: [0, 9]
	},
	{
		name: 'B',
		value: [1, 11]
	},
	{
		name: 'C',
		value: [2, 0]
	},
	{
		name: 'D',
		value: [3, 2]
	},
	{
		name: 'E',
		value: [4, 4]
	},
	{
		name: 'F',
		value: [5, 5]
	},
	{
		name: 'G',
		value: [6, 7]
	}
];

// Accidentals

const ACCIDENTAL = Object.freeze({
	Flat: {
		id: 'Flat',
		name: 'b',
		offset: -1
	},
	Natural: {
		id: 'Natural',
		name: '♮',
		offset: 0
	},
	Sharp: {
		id: 'Sharp',
		name: '#',
		offset: 1
	}
});

const ACCIDENTAL_VALUES = Object.freeze(Object.values(ACCIDENTAL));

const getAccidentalString = (offset) => {
	switch (offset) {
	case 0:
		return '';
	case 1:
		return '#';
	case 2:
		return 'x';
	case -1:
		return 'b';
	case -2:
		return 'bb';
	default:
		return (offset < 0) ? `(${-offset}b)` : `(${offset}#)`;
	}
};

const DEGREE_COLOR_SCHEME = [
	'#E6194B',
	'#F58231',
	'#FFE119',
	'#3CB44B',
	'#4363D8',
	'#911DB4',
	'#F032E6'
];

const degree = {
	colorScheme: DEGREE_COLOR_SCHEME,
	getColor: d => DEGREE_COLOR_SCHEME[d]
};

const PITCH_CLASS_COLOR_SCHEME = [
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
]

const pitchClass = {
	colorScheme: PITCH_CLASS_COLOR_SCHEME,
	getColor: p => PITCH_CLASS_COLOR_SCHEME[p]
}

export default {
	degree,
	pitchClass,
	DEGREE_MAP,
	ACCIDENTAL,
	ACCIDENTAL_VALUES,
	getAccidentalString
};
