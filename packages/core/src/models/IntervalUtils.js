import PodUtils from "../Pod.utils";

const getName = (data) => PodUtils.getName(data, { podType: 'interval' });

export default {
	getName
}
