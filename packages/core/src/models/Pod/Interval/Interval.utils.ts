import { DEFAULT_DEGREE_COLOR_SCHEME } from "../../../theory/Degree.constants";

const getIntervalOffset = (pod, coreIvl) => {
	return coreIvl.value[0] - pod[0];
}

const getPodColor = pod => {
	if (!pod) return null;
	const [p, d] = pod;
	return DEFAULT_DEGREE_COLOR_SCHEME[d];
}

export default {
	getPodColor,
	getIntervalOffset
}
