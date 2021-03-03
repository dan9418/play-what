import { MAX_POD } from './Pod.constants';
import PodUtils from './Pod.utils';

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

const getPodAtPitch = (A, p) => {
	const pod = A.find(a => PodUtils.getPodAtPitch(a, p));
	return pod ? pod : null;
};

export default {
	areEqual,
	reduce,
	getPodAtPitch
};
