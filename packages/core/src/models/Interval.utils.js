import { MODEL_ID } from "./helpers/Model.constants";
import PodUtils from "./helpers/Pod.utils";
import { CORE_INTERVALS, INTERVAL_QUALITY } from "./Interval.constants";

const getPreview = (data) => '1:n';
const getCaption = (data) => null;
const getMetaChildren = data => {
	return [
		{
			pathId: 0,
			name: 'Pitch Span',
			childModelId: MODEL_ID.Pitch,
			childData: data[0]
		},
		{
			pathId: 1,
			name: 'Degree Span',
			childModelId: MODEL_ID.Degree,
			childData: data[0]
		}
	];
};


const getIntervalOffset = (pod, coreIvl) => {
	return coreIvl.value[0] - pod[0];
}

const getName = (pod) => {
	const [p, d] = pod;
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

	let offset = getIntervalOffset(pod, ivl);

	// determine quality
	let quality = null;
	if (!offset) return ivl.id; // unaltered
	if (offset < 0) quality = INTERVAL_QUALITY.dim; // dim
	if (offset > 0) quality = INTERVAL_QUALITY.aug; // aug

	const count = Math.abs(offset);
	const qualityStr = quality.symbol.repeat(count);

	return `${qualityStr}${d + 1}`;
}

const getPodAtPitch = (data, p) => PodUtils.getPodAtPitch(data, p);

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren
}
