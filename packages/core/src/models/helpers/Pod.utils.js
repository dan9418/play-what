import CoreUtils from '../../Core.utils';

const MAX = [12, 7];
const DEFAULT_POD = [0, 0];

const areEqual = (a, b) => {
	if (!a || !b || a.length !== 2 || b.length !== 2) return false;
	return a[0] === b[0] && a[1] === b[1];
}

const addPod = (a, b) => {
	const p = a[0] + b[0];
	const d = a[1] + b[1];
	return [p, d];
}

const addPodList = (a, B, max = MAX) => {
	const newValue = B.map((b) => this.addPod(a, b, max));
	return newValue;
};

const reduce = (a, max = MAX) => {
	const p = CoreUtils.modulo(a[0], max[0]);
	const d = CoreUtils.modulo(a[1], max[1]);
	return [p, d];
}

const reduceList = (A, max = MAX) => {
	return A.map((a) => PodUtils.reduce(a, max));
}

const getPitchClass = (pod, options = {}) => {
	return CoreUtils.modulo(pod[0], MAX[0]);
}

const getOctave = (pod, options = {}) => {
	return Math.floor(pod[0] / 12);
}

const getDegree = (pod, options = {}) => {
	return CoreUtils.modulo(pod[1], MAX[1]);
}

const getX = (pod, options = {}) => {
	return Math.floor(pod[1] / 7);
}

const areListsEqual = (A, B) => {
	if (!A || !B || A.length !== B.length) return false;
	for (let i = 0; i < A.length; i++) {
		const a = A[i];
		const b = B[i];
		if (!PodUtils.areEqual(a, b)) return false;
	}
	return true;
}

const findPodWithPitch = (A, p) => {
	return A.find((n) => n[0] === p) || null;
};

const findIndexOfPodWithPitchClass = (A, p) => {
	const pc = CoreUtils.modulo(p, 12);
	return A.findIndex(pod => CoreUtils.modulo(pod[0], 12) === pc);
};

const findPodWithPitchClass = (A, p) => {
	const pc = CoreUtils.modulo(p, 12);
	return A.find(pod => CoreUtils.modulo(pod[0], 12) === pc) || null;
};

const findIndexOfPodWithPitch = (A, p, options) => {
	return A.findIndex((n) => n[0] === p);
};

export default {
	areEqual,
	addPod,
	addPodList,
	reduce,
	getPitchClass,
	getOctave,
	getDegree,
	getX
};
