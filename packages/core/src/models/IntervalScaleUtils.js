import PodListUtils from "../PodList.utils";

const getName = (data) => PodListUtils.getName(data, { podType: 'scale' });

export default {
	getName
}
