export const NOTE = {
	C: { id: 'C', name: 'C', value: [0, 0] },
	'C#': { id: 'C#', name: 'C#', value: [1, 0] },
	Db: { id: 'Db', name: 'Db', value: [1, 1] },
	D: { id: 'D', name: 'D', value: [2, 1] },
	'D#': { id: 'D#', name: 'D#', value: [3, 1] },
	Eb: { id: 'Eb', name: 'Eb', value: [3, 2] },
	E: { id: 'E', name: 'E', value: [4, 2] },
	'E#': { id: 'E#', name: 'E#', value: [5, 2] },
	Fb: { id: 'Fb', name: 'Fb', value: [4, 3] },
	F: { id: 'F', name: 'F', value: [5, 3] },
	'F#': { id: 'F#', name: 'F#', value: [6, 3] },
	Gb: { id: 'Gb', name: 'Gb', value: [6, 4] },
	G: { id: 'G', name: 'G', value: [7, 4] },
	'G#': { id: 'G#', name: 'G#', value: [8, 4] },
	Ab: { id: 'Ab', name: 'Ab', value: [8, 5] },
	A: { id: 'A', name: 'A', value: [9, 5] },
	'A#': { id: 'A#', name: 'A#', value: [10, 5] },
	Bb: { id: 'Bb', name: 'Bb', value: [10, 6] },
	B: { id: 'B', name: 'B', value: [11, 6] },
	'B#': { id: 'B#', name: 'B#', value: [0, 6] },
	Cb: { id: 'Cb', name: 'Cb', value: [11, 0] }
};

export const NOTE_VALUES = Object.values(NOTE);

export const ACCIDENTAL = Object.freeze({
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

export const ACCIDENTAL_VALUES = Object.values(ACCIDENTAL);
