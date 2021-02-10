import PodUtils from "../Pod.utils";

const getName = (data) => PodUtils.getName(data, { podType: 'note' });

export default {
	getName
}
