import PodUtils from "./helpers/Pod.utils";
import IntervalUtils from "./Interval.utils";
import { INTERVAL_CHORD_VALUES } from "./IntervalChord.constants";

const getPreview = (data) => data.map(IntervalUtils.getName).join(', ');
const getCaption = (data) => null;

const getName = (data) => {
	const preset = INTERVAL_CHORD_VALUES.find(v => PodUtils.areListsEqual(data, v.value));
	return preset ? preset.id : 'Untitled Chord';
};

const getDegreeAtPitch = (data, p) => PodUtils.listGetDegreeAtPitch(data, p);

export default {
	getName,
	getPreview,
	getCaption,
	getDegreeAtPitch
}