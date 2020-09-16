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

export default {
	DEGREE_MAP,
	ACCIDENTAL,
	ACCIDENTAL_VALUES,
	getAccidentalString
};
