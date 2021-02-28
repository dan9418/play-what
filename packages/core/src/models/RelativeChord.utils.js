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
	return intervals.map((interval, i) => {
		const intervalConfig = { root, interval };
		return {
			childIndex: i,
			name: IntervalUtils.getName(intervalConfig),
			preview: IntervalUtils.getPreview(intervalConfig),
			modelId: MODEL_ID.Interval,
			modelConfig: intervalConfig
		}
	});
};

export default {
	getName,
	getPreview,
	getCaption,
	getMetaChildren
}
