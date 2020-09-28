import vector from './vector'
import scalar from './scalar';
import utils from '../../utils';

// Constants

const DEFAULT = [[0, 0]];

// Common

const isValid = (matrix) => {
	return matrix !== null && Array.isArray(matrix) && matrix.find((v) => !vector.isValid(v));
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

const findVectorWithPitch = ({ A, p }) => {
	const octaveReduce = true
	const pitch = octaveReduce ? scalar.modulo({ a: p, b: vector.max[0] }) : p;
	return A.find((n) => n[0] === pitch) || null;
};

const findIndexOfVectorWithPitch = ({ A, p }) => {
	const octaveReduce = true
	const pitch = octaveReduce ? scalar.modulo({ a: p, b: vector.max[0] }) : p;
	return A.findIndex((n) => n[0] === pitch);
};

const addVector = ({ A, b }) => A.map((a) => vector.addVector({ a, b }));

export default {
	defaultValue: DEFAULT,
	// Common
	isValid,
	areEqual,
	// Utils
	findVectorWithPitch,
	findIndexOfVectorWithPitch,
	addVector
};
