import { IPod } from './../../Model.constants';
import { DEFAULT_DEGREE_COLOR_SCHEME } from "../../../theory/Degree.constants";
import { IInterval } from "./Interval.constants";

const getIntervalOffset = (pod: IPod, coreIvl: IInterval) => {
	return coreIvl.value[0] - pod[0];
}

const getPodColor = (pod: IPod) => {
	if (!pod) return null;
	const [p, d] = pod;
	return DEFAULT_DEGREE_COLOR_SCHEME[d];
}

export default {
	getPodColor,
	getIntervalOffset
}
