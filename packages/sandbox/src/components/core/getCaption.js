import { MODEL, MODEL_ID } from "./MODEL";
import { STRUCT } from "./STRUCT";

const getCaption = (data, modelId) => {
	if (!data || !modelId) return "No Data";

	const model = MODEL[modelId];
	const struct = STRUCT[model.structId];
	return model.name;
	//return `${model.name} (${struct.name})`;
};

export default getCaption;
