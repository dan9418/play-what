import ToneUtils from '../../tone/Tone.utils';
import TuningUtils from '../../tuning/Tuning.utils';
import { MAX_POD } from '../Pod/Pod.constants';
import PodUtils from '../Pod/Pod.utils';

// Equality

const areEqual = (A, B) => {
	if (!A || !B || A.length !== B.length) return false;
	for (let i = 0; i < A.length; i++) {
		const a = A[i];
		const b = B[i];
		if (!PodUtils.areEqual(a, b)) return false;
	}
	return true;
}

// Reduction

const reduce = (A, max = MAX_POD) => {
	return A.map((a) => PodUtils.reduce(a, max));
}

// Search

const getPodAtPitch = (A, p, modelOptions, matchOctave) => {
	const pod = A.find(a => PodUtils.getPodAtPitch(a, p, modelOptions, matchOctave));
	return pod ? pod : null;
};

// Sound

const playSound = (modelValue, modelOptions = {}) => {
	const notes = modelOptions.modelRoot ? PodUtils.addPodList(modelOptions.modelRoot, modelValue) : modelValue;
	const frequencies = notes.map(n => TuningUtils.getFrequency(n[0]));
	ToneUtils.playSound(frequencies)
}

// Other

const containsSubset = (modelValue, subset) => {
	for (let i = 0; i < subset.length; i++) {
		if (!modelValue.includes(subset[i]))
			return false;
	}
	return true;
};

export default {
	areEqual,
	reduce,
	getPodAtPitch,
	playSound,
	containsSubset
};
