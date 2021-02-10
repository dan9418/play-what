import PodUtils from "./helpers/Pod.utils";
import IntervalUtils from "./Interval.utils";
import { INTERVAL_CHORD_VALUES } from "./IntervalChord.constants";

const getPreview = (data) => data.map(IntervalUtils.getName).join(', ');
const getCaption = (data) => null;

const getName = (data) => {
	const preset = INTERVAL_CHORD_VALUES.find(PodUtils.areListsEqual);
	return preset ? preset.id : 'Untitled Chord';
};

export default {
	getName,
	getPreview,
	getCaption
}
