import { MODEL } from "./helpers/Model.constants";

const getName = (modelArgs, metaChildren) => "Untitled Group";
const getPreview = (modelArgs, metaChildren) => `${modelArgs.items.length} Items`;
const getCaption = (modelArgs, metaChildren) => null;

const getPodAtPitch = (data, p) => null;

const getMetaChildren = args => {
	const { root, items } = args;
	return items.map((child, i) => {
		const { modelId, modelArgs } = child;
		const model = MODEL[modelId];
		const name = child.name ? child.name : model.utils.getName(modelArgs);
		return {
			...child,
			childIndex: i,
			name,
			preview: model.utils.getPreview(modelArgs),
			modelArgs,
			root
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
