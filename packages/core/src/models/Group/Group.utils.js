import { MODEL } from "../Model.constants";

const getName = () => "Untitled Group";
const getPreview = (modelValue) => `${modelValue.length} Items`;
const getPodAtPitch = () => null;
const getPodColor = () => null;
const getPodLabel = () => null;

const getMetaChildren = (modelValue, modelRoot) => {
	return modelValue.map((child, i) => {
		const model = MODEL[child.modelId];
		const name = child.name ? child.name : model.utils.getName(child.modelValue, child.modelRoot);
		return {
			...child,
			childIndex: i,
			name,
			preview: model.utils.getPreview(child.modelValue, child.modelRoot || modelRoot),
			modelValue: child.modelValue,
			modelRoot: child.modelRoot || modelRoot
		}
	});
};

export default {
	getName,
	getPreview,
	getPodAtPitch,
	getMetaChildren
}
