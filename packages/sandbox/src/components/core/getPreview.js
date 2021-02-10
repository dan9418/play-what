import { MODEL } from "./MODEL";

const getPreview = (data, modelId) => {
	if (typeof data === undefined) return "No Name Data";
	if (typeof modelId === undefined) return "No modelId";
	const model = MODEL[modelId];
	return model.utils.getName(data);
};

export default getPreview;
