import PodUtils from "../Pod.utils";

const getName = (data) => PodUtils.getName(data);
const getPreview = (data) => `${data[0]} Semitones + ${data[1]} Degrees`;
const getCaption = (data) => null;

export default {
	getName,
	getPreview,
	getCaption
}
