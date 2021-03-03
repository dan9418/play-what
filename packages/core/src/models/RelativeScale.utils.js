import { MODEL_ID } from "./helpers/Model.constants";
import PodUtils from "./helpers/Pod.utils";
import IntervalUtils from "./Interval.utils";
import NoteUtils from "./Note.utils";
import { RELATIVE_SCALE_VALUES } from "./RelativeScale.constants";

const getPreview = (modelValue) => modelValue.map(interval => IntervalUtils.getName(interval)).join(', ');

const getName = (modelValue, modelOptions) => {
	const preset = RELATIVE_SCALE_VALUES.find(v => PodUtils.areListsEqual(modelValue, v.value));
	const rootName = NoteUtils.getName(modelOptions.root);
	const presetName = preset ? preset.id : 'Untitled Scale';
	return `${rootName} ${presetName}`;
};

const getMetaChildren = (modelValue, modelOptions) => {
	return modelValue.map((interval, i) => {
		return {
			childIndex: i,
			name: IntervalUtils.getName(interval),
			preview: IntervalUtils.getPreview(interval),
			modelId: MODEL_ID.Interval,
			modelValue: interval
		}
	});
};

const getPodAtPitch = (modelValue, modelOptions, metaChildren, p) => {
	const pitchOffset = modelOptions.root[0];
	return PodUtils.listGetPodAtPitch(modelValue, p - pitchOffset);
}

export default {
	getName,
	getPreview,
	getMetaChildren,
	getPodAtPitch
}
