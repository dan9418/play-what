import { MODEL } from "./helpers/Model.constants";

const getName = () => "Untitled Group";
const getPreview = (modelValue) => `${modelValue.length} Items`;
const getCaption = () => null;

const getPodAtPitch = (data, p) => null;

const getMetaChildren = (modelValue, modelOptions) => {
	return modelValue.map((child, i) => {
		const model = MODEL[child.modelId];
		const name = child.name ? child.name : model.utils.getName(child.modelValue);
		return {
			...child,
			childIndex: i,
			name,
			preview: model.utils.getPreview(child.modelValue)
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
