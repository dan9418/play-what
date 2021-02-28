import { MODEL } from "./helpers/Model.constants";

const getName = (modelConfig) => "Untitled Group";
const getPreview = (modelConfig) => `${modelConfig.items.length} Items`;
const getCaption = (modelConfig) => null;

const getPodAtPitch = (data, p) => null;

const getMetaChildren = args => {
	const { root, items } = args;
	return items.map((child, i) => {
		const { modelId, modelConfig: _modelConfig } = child;
		const modelConfig = { root, ..._modelConfig };
		const model = MODEL[modelId];
		const name = child.name ? child.name : model.utils.getName(modelConfig);
		return {
			...child,
			childIndex: i,
			name,
			preview: model.utils.getPreview(modelConfig),
			modelConfig,
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
