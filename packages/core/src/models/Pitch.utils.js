const getName = (data) => data;
const getPreview = (data) => data;
const getCaption = (data) => null;
const getDegreeAtPitch = (data, p) => data === p;

export default {
	getName,
	getPreview,
	getCaption,
	getDegreeAtPitch
}
