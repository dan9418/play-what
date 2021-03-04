import ToneUtils from '../../tone/Tone.utils';
import TuningUtils from '../../tuning/Tuning.utils';
import { MODEL } from '../Model.constants';
import { MAX_POD } from '../Pod/Pod.constants';
import PodUtils from '../Pod/Pod.utils';

// Equality

const areEqual = (A, B) => {
	if (!A || !B || A.length !== B.length) return false;
	for (let i = 0; i < A.length; i++) {
		const a = A[i];
		const b = B[i];
		if (!areEqual(a, b)) return false;
	}
	return true;
}

// Reduction

const reduce = (A, max = MAX_POD) => {
	return A.map((a) => PodUtils.reduce(a, max));
}

// Search

const getPodAtPitch = (A, p, root) => {
	const pod = A.find(a => PodUtils.getPodAtPitch(a, p, root));
	return pod ? pod : null;
};

// Children

const getMetaChildren = (modelValue, modelOptions, childModelId) => {
	const model = MODEL[childModelId];
	return modelValue.map((pod, i) => {
		return {
			childIndex: i,
			name: model.utils.getName(pod),
			preview: model.utils.getPreview(pod),
			modelId: childModelId,
			modelValue: pod,
			modelOptions
		}
	});
};

// Sound

const playSound = (modelValue, root = null) => {
	const notes = root ? PodUtils.addPodList(root, modelValue) : modelValue;
	const frequencies = notes.map(n => TuningUtils.getFrequency(n[0]));
	ToneUtils.playSound(frequencies)
}

export default {
	areEqual,
	reduce,
	getPodAtPitch,
	getMetaChildren,
	playSound
};
