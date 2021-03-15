import { MODEL } from "../Model.constants";

const getName = () => "Untitled Group";
const getPreview = (modelValue) => `${modelValue.length} Items`;
const getPodAtPitch = () => null;
const getPodColor = () => null;
const getPodLabel = () => null;

const getMetaChildren = (modelValue, modelRoot, setModelValue) => {
	return modelValue.map((child, i) => {
		const model = MODEL[child.modelId];
		const calcModelRoot = child.modelRoot || modelRoot;
		const name = child.name ? child.name : model.utils.getName(child.modelValue, calcModelRoot);
		return {
			...child,
			childIndex: i,
			name,
			preview: model.utils.getPreview(child.modelValue, calcModelRoot),
			modelValue: child.modelValue,
			modelRoot: calcModelRoot,
			onEdit: v => setModelValue(v)
		}
	});
};

export default {
	getName,
	getPreview,
	getPodAtPitch,
	getMetaChildren
}
