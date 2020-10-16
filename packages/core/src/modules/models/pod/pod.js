import index from './index/index';
import pw_color from '@pw/color';
import theory from '../theory/_module';

// Constants

const DEFAULT = [0, 0];
const MAX = [12, 7];

// Common

const isValid = (pod) => {
	return pod !== null && typeof pod === 'object' && typeof pod[0] === 'number' && typeof pod[1] === 'number';
};

const areEqual = ({ interval1, interval2 }) => {
	if (!interval1 || !interval2) return false;
	return interval1[0] === interval2[0] && interva[1] === interval[1];
};

const reduce = ({ a }) => [index.modulo({ a: a[0], b: MAX[0] }), index.modulo({ a: a[1], b: MAX[1] })];

// Utils

const addPod = ({ a, b }) => ([a[0] + b[0], a[1] + b[1]]);

const addpodList = ({ a, B }) => B.map((b) => addPod({ a, b }));

export default {
	// Constants
	defaultValue: DEFAULT,
	max: MAX,
	// Common
	isValid,
	areEqual,
	reduce,
	// Utils
	addPod,
	addpodList
};
