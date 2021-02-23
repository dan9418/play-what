const getName = (data) => data.name || "Untitled Group";
const getPreview = (data) => `${data.length} Items`;
const getCaption = (data) => null;
const getPodAtPitch = (data, p) => null;
const getMetaChildren = data => data.modelData;

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren
}
