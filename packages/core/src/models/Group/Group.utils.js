import { MODEL } from "../Model.constants";

const getName = () => "Untitled Group";
const getPreview = (modelValue) => `${modelValue.length} Items`;
const getPodAtPitch = () => null;

const getMetaChildren = (modelValue, modelOptions) => {
	return modelValue.map((child, i) => {
		const model = MODEL[child.modelId];
		const name = child.name ? child.name : model.utils.getName(child.modelValue, child.modelOptions);
		return {
			...child,
			childIndex: i,
			name,
			preview: model.utils.getPreview(child.modelValue),
			modelValue: child.modelValue
		}
	});
};

export default {
	getName,
	getPreview,
	getPodAtPitch,
	getMetaChildren
}
