import { MODEL_ID } from "../../../Model.constants";
import PodListUtils from "../../PodList.utils";
import IntervalUtils from "../../../Pod/Interval/Interval.utils";
import NoteUtils from "../../../Pod/Note/Note.utils";
import { RELATIVE_SCALE_VALUES } from "./RelativeScale.constants";

// Wrappers
const getMetaChildren = (modelValue, modelRoot) => PodListUtils.getMetaChildren(modelValue, modelRoot, MODEL_ID.Interval);
const playSound = (modelValue, modelRoot) => PodListUtils.playSound(modelValue, modelRoot);
const getPodAtPitch = (modelValue, modelRoot, p) => PodListUtils.getPodAtPitch(modelValue, p, modelRoot);

const getName = (modelValue, modelRoot) => {
	const preset = RELATIVE_SCALE_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = NoteUtils.getName(modelRoot);
	const presetName = preset ? preset.id : 'Untitled Scale';
	return `${rootName} ${presetName}`;
};

const getPreview = (modelValue, modelRoot) => modelValue.map(interval => IntervalUtils.getName(interval, modelRoot)).join(', ');

const getPodProps = (modelValue, modelRoot, p) => {
	const pod = getPodAtPitch(modelValue, modelRoot, p);
	if (!pod) return null;
	const color = IntervalUtils.getPodColor(pod);
	const label = IntervalUtils.getName(pod);
	return { color, label };
}

export default {
	getName,
	getPreview,
	getMetaChildren,
	getPodAtPitch,
	playSound,
	getPodProps
}
