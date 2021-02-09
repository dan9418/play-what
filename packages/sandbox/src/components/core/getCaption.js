import { MODEL, MODEL_ID } from "./MODEL";
import { STRUCT } from "./STRUCT";

const getCaption = (data, modelId, includeStruct) => {
	if (!data || !modelId) return "No Data";

	const model = MODEL[modelId];
	const struct = STRUCT[model.structId];
	return includeStruct ? `${model.name} (${struct.name})` : model.name;
};

export default getCaption;
