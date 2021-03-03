import { MODEL_ID } from "./helpers/Model.constants";
import PodUtils from "./helpers/Pod.utils";
import IntervalUtils from "./Interval.utils";
import { RELATIVE_CHORD_VALUES } from "./RelativeChord.constants";

const getPreview = (modelValue) => modelValue.map(interval => IntervalUtils.getName(interval)).join(', ');
const getCaption = () => null;

const getName = (modelValue) => {
	const preset = RELATIVE_CHORD_VALUES.find(v => PodUtils.areListsEqual(modelValue, v.value));
	return preset ? preset.id : 'Untitled Chord';
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
	getCaption,
	getMetaChildren,
	getPodAtPitch
}
