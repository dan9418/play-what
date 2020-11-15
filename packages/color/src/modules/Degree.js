const DEGREE_COLOR_SCHEME = [
	'#E6194B',
	'#F58231',
	'#FFE119',
	'#3CB44B',
	'#4363D8',
	'#911DB4',
	'#F032E6'
];

const getColor = (d) => {
	return DEGREE_COLOR_SCHEME[d];
}

export default {
	DEGREE_COLOR_SCHEME,
	getColor
};
