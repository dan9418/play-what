import { MODEL } from "./helpers/Model.constants";

const getName = (data) => data.name || "Untitled Group";
const getPreview = (data) => `${data.length} Items`;
const getCaption = (data) => null;
const getPodAtPitch = (data, p) => null;
const getMetaChildren = data => {
	return data.map(child => {
		const { childModelId } = child;
		const model = MODEL[childModelId];
		const childData = model.utils.parse ? model.utils.parse(child.childData) : child.childData;
		const name = child.name ? child.name : model.utils.getName(child.childData);
		return {
			...child,
			name,
			childData
		}
	});
};

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren
}
