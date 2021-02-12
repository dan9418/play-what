const getName = (data) => data.name || "Untitled Group";
const getPreview = (data) => `${data.length} Items`;
const getCaption = (data) => null;
const getDegreeAtPitch = (data, p) => false;

export default {
	getName,
	getPreview,
	getCaption,
	getDegreeAtPitch
}
