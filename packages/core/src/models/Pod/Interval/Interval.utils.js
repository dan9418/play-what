import { MODEL_ID } from "../../Model.constants";
import NoteUtils from "../Note/Note.utils";
import PodUtils from "../Pod.utils";
import { CORE_INTERVALS, INTERVAL_QUALITY } from "./Interval.constants";

// Wrappers
const getMetaChildren = () => null;
const getPodAtPitch = (modelValue, modelOptions, metaChildren, p) => PodUtils.getPodAtPitch(modelValue, p, modelOptions.root);
const playSound = (modelValue, modelOptions) => PodUtils.playSound(modelValue, modelOptions.root);

const getIntervalOffset = (pod, coreIvl) => {
	return coreIvl.value[0] - pod[0];
}

const getName = (modelValue, modelOptions) => {

	if(modelOptions.displayName === MODEL_ID.Note) {
		const note = PodUtils.addPod(modelValue, modelOptions.root);
		return NoteUtils.getName(note);
	}

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

const getPreview = () => '1:n';

export default {
	getName,
	getPreview,
	getMetaChildren,
	getPodAtPitch,
	playSound
}
