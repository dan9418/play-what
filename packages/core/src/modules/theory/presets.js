export const DEGREE = {
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

export const DEGREE_VALUES = Object.values(DEGREE);

export const PITCH = {
	middleC: {
		id: 'middleC',
		name: 'Middle C',
		value: 0
	},
	midi: {
		id: 'midi',
		name: 'MIDI',
		value: 60
	}
};

export const PITCH_VALUES = Object.values(PITCH);

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

export const INTERVAL = {
	P1: {
		id: 'P1',
		name: 'Perfect Unison',
		value: [0, 0]
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

export const INTERVAL_VALUES = Object.values(INTERVAL);

export const CHORD = {
	Maj: { id: 'Maj', name: 'Major Triad', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value] },
	Maj6: { id: 'Maj6', name: 'Major 6th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M6.value] },
	Maj7: { id: 'Maj7', name: 'Major 7th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M7.value] },
	Min: { id: 'Min', name: 'Minor Triad', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value] },
	Min6: { id: 'Min6', name: 'Minor 6th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value, INTERVAL.M6.value] },
	Min7: { id: 'Min7', name: 'Minor 7th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value, INTERVAL.m7.value] },
	MinMaj7: { id: 'MinMaj7', name: 'Minor-Major 7th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P5.value, INTERVAL.M7.value] },
	Dom7: { id: 'Dom7', name: 'Dominant 7th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.m7.value] },
	Dom7b9: { id: 'Dom7b9', name: 'Dominant 7th (b9)', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.m7.value, INTERVAL.m2.value] },
	Aug: { id: 'Aug', name: 'Augmented Triad', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.A5.value] },
	Aug7: { id: 'Aug7', name: 'Augmented 7th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.A5.value, INTERVAL.m7.value] },
	AugM7: { id: 'AugM7', name: 'Augmented Major 7th', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.A5.value, INTERVAL.M7.value] },
	Dim: { id: 'Dim', name: 'Diminished Triad', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.d5.value] },
	Dim7: { id: 'Dim7', name: 'Diminished 7th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.d5.value, INTERVAL.d7.value] },
	HalfDim7: { id: 'HalfDim7', name: 'Half-Diminished 7th', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.d5.value, INTERVAL.m7.value] },
	Sus2: { id: 'Sus2', name: 'Suspended 2nd', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.P5.value] },
	Sus4: { id: 'Sus4', name: 'Suspended 4th', value: [INTERVAL.P1.value, INTERVAL.P4.value, INTERVAL.P5.value] }
};

export const CHORD_VALUES = Object.values(CHORD);

export const SCALE = {
	Major: { id: 'Major', name: 'Major', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.M7.value] },
	NaturalMinor: { id: 'NaturalMinor', name: 'Natural Minor', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
	HarmonicMinor: { id: 'HarmonicMinor', name: 'Harmonic Minor', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.M7.value] },
	MajorPentatonic: { id: 'MajorPentatonic', name: 'Major Pentatonic', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M6.value] },
	MinorPentatonic: { id: 'MinorPentatonic', name: 'Minor Pentatonic', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m7.value] },
	Chromatic: { id: 'Chromatic', name: 'Chromatic', value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.A4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.M6.value, INTERVAL.m7.value, INTERVAL.M7.value] }
};

export const SCALE_VALUES = Object.values(SCALE);

export const PRESET_TYPES = [
	{
		id: 'note',
		name: 'Note',
		podType: 'note',
		isList: false,
		presets: NOTE_VALUES
	},
	{
		id: 'interval',
		name: 'Interval',
		podType: 'interval',
		isList: false,
		presets: INTERVAL_VALUES
	},
	{
		id: 'chord',
		name: 'Chord',
		podType: 'interval',
		isList: false,
		presets: CHORD_VALUES
	},
	{
		id: 'scale',
		name: 'Scale',
		podType: 'interval',
		isList: false,
		presets: SCALE_VALUES
	}
];

export const LIST_PRESETS = [
	{
		id: 'chord',
		name: 'Chord',
		podType: 'interval',
		isList: false,
		presets: CHORD_VALUES
	},
	{
		id: 'scale',
		name: 'Scale',
		podType: 'interval',
		isList: false,
		presets: SCALE_VALUES
	}
];

export const MODE = {
	Ionian: { id: 'Ionian', name: 'Ionian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.M7.value] },
	Dorian: { id: 'Dorian', name: 'Dorian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.m7.value] },
	Phrygian: { id: 'Phrygian', name: 'Phrygian', value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
	Lydian: { id: 'Lydian', name: 'Lydian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.A4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.M7.value] },
	Mixolydian: { id: 'Mixolydian', name: 'Mixolydian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.m7.value] },
	Aeolian: { id: 'Aeolian', name: 'Aeolian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
	Locrian: { id: 'Locrian', name: 'Locrian', value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.d5.value, INTERVAL.m6.value, INTERVAL.m7.value] }
};

export const NUMERAL = {
	I: { id: 'I', name: 'I', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value] }
};
