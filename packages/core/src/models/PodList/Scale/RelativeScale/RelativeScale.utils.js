import { MODEL_ID } from "../../../Model.constants";
import PodListUtils from "../../PodList.utils";
import IntervalUtils from "../../../Pod/Interval/Interval.utils";
import NoteUtils from "../../../Pod/Note/Note.utils";
import { RELATIVE_SCALE_VALUES } from "./RelativeScale.constants";

// Wrappers
const getMetaChildren = (modelValue, root) => PodListUtils.getMetaChildren(modelValue, root, MODEL_ID.Interval);
const playSound = (modelValue, root) => PodListUtils.playSound(modelValue, root);
const getPodAtPitch = (modelValue, root, p) => PodListUtils.getPodAtPitch(modelValue, p, root);

const getName = (modelValue, root) => {
	const preset = RELATIVE_SCALE_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = NoteUtils.getName(root);
	const presetName = preset ? preset.id : 'Untitled Scale';
	return `${rootName} ${presetName}`;
};

const getPreview = (modelValue, root) => modelValue.map(interval => IntervalUtils.getName(interval, root)).join(', ');

const getPodProps = (modelValue, root, p) => {
	const pod = getPodAtPitch(modelValue, root, p);
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
