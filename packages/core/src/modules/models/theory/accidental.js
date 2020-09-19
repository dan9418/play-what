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
	preset: ACCIDENTAL,
	getAccidentalString
}
