import { MODEL_ID } from "../../../Model.constants";
import PodListUtils from "../../PodList.utils";
import IntervalUtils from "../../../Pod/Interval/Interval.utils";
import NoteUtils from "../../../Pod/Note/Note.utils";
import { RELATIVE_SCALE_VALUES } from "./RelativeScale.constants";

// Wrappers
const getMetaChildren = (modelValue, modelOptions) => PodListUtils.getMetaChildren(modelValue, modelOptions, MODEL_ID.Interval);
const playSound = (modelValue, modelOptions) => PodListUtils.playSound(modelValue, modelOptions.root);
const getPodAtPitch = (modelValue, modelOptions, p) => PodListUtils.getPodAtPitch(modelValue, p, modelOptions.root);

const getName = (modelValue, modelOptions) => {
	const preset = RELATIVE_SCALE_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = NoteUtils.getName(modelOptions.root);
	const presetName = preset ? preset.id : 'Untitled Scale';
	return `${rootName} ${presetName}`;
};

const getPreview = (modelValue, modelOptions) => modelValue.map(interval => IntervalUtils.getName(interval, modelOptions)).join(', ');

const getPodProps = (modelValue, modelOptions, p) => {
	const pod = getPodAtPitch(modelValue, modelOptions, p);
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
