import PodIndex from "./PodIndex";

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

const ACCIDENTAL_VALUES = Object.values(ACCIDENTAL);

class Accidental extends PodIndex {
	static getColor(p) {
		return PITCH_COLOR_SCHEME[p];
	}

	getName()  {
		const a = this.value;
		if (isNaN(a) || !a) return '';
		if (a > 0) return ACCIDENTAL.sharp.symbol.repeat(a);
		return ACCIDENTAL.flat.symbol.repeat(-a);
	};

	getType() {
		return 'pitch';
	}
}

Accidental.preset = ACCIDENTAL;
Accidental.presetValues = ACCIDENTAL_VALUES;

export default Accidental;
