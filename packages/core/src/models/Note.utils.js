import PodUtils from "./_Pod.utils";

const getName = (data) => PodUtils.getName(data);
const getPreview = (data) => `Pitch ${data[0]} + Degree ${data[1]}`;
const getCaption = (data) => null;

export default {
	getName,
	getPreview,
	getCaption
}
