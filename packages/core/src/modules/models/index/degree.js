import Utils from "../../Utils";
import PodIndex from "./PodIndex";

const DEGREE = {
	C: {
		id: 'C',
		name: 'C',
		value: 0
	},
	D: {
		id: 'D',
		name: 'D',
		value: 1
	},
	E: {
		id: 'E',
		name: 'E',
		value: 2
	},
	F: {
		id: 'F',
		name: 'F',
		value: 3
	},
	G: {
		id: 'G',
		name: 'G',
		value: 4
	},
	A: {
		id: 'A',
		name: 'A',
		value: 5
	},
	B: {
		id: 'B',
		name: 'B',
		value: 6
	}
};

const DEGREE_VALUES = Object.values(DEGREE);

const DEGREE_COLOR_SCHEME = [
	'#E6194B',
	'#F58231',
	'#FFE119',
	'#3CB44B',
	'#4363D8',
	'#911DB4',
	'#F032E6'
];

class Degree extends PodIndex {
	static getColor(d) {
		return DEGREE_COLOR_SCHEME[d];
	}

	// common

	getName() {
		return this.getPreset().id;
	}

	getPreset() {
		return DEGREE_VALUES[Utils.modulo(this.value, 7)] || null;
	}

	getType() {
		return 'degree';
	}
}

Degree.preset = DEGREE;
Degree.presetValues = DEGREE_VALUES;
Degree.colorScheme = DEGREE_COLOR_SCHEME;

export default Degree;
