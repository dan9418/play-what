export const INTERVAL = {
	P1: {
		id: 'P1',
		name: 'Perfect Unison',
		value: [
			0,
			0
		]
	},
	m2: {
		id: 'm2',
		name: 'Minor 2nd',
		value: [
			1,
			1
		]
	},
	M2: {
		id: 'M2',
		name: 'Major 2nd',
		value: [
			2,
			1
		]
	},
	A2: {
		id: 'A2',
		name: 'Augmented 2nd',
		value: [
			3,
			1
		]
	},
	d3: {
		id: 'd3',
		name: 'Diminished 3rd',
		value: [
			2,
			2
		]
	},
	m3: {
		id: 'm3',
		name: 'Minor 3rd',
		value: [
			3,
			2
		]
	},
	M3: {
		id: 'M3',
		name: 'Major 3rd',
		value: [
			4,
			2
		]
	},
	A3: {
		id: 'A3',
		name: 'Augmented 3rd',
		value: [
			5,
			2
		]
	},
	d4: {
		id: 'd4',
		name: 'Diminished 4th',
		value: [
			4,
			3
		]
	},
	P4: {
		id: 'P4',
		name: 'Perfect 4th',
		value: [
			5,
			3
		]
	},
	A4: {
		id: 'A4',
		name: 'Augmented 4th',
		value: [
			6,
			3
		]
	},
	d5: {
		id: 'd5',
		name: 'Diminished 5th',
		value: [
			6,
			4
		]
	},
	P5: {
		id: 'P5',
		name: 'Perfect 5th',
		value: [
			7,
			4
		]
	},
	A5: {
		id: 'A5',
		name: 'Augmented 5th',
		value: [
			8,
			5
		]
	},
	d6: {
		id: 'd6',
		name: 'Diminished 6th',
		value: [
			7,
			5
		]
	},
	m6: {
		id: 'm6',
		name: 'Minor 6th',
		value: [
			8,
			5
		]
	},
	M6: {
		id: 'M6',
		name: 'Major 6th',
		value: [
			9,
			5
		]
	},
	A6: {
		id: 'A6',
		name: 'Augmented 6th',
		value: [
			10,
			5
		]
	},
	d7: {
		id: 'd7',
		name: 'Diminished 7th',
		value: [
			9,
			6
		]
	},
	m7: {
		id: 'm7',
		name: 'Minor 7th',
		value: [
			10,
			6
		]
	},
	M7: {
		id: 'M7',
		name: 'Major 7th',
		value: [
			11,
			6
		]
	},
	P8: {
		id: 'P8',
		name: 'Octave',
		value: [
			12,
			7
		]
	}
};

export const NOTE = {
	NA: { id: 'NA', name: 'N/A', value: [0, -1] },
	Ab: { id: 'Ab', name: 'Ab', value: [8, 0] },
	A: { id: 'A', name: 'A', value: [9, 0] },
	'A#': { id: 'A#', name: 'A#', value: [10, 0] },
	Bb: { id: 'Bb', name: 'Bb', value: [10, 1] },
	B: { id: 'B', name: 'B', value: [11, 1] },
	'B#': { id: 'B#', name: 'B#', value: [0, 1] },
	Cb: { id: 'Cb', name: 'Cb', value: [11, 2] },
	C: { id: 'C', name: 'C', value: [0, 2] },
	'C#': { id: 'C#', name: 'C#', value: [1, 2] },
	Db: { id: 'Db', name: 'Db', value: [1, 3] },
	D: { id: 'D', name: 'D', value: [2, 3] },
	'D#': { id: 'D#', name: 'D#', value: [3, 3] },
	Eb: { id: 'Eb', name: 'Eb', value: [3, 4] },
	E: { id: 'E', name: 'E', value: [4, 4] },
	'E#': { id: 'E#', name: 'E#', value: [5, 4] },
	Fb: { id: 'Fb', name: 'Fb', value: [4, 5] },
	F: { id: 'F', name: 'F', value: [5, 5] },
	'F#': { id: 'F#', name: 'F#', value: [6, 5] },
	Gb: { id: 'Gb', name: 'Gb', value: [6, 6] },
	G: { id: 'G', name: 'G', value: [7, 6] },
	'G#': { id: 'G#', name: 'G#', value: [8, 6] }
};

export default {
	interval: INTERVAL,
	note: NOTE
}
