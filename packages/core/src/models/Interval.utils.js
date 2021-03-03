import PodUtils from "./helpers/Pod.utils";
import { CORE_INTERVALS, INTERVAL_QUALITY } from "./Interval.constants";

const getPreview = (modelConfig) => '1:n';
const getCaption = (modelConfig) => null;
const getMetaChildren = modelConfig => null;

const getIntervalOffset = (pod, coreIvl) => {
	return coreIvl.value[0] - pod[0];
}

const getName = (modelConfig) => {
	const { interval } = modelConfig;
	const [p, d] = interval;
	const degreeIntervals = CORE_INTERVALS[d];
	if (!degreeIntervals) return '?';

	const pIvl = degreeIntervals[0];
	const loIvl = pIvl;
	const hiIvl = degreeIntervals[degreeIntervals.length - 1];

	// determine core interval
	let ivl = null;
	if (!degreeIntervals.length) ivl === pIvl; // perfect
	else if (p <= loIvl.value[0]) ivl = loIvl; // minor
	else if (p >= hiIvl.value[0]) ivl = hiIvl; // major

	let offset = getIntervalOffset(interval, ivl);

	// determine quality
	let quality = null;
	if (!offset) return ivl.id; // unaltered
	if (offset < 0) quality = INTERVAL_QUALITY.dim; // dim
	if (offset > 0) quality = INTERVAL_QUALITY.aug; // aug

	const count = Math.abs(offset);
	const qualityStr = quality.symbol.repeat(count);

	return `${qualityStr}${d + 1}`;
}

const getPodAtPitch = (modelConfig, metaChildren, p) => {
	const { interval } = modelConfig;
	const pitchOffset = 0;
	return PodUtils.getPodAtPitch(interval, p - pitchOffset);
}

export default {
	getName,
	getPreview,
	getCaption,
	getMetaChildren,
	getPodAtPitch
}
