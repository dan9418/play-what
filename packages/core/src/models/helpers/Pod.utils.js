import NumberUtils from '../../general/Number.utils';
import { MAX_POD } from './Pod.constants';

// Equality

const areEqual = (a, b) => {
	if (!a || !b || a.length !== 2 || b.length !== 2) return false;
	return a[0] === b[0] && a[1] === b[1];
}

const areListsEqual = (A, B) => {
	if (!A || !B || A.length !== B.length) return false;
	for (let i = 0; i < A.length; i++) {
		const a = A[i];
		const b = B[i];
		if (!areEqual(a, b)) return false;
	}
	return true;
}

// Addition

const addPod = (a, b) => {
	const p = a[0] + b[0];
	const d = a[1] + b[1];
	return [p, d];
}

const addPodList = (a, B, max = MAX_POD) => {
	const newValue = B.map((b) => this.addPod(a, b, max));
	return newValue;
};

// Reduction

const reduce = (a, max = MAX_POD) => {
	const p = NumberUtils.modulo(a[0], max[0]);
	const d = NumberUtils.modulo(a[1], max[1]);
	return [p, d];
}

const reduceList = (A, max = MAX_POD) => {
	return A.map((a) => PodUtils.reduce(a, max));
}

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

// List Search

const getDegreeAtPitch = (pod, p) => {
	const a = NumberUtils.modulo(pod[0], 12);
	const b = NumberUtils.modulo(p, 12);
	return a === b ? pod[1] : null;
};

const listGetDegreeAtPitch = (A, p) => {
	const pod = A.find(a => getDegreeAtPitch(a, p));
	return pod ? pod[1] : null;
};

export default {
	areEqual,
	areListsEqual,
	addPod,
	addPodList,
	reduce,
	getPitchClass,
	getOctave,
	getDegree,
	getX,
	getDegreeAtPitch,
	listGetDegreeAtPitch
};
