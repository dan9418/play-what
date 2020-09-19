const DEGREE = {
	A: {
		id: 'A',
		name: 'A',
		value: 0
	},
	B: {
		id: 'B',
		name: 'B',
		value: 1
	},
	C: {
		id: 'C',
		name: 'C',
		value: 2
	},
	D: {
		id: 'D',
		name: 'D',
		value: 3
	},
	E: {
		id: 'E',
		name: 'E',
		value: 4
	},
	F: {
		id: 'F',
		name: 'F',
		value: 5
	},
	G: {
		id: 'G',
		name: 'G',
		value: 6
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

export default {
	preset: DEGREE,
	colorScheme: DEGREE_COLOR_SCHEME,
	getColor: d => DEGREE_COLOR_SCHEME[d]
};
