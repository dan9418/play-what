import PodListUtils from "../PodList.utils";
import IntervalUtils from "./Interval.utils";

const getName = (data) => PodListUtils.getName(data, { podType: 'scale' });
const getPreview = (data) => data.map(d => IntervalUtils.getName(d)).join(', ');
const getCaption = (data) => null;

export default {
	getName,
	getPreview,
	getCaption
}
