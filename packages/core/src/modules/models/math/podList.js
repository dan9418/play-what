import pod from './pod'
import scalar from './scalar';
import utils from '../../utils';

// Constants

const DEFAULT = [[0, 0]];

// Common

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

// Utils

const findPodWithPitch = (list, pitch, octaveReduce = true) => {
	const p = octaveReduce ? scalar.modulo({ a: pitch, b: MAX[0] }) : pitch;
	return list.find((n) => n[0] === p) || null;
};

const findIndexOfPodWithPitch = (list, pitch, octaveReduce = true) => {
	const p = octaveReduce ? scalar.modulo({ a: pitch, b: MAX[0] }) : pitch;
	return list.findIndex((n) => n[0] === p);
};

const addPod = ({ A, b }) => A.map((a) => pod.addPod({ a, b }));

export default {
	defaultValue: DEFAULT,
	// Common
	isValid,
	areEqual,
	// Utils
	findPodWithPitch,
	findIndexOfPodWithPitch,
	addPod
};
