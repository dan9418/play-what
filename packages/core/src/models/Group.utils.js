const getName = (data) => data.name || "Untitled Group";
const getPreview = (data) => `${data.length} Items`;
const getCaption = (data) => null;
const containsPitch = (data, p) => false;

export default {
	getName,
	getPreview,
	getCaption,
	containsPitch
}
