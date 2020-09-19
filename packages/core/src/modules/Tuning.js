const getFrequency = (p) => {
	const a = p + 3;
	const b = a / 12;
	const c = Math.pow(2, b);
	const f = 440 * c;
	return f;
};

/* const getFrequencies = pitches => {
    return pitches.map(p => getFrequency(p[0]));
} */

/*
const CALIBRATION_NOTE = {
    frequency: 440,
    noteIndex: 9
};

const CALIBRATION_CONSTANT = Math.pow(2, 1 / 12);
*/

export default {
	getFrequency
};
