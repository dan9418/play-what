const DEGREE = [
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
