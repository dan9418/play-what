// Constants

import vector from "../math/vector";

const DEFAULT = null;

// Common

// isValid

// areEqual

// sum

const from = ({ a, B }) => {
	const C = vector.addMatrix({ a, B });
	return { a, B, C };
};

export default {
	defaultValue: DEFAULT,
	from
};
