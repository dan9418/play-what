// Constants

import pod from "../models/pod/pod";

const DEFAULT = null;

// Common

// isValid

// areEqual

// sum

const from = ({ keyCenter, intervals }) => {
	const notes = pod.addPodList({ a: keyCenter, B: intervals });
	return { keyCenter, intervals, notes };
};

export default {
	defaultValue: DEFAULT,
	from
};
