import { MODEL_ID } from "./helpers/Model.constants";
import PodUtils from "./helpers/Pod.utils";
import IntervalUtils from "./Interval.utils";
import { RELATIVE_CHORD_VALUES } from "./RelativeChord.constants";

const getPreview = (data) => data.map(IntervalUtils.getName).join(', ');
const getCaption = (data) => null;

const getName = (data) => {
	const preset = RELATIVE_CHORD_VALUES.find(v => PodUtils.areListsEqual(data, v.value));
	return preset ? preset.id : 'Untitled Chord';
};

const getPodAtPitch = (data, p) => PodUtils.listGetPodAtPitch(data, p);

const getMetaChildren = data => {
	return data.map((d, i) => ({
		pathId: i,
		name: IntervalUtils.getName(d),
		childModelId: MODEL_ID.Interval,
		childData: d
	}));
};


export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren
}
