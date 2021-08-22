import { DEFAULT_DEGREE_COLOR_SCHEME } from "../../../theory/Degree.constants";
import { IPod, IPreset } from './../../Model.constants';
import { CORE_INTERVALS, INTERVAL_QUALITY } from "./Interval.constants";

const getIntervalOffset = (pod: IPod, coreIvl: IPreset<IPod>) => {
	return coreIvl.value[0] - pod[0];
}

const getPodColor = (pod: IPod) => {
	if (!pod) return null;
	const [p, d] = pod;
	return DEFAULT_DEGREE_COLOR_SCHEME[d];
}


interface IIntervalNameOptions {
	useLongName?: boolean;
}

export const getName = (interval: IPod, isList = false, options: IIntervalNameOptions = {}): string => {
	const reduced = PodUtils.reduce(interval)
	const [noteIndex, d] = reduced;
	const degreeIntervals = CORE_INTERVALS[d];
	if (!degreeIntervals) return '?';

	const pIvl = degreeIntervals[0];
	const loIvl = pIvl;
	const hiIvl = degreeIntervals[degreeIntervals.length - 1];

	// determine core interval
	let ivl = null;
	if (!degreeIntervals.length) ivl === pIvl; // perfect
	else if (noteIndex <= loIvl.value[0]) ivl = loIvl; // minor
	else if (noteIndex >= hiIvl.value[0]) ivl = hiIvl; // major

	const offset = getIntervalOffset(reduced, ivl);

	// determine quality
	let quality = null;
	if (!offset) return ivl.id; // unaltered
	if (offset > 0) quality = INTERVAL_QUALITY.dim; // dim
	if (offset < 0) quality = INTERVAL_QUALITY.aug; // aug

	const count = Math.abs(offset);
	const qualityStr = quality.symbol.repeat(count);

	return `${qualityStr}${d + 1}`;
}

export default {
	getPodColor,
	getIntervalOffset,
	getName
}
