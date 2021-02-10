import IntervalUtils from "./Interval.utils";

const getName = (data) => 'intervalscale';
const getPreview = (data) => data.map(d => IntervalUtils.getName(d)).join(', ');
const getCaption = (data) => null;

export default {
	getName,
	getPreview,
	getCaption
}
