// Constants

import pod from "../models/pod/pod";

const DEFAULT = null;

// Common

// isValid

// areEqual

// sum

const from = ({ a, B }) => {
	const C = pod.addpodList({ a, B });
	return { a, B, C };
};

export default {
	defaultValue: DEFAULT,
	from
};
