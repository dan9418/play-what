import { MODEL, MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
import { STRUCT } from "@pw/core/src/models/helpers/Struct.constants";


export const getName = (data, modelId) => {
	if (typeof data === undefined) return "No Name Data";
	if (typeof modelId === undefined) return "No modelId";
	const model = MODEL[modelId];
	return model.utils.getName(data);
};

export const getCaption = (data, modelId, includeStruct) => {
	if (typeof data === undefined) return "No Caption Data";
	if (typeof modelId === undefined) return "No modelId";

	const model = MODEL[modelId];
	const struct = STRUCT[model.structId];
	return false ? `${model.name} (${struct.name})` : model.name;
};

export const getPreview = (data, modelId) => {
	if (typeof data === undefined) return "No Preview Data";
	if (typeof modelId === undefined) return "No modelId";
	const model = MODEL[modelId];
	return model.utils.getPreview(data);
};

const getPanelProps = (modelData, modelId, optionalName = null) => {
	const caption = getCaption(modelData, modelId, modelId !== MODEL_ID.Group);
	const preview = getPreview(modelData, modelId);
	const name = optionalName ? optionalName : getName(modelData, modelId);

	return {
		name,
		caption: name === caption ? '' : caption,
		preview
	};
};

export default getPanelProps;
