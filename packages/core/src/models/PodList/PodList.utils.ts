import { IPodList, IModelOptions, IPod } from './../Model.constants';
import ToneUtils from '../../tone/Tone.utils';
import TuningUtils from '../../tuning/Tuning.utils';
import { MAX_POD } from '../Pod/Pod.constants';
import PodUtils from '../Pod/Pod.utils';

// Equality

const areEqual = (A: IPodList, B: IPodList): boolean => {
	if (!A || !B || A.length !== B.length) return false;
	for (let i = 0; i < A.length; i++) {
		const a = A[i];
		const b = B[i];
		if (!PodUtils.areEqual(a, b)) return false;
	}
	return true;
}

// Reduction

const reduce = (A: IPodList): IPodList => {
	return A.map((a) => PodUtils.reduce(a));
}

// Search

const getPodAtPitch = (A: IPodList, p: number, modelOptions: IModelOptions, matchOctave: boolean): IPod | null => {
	const pod = A.find(a => PodUtils.getPodAtPitch(a, p, modelOptions, matchOctave));
	return pod ? pod : null;
};

// Sound

const playSound = (modelValue: IPodList, modelOptions: IModelOptions): void => {
	const notes = (modelOptions && modelOptions.modelRoot) ? PodUtils.addPodList(modelOptions.modelRoot, modelValue) : modelValue;
	const frequencies = notes.map(n => TuningUtils.getFrequency(n[0]));
	ToneUtils.playSound(frequencies)
}

// Other

const containsSubset = (modelValue: IPodList, subset: IPodList): boolean => {
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
