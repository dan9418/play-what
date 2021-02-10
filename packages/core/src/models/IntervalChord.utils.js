import PodListUtils from "../PodList.utils";

const getName = (data) => PodListUtils.getName(data, { podType: 'chord' });
const getPreview = (data) => data.map(d => getIntervalName(d)).join(', ');
const getCaption = (data) => null;

export default {
	getName,
	getPreview,
	getCaption
}
