import PodUtils from "./helpers/Pod.utils";
import IntervalUtils from "./Interval.utils";
import { INTERVAL_SCALE_VALUES } from "./IntervalScale.constants";

const getPreview = (data) => data.map(IntervalUtils.getName).join(', ');
const getCaption = (data) => null;

const getName = (data) => {
	const preset = INTERVAL_SCALE_VALUES.find(PodUtils.areListsEqual);
	return preset ? preset.id : 'Untitled Scale';
};

export default {
	getName,
	getPreview,
	getCaption
}
