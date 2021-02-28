import { MODEL_ID } from "./helpers/Model.constants";
import PodUtils from "./helpers/Pod.utils";
import IntervalUtils from "./Interval.utils";
import { RELATIVE_SCALE_VALUES } from "./RelativeScale.constants";

const getPreview = (modelArgs) => modelArgs.intervals.map(IntervalUtils.getName).join(', ');
const getCaption = (data) => null;

const getName = (modelArgs) => {
	const preset = RELATIVE_SCALE_VALUES.find(v => PodUtils.areListsEqual(modelArgs.intervals, v.value));
	return preset ? preset.id : 'Untitled Scale';
};

const getPodAtPitch = (data, p) => PodUtils.listGetPodAtPitch(data, p);

const getMetaChildren = args => {
	const { intervals } = args;
	return intervals.map((d, i) => ({
		childIndex: i,
		name: IntervalUtils.getName(d),
		preview: IntervalUtils.getPreview(d),
		modelId: MODEL_ID.Interval,
		modelData: d
	}));
};

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren
}
