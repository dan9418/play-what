const getName = (data) => data.name || "Untitled Group";
const getPreview = (data) => `${data.length} Items`;
const getCaption = (data) => null;

export default {
	getName,
	getPreview,
	getCaption
}
