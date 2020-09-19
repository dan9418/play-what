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

const getName = ({ pod }) => {
	if (pod[1] < 0 || pod[1] > m[1]) {
		console.error('degree out of bounds', pod);
		return '';
	}
	const reduced = reduce(pod);
	const degree = theory.DEGREE_MAP[reduced[1]];
	if (!degree) {
		return '?';
	}
	return degree.name + theory.getAccidentalString(reduced[0] - degree[0]);
};

/* export const parseString = keyString => {
	if (typeof keyString !== 'string' || !keyString.length) {
		throw ('Bad keystring args')
	}
	const [tonicStr, accidentalStr] = utils.splitAt(keyString, 1);

	const degreeIndex = DEGREE_MAPPING.findIndex(d => d.name === tonicStr);

	const accidental = ACCIDENTAL_VALUES.find(a => a.name === accidentalStr) || ACCIDENTAL.Natural;

	return {
		id: keyString,
		name: keyString,
		p: DEGREE_MAPPING[degreeIndex].pitch + accidental.offset,
		d: degreeIndex
	};
}; */

export default {
	preset: NOTE,
	getName
};
