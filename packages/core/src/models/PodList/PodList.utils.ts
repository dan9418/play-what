import { IPod, IModelOptions } from './../Model.constants';
import ToneUtils from '../../tone/Tone.utils';
import TuningUtils from '../../tuning/Tuning.utils';
import { MAX_POD } from '../Pod/Pod.constants';
import PodUtils from '../Pod/Pod.utils';

// Equality

const areEqual = (A: IPod[], B: IPod[]): boolean => {
	if (!A || !B || A.length !== B.length) return false;
	for (let i = 0; i < A.length; i++) {
		const a = A[i];
		const b = B[i];
		if (!PodUtils.areEqual(a, b)) return false;
	}
	return true;
}

// Reduction

const reduce = (A: IPod[]): IPod[] => {
	return A.map((a) => PodUtils.reduce(a));
}

// Search

const getPodAtPitch = (A: IPod[], p: number, matchOctave: boolean): IPod | null => {
	const pod = A.find(a => PodUtils.getPodAtPitch(a, p, matchOctave));
	return pod ? pod : null;
};

// Sound

const playSound = (modelValue: IPod[]): void => {
	const notes = modelValue;
	const frequencies = notes.map(n => TuningUtils.getFrequency(n[0]));
	ToneUtils.playSound(frequencies)
}

// Other

const containsSubset = (modelValue: IPod[], subset: IPod[]): boolean => {
	for (let i = 0; i < subset.length; i++) {
		if (!modelValue.find(x => x[0] === subset[i][0] && x[1] === subset[i][1]))
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
