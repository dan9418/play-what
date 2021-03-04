
export const INTERVAL = {
	P1: {
		id: 'P1',
		name: 'Perfect Unison',
		value: [0, 0]
	},
	m2: {
		id: 'm2',
		name: 'Minor 2nd',
		value: [1, 1]
	},
	M2: {
		id: 'M2',
		name: 'Major 2nd',
		value: [2, 1]
	},
	A2: {
		id: 'A2',
		name: 'Augmented 2nd',
		value: [3, 1]
	},
	d3: {
		id: 'd3',
		name: 'Diminished 3rd',
		value: [2, 2]
	},
	m3: {
		id: 'm3',
		name: 'Minor 3rd',
		value: [3, 2]
	},
	M3: {
		id: 'M3',
		name: 'Major 3rd',
		value: [4, 2]
	},
	A3: {
		id: 'A3',
		name: 'Augmented 3rd',
		value: [5, 2]
	},
	d4: {
		id: 'd4',
		name: 'Diminished 4th',
		value: [4, 3]
	},
	P4: {
		id: 'P4',
		name: 'Perfect 4th',
		value: [5, 3]
	},
	A4: {
		id: 'A4',
		name: 'Augmented 4th',
		value: [6, 3]
	},
	d5: {
		id: 'd5',
		name: 'Diminished 5th',
		value: [6, 4]
	},
	P5: {
		id: 'P5',
		name: 'Perfect 5th',
		value: [7, 4]
	},
	A5: {
		id: 'A5',
		name: 'Augmented 5th',
		value: [8, 4]
	},
	d6: {
		id: 'd6',
		name: 'Diminished 6th',
		value: [7, 5]
	},
	m6: {
		id: 'm6',
		name: 'Minor 6th',
		value: [8, 5]
	},
	M6: {
		id: 'M6',
		name: 'Major 6th',
		value: [9, 5]
	},
	A6: {
		id: 'A6',
		name: 'Augmented 6th',
		value: [10, 5]
	},
	d7: {
		id: 'd7',
		name: 'Diminished 7th',
		value: [9, 6]
	},
	m7: {
		id: 'm7',
		name: 'Minor 7th',
		value: [10, 6]
	},
	M7: {
		id: 'M7',
		name: 'Major 7th',
		value: [11, 6]
	},
	P8: {
		id: 'P8',
		name: 'Octave',
		value: [12, 7]
	}
};

export const INTERVAL_VALUES = Object.values(INTERVAL);

export const CORE_INTERVALS = [
	[INTERVAL.P1],
	[INTERVAL.m2, INTERVAL.M2],
	[INTERVAL.m3, INTERVAL.M3],
	[INTERVAL.P4],
	[INTERVAL.P5],
	[INTERVAL.m6, INTERVAL.M6],
	[INTERVAL.m7, INTERVAL.M7]
];

export const INTERVAL_QUALITY = Object.freeze({
	dim: {
		id: 'dim',
		name: 'Diminished',
		symbol: 'd',
		down: null,
		up: 'min'
	},
	min: {
		id: 'min',
		name: 'Minor',
		symbol: 'm',
		down: 'dim',
		up: 'maj'
	},
	perfect: {
		id: 'perfect',
		name: 'Perfect',
		symbol: 'P',
		down: 'dim',
		up: 'aug'
	},
	maj: {
		id: 'maj',
		name: 'Major',
		symbol: 'M',
		down: 'min',
		up: 'aug'
	},
	aug: {
		id: 'aug',
		name: 'Augmented',
		symbol: 'A',
		down: 'maj',
		up: null
	}
});

export const INTERVAL_QUALITY_VALUES = Object.values(INTERVAL_QUALITY);

export const DEFAULT_INTERVAL_OPTIONS = {
	displayName: 'note'
}
