import { MODEL_ID } from "./helpers/Model.constants";
import PodListUtils from "./helpers/PodList.utils";
import IntervalUtils from "./Interval.utils";
import NoteUtils from "./Note.utils";
import { RELATIVE_CHORD_VALUES } from "./RelativeChord.constants";

// Wrappers
const getMetaChildren = (modelValue, modelOptions) => PodListUtils.getMetaChildren(modelValue, modelOptions, MODEL_ID.Interval);
const playSound = (modelValue, modelOptions) => PodListUtils.playSound(modelValue, modelOptions.root);
const getPodAtPitch = (modelValue, modelOptions, metaChildren, p) => PodListUtils.getPodAtPitch(modelValue, p, modelOptions.root);

const getName = (modelValue, modelOptions) => {
	const preset = RELATIVE_CHORD_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = NoteUtils.getName(modelOptions.root);
	const presetName = preset ? preset.id : 'Untitled Chord';
	return `${rootName} ${presetName}`;
};

const getPreview = (modelValue) => modelValue.map(interval => IntervalUtils.getName(interval)).join(', ');

export default {
	getName,
	getPreview,
	getMetaChildren,
	getPodAtPitch,
	playSound
}
