import { MODEL_ID } from "./helpers/Model.constants";
import PodUtils from "./helpers/Pod.utils";
import IntervalUtils from "./Interval.utils";
import { RELATIVE_CHORD_VALUES } from "./RelativeChord.constants";

const getPreview = (modelConfig) => modelConfig.intervals.map(interval => IntervalUtils.getName({ interval })).join(', ');
const getCaption = (modelConfig) => null;

const getName = (modelConfig) => {
	const preset = RELATIVE_CHORD_VALUES.find(v => PodUtils.areListsEqual(modelConfig.intervals, v.value));
	return preset ? preset.id : 'Untitled Chord';
};

const getMetaChildren = args => {
	const { root, intervals } = args;
	return intervals.map((d, i) => ({
		childIndex: i,
		name: IntervalUtils.getName(d),
		preview: IntervalUtils.getPreview(d),
		modelId: MODEL_ID.Interval,
		modelConfig: {
			root,
			interval:	d
		}
	}));
};

export default {
	getName,
	getPreview,
	getCaption,
	getMetaChildren
}
