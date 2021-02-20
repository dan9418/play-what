const getName = (data) => data.name || "Untitled Group";
const getPreview = (data) => `${data.length} Items`;
const getCaption = (data) => null;
const getPodAtPitch = (data, p) => null;

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch
}
