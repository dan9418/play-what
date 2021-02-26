import { MODEL } from "./helpers/Model.constants";

const getName = (data) => data.name || "Untitled Group";
const getPreview = (data) => `${data.length} Items`;
const getCaption = (data) => null;
const getPodAtPitch = (data, p) => null;
const getMetaChildren = data => {
	return data.map(child => {
		const { modelId } = child;
		const model = MODEL[modelId];
		const modelData = model.utils.parse ? model.utils.parse(child.modelData) : child.modelData;
		const name = child.name ? child.name : model.utils.getName(child.modelData);
		return {
			...child,
			name,
			preview: model.utils.getPreview(modelData),
			modelData
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
