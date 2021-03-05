import { DEFAULT_DEGREE_COLOR_SCHEME } from "../../../theory/Degree.constants";
import NoteUtils from "../Note/Note.utils";
import PodUtils from "../Pod.utils";
import { CORE_INTERVALS, DEFAULT_INTERVAL_OPTIONS, INTERVAL_QUALITY } from "./Interval.constants";

// Wrappers
const getMetaChildren = () => null;
const getPodAtPitch = (modelValue, modelOptions, p) => PodUtils.getPodAtPitch(modelValue, p, modelOptions.root);
const playSound = (modelValue, modelOptions) => PodUtils.playSound(modelValue, modelOptions.root);

const getIntervalOffset = (pod, coreIvl) => {
	return coreIvl.value[0] - pod[0];
}

const getName = (modelValue, modelOptions) => {
	const [p, d] = modelValue;
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

	let offset = getIntervalOffset(modelValue, ivl);

	// determine quality
	let quality = null;
	if (!offset) return ivl.id; // unaltered
	if (offset < 0) quality = INTERVAL_QUALITY.dim; // dim
	if (offset > 0) quality = INTERVAL_QUALITY.aug; // aug

	const count = Math.abs(offset);
	const qualityStr = quality.symbol.repeat(count);

	return `${qualityStr}${d + 1}`;
}

const getPreview = (modelData, modelOptions) => {
	//const note = PodUtils.addPod(modelData, modelOptions.root);
	//const diff = note[0] - modelData[0];
	const [p, d] = modelData;
	return `p = ${p}, d = ${d}`;
}

const getPodColor = pod => {
	if (!pod) return null;
	const [p, d] = pod;
	return DEFAULT_DEGREE_COLOR_SCHEME[d];
}

const getPodProps = (modelValue, modelOptions, p) => {
	const pod = getPodAtPitch(modelValue, modelOptions, p);
	if (!pod) return null;
	const color = getPodColor(pod);
	const label = getName(pod);
	return { color, label };
}

export default {
	getName,
	getPreview,
	getMetaChildren,
	getPodAtPitch,
	playSound,
	getPodColor,
	getPodProps
}
