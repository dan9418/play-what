// Constants

import pod from "../models/pod/pod";

const DEFAULT = null;

// Common

// isValid

// areEqual

// sum

const from = ({ a, B }) => {
	const C = pod.addPodList({ a, B });
	return { a, B, C };
};

export default {
	defaultValue: DEFAULT,
	from
};
