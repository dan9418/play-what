import pod from './pod'
import integer from './integer';
import utils from '../utils';

const isValid = (podList) => {
	return podList !== null && Array.isArray(podList) && podList.find((v) => !pod.isValid(v));
};

const areEqual = ({ list1, list2 }) => {
	if (!list1 || !list2) return false;
	if (list1.length !== list2.length) return false;
	for (let i = 0; i < list1.length; i++) {
		if (!padeEqual(list1[i], list2[i])) { return false; }
	}
	return true;
};

const findVectorWithPitch = ({ podList, pitch, pitchClass = false }) => {
	const p = pitchClass ? integer.modulo(pitch, pmdx[0]) : pitch;
	const index = podList.findIndex((n) => n[0] === p);
	return index > -1 ? [podList[index], index] : [null, index];
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
	isValid,
	areEqual,
	findVectorWithPitch,
	getNumeral,
	getAllNumerals,
	getMode,
	getAllModes
};
