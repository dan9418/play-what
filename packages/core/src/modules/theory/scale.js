import { INTERVAL } from './interval';

export const SCALE = {
	Major: { id: 'Major', name: 'Major', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.M7.value] },
	NaturalMinor: { id: 'NaturalMinor', name: 'Natural Minor', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
	HarmonicMinor: { id: 'HarmonicMinor', name: 'Harmonic Minor', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.M7.value] },
	MajorPentatonic: { id: 'MajorPentatonic', name: 'Major Pentatonic', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M6.value] },
	MinorPentatonic: { id: 'MinorPentatonic', name: 'Minor Pentatonic', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m7.value] },
	Chromatic: { id: 'Chromatic', name: 'Chromatic', value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.A4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.M6.value, INTERVAL.m7.value, INTERVAL.M7.value] }
};

const getMode = ({ scale, degree }) => {
	let mode = [...scale];
	mode = utils.rotate(mode, degree);
	const a = mode[0];
	const newMode = mode.map((m) => {
		return [
			integer.moduloSum(m[0], a[0], 12, 0, true),
			integer.moduloSum(m[1], a[1], 7, 0, true)
		];
	});
	return newMode;
};

const getAllModes = ({ scale, keyCenter }) => {
	const modes = [];
	for (let i = 1; i <= scale.length; i++) {
		modes.push(getMode({ scale, degree: i }));
	}
	return modes.map((m, i) => ({
		name: `Degree ${i + 1}`,
		a: keyCenter,
		B: m
	}));
};

const getNumeral = ({ scale, keyCenter, degree }) => {
	const i1 = degree;
	const i3 = integer.moduloSum(degree, 2, scale.length);
	const i5 = integer.moduloSum(degree, 4, scale.length);
	const i7 = integer.moduloSum(degree, 6, scale.length);
	const numeral = [scale[i1], scale[i3], scale[i5], scale[i7]];
	return {
		name: `Numeral ${degree + 1}`,
		a: keyCenter,
		B: numeral
	};
};

const getAllNumerals = ({ scale, keyCenter }) => {
	const numerals = [];
	for (let i = 0; i < scale.length; i++) {
		numerals.push(getNumeral({ scale, keyCenter, degree: i }));
	}
	return numerals;
};

export default {
	preset: SCALE,
	getMode,
	getAllModes,
	getNumeral,
	getAllNumerals
};
