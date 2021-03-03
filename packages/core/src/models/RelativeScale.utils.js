import { MODEL_ID } from "./helpers/Model.constants";
import PodListUtils from "./helpers/PodList.utils";
import IntervalUtils from "./Interval.utils";
import NoteUtils from "./Note.utils";
import { RELATIVE_SCALE_VALUES } from "./RelativeScale.constants";

const getPreview = (modelValue) => modelValue.map(interval => IntervalUtils.getName(interval)).join(', ');

const getName = (modelValue, modelOptions) => {
	const preset = RELATIVE_SCALE_VALUES.find(v => PodListUtils.areEqual(modelValue, v.value));
	const rootName = NoteUtils.getName(modelOptions.root);
	const presetName = preset ? preset.id : 'Untitled Scale';
	return `${rootName} ${presetName}`;
};

const getMetaChildren = (modelValue, modelOptions) => PodListUtils.getMetaChildren(modelValue, modelOptions, MODEL_ID.Interval);

const getPodAtPitch = (modelValue, modelOptions, metaChildren, p) => {
	const pitchOffset = modelOptions.root[0];
	return PodListUtils.getPodAtPitch(modelValue, p - pitchOffset);
}

export default {
	getName,
	getPreview,
	getMetaChildren,
	getPodAtPitch
}
