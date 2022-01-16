const BASE_NOTE_INDEX = 9;
const BASE_PITCH = 440;

export const getFrequency = (p: number): number => {
	const delta = p - BASE_NOTE_INDEX;
	const exp = delta / 12;
	const multiplier = Math.pow(2, exp);
	const f = BASE_PITCH * multiplier;
	return Math.round(f);
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
}