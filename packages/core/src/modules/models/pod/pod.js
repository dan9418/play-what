import index from '../index/index';
import interval from './interval';
import note from './note';
import pw_color from '@pw/color';

// Constants

const DEFAULT = [0, 0];
const MAX = [12, 7];

// Common

const isValid = (pod) => {
	return pod !== null && typeof pod === 'object' && typeof pod[0] === 'number' && typeof pod[1] === 'number';
};

const areEqual = ({ pod1, pod2 }) => {
	if (!pod1 || !pod2) return false;
	return pod1[0] === pod2[0] && pod1[1] === pod2[1];
};

const reduce = ({ a }) => [index.modulo({ a: a[0], b: MAX[0] }), index.modulo({ a: a[1], b: MAX[1] })];

const getName = ({ pod, podType }) => {
	switch (podType) {
	case 'note':
		return note.getName({ a: pod });
	case 'interval':
		return interval.getName({ a: pod });
	default:
		return JSON.stringify(pod);
	}
}

// Utils

const addPod = ({ a, b }) => ([a[0] + b[0], a[1] + b[1]]);

const addPodList = ({ a, B }) => B.map((b) => addPod({ a, b }));

export default {
	interval,
	note,
	// Constants
	defaultValue: DEFAULT,
	max: MAX,
	// Common
	isValid,
	areEqual,
	reduce,
	getName,
	// Utils
	addPod,
	addPodList
};
