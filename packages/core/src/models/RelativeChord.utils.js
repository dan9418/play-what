import { MODEL_ID } from "./helpers/Model.constants";
import PodUtils from "./helpers/Pod.utils";
import IntervalUtils from "./Interval.utils";
import { RELATIVE_CHORD_VALUES } from "./RelativeChord.constants";

const getPreview = (modelArgs) => modelArgs.intervals.map(IntervalUtils.getName).join(', ');
const getCaption = (modelArgs) => null;

const getName = (modelArgs) => {
	const preset = RELATIVE_CHORD_VALUES.find(v => PodUtils.areListsEqual(modelArgs.intervals, v.value));
	return preset ? preset.id : 'Untitled Chord';
};

const getPodAtPitch = (modelArgs, p) => PodUtils.listGetPodAtPitch(modelArgs.intervals, p);

const getMetaChildren = args => {
	const { intervals } = args;
	return intervals.map((d, i) => ({
		childIndex: i,
		name: IntervalUtils.getName(d),
		preview: IntervalUtils.getPreview(d),
		modelId: MODEL_ID.Interval,
		modelArgs: d
	}));
};

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren
}
