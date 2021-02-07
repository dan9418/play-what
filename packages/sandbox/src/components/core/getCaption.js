import { MODEL } from "./MODEL";
import { STRUCT } from "./STRUCT";

const getCaption = (data, modelId) => {
	if (!data) return "No Data";

	const model = MODEL[modelId];
	const struct = STRUCT[model.structId];
	return `${model.name} (${struct.name})`;
};

export default getCaption;
