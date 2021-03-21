import IntervalUtils from "../../../Pod/Interval/Interval.utils";
import NoteUtils from "../../../Pod/Note/Note.utils";
import PodListUtils from "../../PodList.utils";
import { RELATIVE_SCALE_VALUES } from "./RelativeScale.constants";

// Wrappers
const playSound = (modelValue, modelRoot) => PodListUtils.playSound(modelValue, modelRoot);
const getPodAtPitch = (modelValue, modelRoot, p, matchOctave) => PodListUtils.getPodAtPitch(modelValue, p, modelRoot, matchOctave);

const getName = (modelValue, modelRoot) => {
	const preset = RELATIVE_SCALE_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = NoteUtils.getName(modelRoot, modelRoot);
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
	getPodAtPitch,
	playSound,
	getPodProps
}
