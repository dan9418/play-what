import NumberUtils from '../../general/Number.utils';
import ToneUtils from '../../tone/Tone.utils';
import TuningUtils from '../../tuning/Tuning.utils';
import { MODEL } from '../Model.constants';
import { MAX_POD } from './Pod.constants';

// Equality

const areEqual = (a, b) => {
	if (!a || !b || a.length !== 2 || b.length !== 2) return false;
	return a[0] === b[0] && a[1] === b[1];
}

// Reduction

const reduce = (a, max = MAX_POD) => {
	const p = NumberUtils.modulo(a[0], max[0]);
	const d = NumberUtils.modulo(a[1], max[1]);
	return [p, d];
}

// Addition

const addPod = (a, b, reduceResult = false) => {
	const p = a[0] + b[0];
	const d = a[1] + b[1];
	const result = [p, d];
	return reduceResult ? reduce(result) : result;
}

const subtractPod = (a, b, reduceResult = false) => {
	const p = a[0] - b[0];
	const d = a[1] - b[1];
	const result = [p, d];
	return reduceResult ? reduce(result) : result;
}

const addPodList = (a, B, max = MAX_POD) => {
	const newValue = B.map((b) => addPod(a, b, max));
	return newValue;
};

// Property Derivation

const getPitchClass = (pod, options = {}) => {
	return NumberUtils.modulo(pod[0], MAX_POD[0]);
}

const getOctave = (pod, options = {}) => {
	return Math.floor(pod[0] / 12);
}

const getDegree = (pod, options = {}) => {
	return NumberUtils.modulo(pod[1], MAX_POD[1]);
}

const getX = (pod, options = {}) => {
	return Math.floor(pod[1] / 7);
}

// Search

const getPodAtPitch = (pod, p, modelOptions, matchOctave = false) => {
	const pitchOffset = modelOptions.modelRoot ? modelOptions.modelRoot[0] : 0;
	const target = p - pitchOffset;
	let a = pod[0];
	let b = target;
	if (!matchOctave) {
		a = NumberUtils.modulo(a, 12);
		b = NumberUtils.modulo(b, 12);
	}
	return a === b ? pod : null;
};

// Sound

const playSound = (modelValue, modelOptions) => {
	const note = modelOptions.modelRoot ? addPod(modelOptions.modelRoot, modelValue) : modelValue;
	const frequency = TuningUtils.getFrequency(note[0]);
	ToneUtils.playSound(frequency)
}

export default {
	areEqual,
	addPod,
	subtractPod,
	addPodList,
	reduce,
	getPitchClass,
	getOctave,
	getDegree,
	getX,
	getPodAtPitch,
	playSound
};
