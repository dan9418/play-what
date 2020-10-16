const ACCIDENTAL = Object.freeze({
	flat: {
		id: 'flat',
		name: 'Flat',
		symbol: 'b',
		value: -1
	},
	natural: {
		id: 'natural',
		name: 'Natural',
		symbol: '♮',
		value: 0
	},
	sharp: {
		id: 'sharp',
		name: 'Sharp',
		symbol: '#',
		value: 1
	}
});

const ACCIDENTAL_VALUES = Object.freeze(Object.values(ACCIDENTAL));

const getName = ({ a }) => {
	if (isNaN(a) || !a) return '';
	if (a > 0) return ACCIDENTAL.sharp.symbol.repeat(a);
	return ACCIDENTAL.flat.symbol.repeat(-a);
};

export default {
	preset: ACCIDENTAL,
	presetValues: ACCIDENTAL_VALUES,
	getName
}
