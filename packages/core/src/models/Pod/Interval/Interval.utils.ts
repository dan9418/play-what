import { DEFAULT_DEGREE_COLOR_SCHEME } from "../../../theory/Degree.constants";
import TuningUtils from "../../../tuning/Tuning.utils";
import PodUtils from "../Pod.utils";
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

export const getName = (interval: IPod, options: IIntervalNameOptions = {}): string => {
	const reduced = PodUtils.reduce(interval);

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

	const value = `${qualityStr}${d + 1}`;

	/*if (isExtended) {
		console.log('x', value);
		if (value === 'm2') value = 'b9'
		else if (value === 'M2') value = '9'
		else if (value === 'm3') value = '#9'
		else if (value === 'M3') value = 'b11'
		else if (value === 'P4') value = '11'
		else if (value === 'A4' || value === 'd5') value = '#11'
		else if (value === 'm6') value = 'b13'
		else if (value === 'M6') value = '13'
		else if (value === 'm7') value = '#13'
	}*/

	return value;
}

const getRatio = (interval: IPod, options: any = {}) => {

	const [p] = interval;

	const baseline = TuningUtils.getFrequency(0);
	const compareTo = TuningUtils.getFrequency(p);

	const ratio = compareTo / baseline;

	return `1:${ratio.toFixed(2)}`;
}

const isExtendedInterval = (interval) => {
	const [p, d] = interval;
	const isExtendedDegree = d > 7;
	return isExtendedDegree;
}

export default {
	getPodColor,
	getIntervalOffset,
	getName,
	getRatio,
	isExtendedInterval
}
