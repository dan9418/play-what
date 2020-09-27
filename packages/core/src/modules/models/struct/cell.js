// Constants

import vector from "../math/vector";

const DEFAULT = null;

// Common

// isValid

// areEqual

// sum

const evaluate = ({ a, B }) => {
	const result = vector.addMatrix({ a, B });
	return result;
};

export default {
	defaultValue: DEFAULT,
	evaluate
};
