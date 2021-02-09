import { MODEL } from "./MODEL";
import { STRUCT } from "./STRUCT";

const getCaption = (data, modelId, includeStruct) => {
	if (typeof data === undefined || data === null) return "No Caption Data";

	const model = MODEL[modelId];
	const struct = STRUCT[model.structId];
	return false ? `${model.name} (${struct.name})` : model.name;
};

export default getCaption;
