import { MODEL_ID } from "../../Model.constants";
import PodListUtils from "../PodList.utils";
import { SCALE_VALUES } from "../Scale/Scale.constants";

const findSupersets = (modelValue, modelOptions) => {
	return SCALE_VALUES.filter(v => PodListUtils.containsSubset(v.value, modelValue)).map(v => ({
		name: v.name,
		modelId: MODEL_ID.Scale,
		modelValue: v.value,
		modelOptions
	}));
}

export default {
	findSupersets
}
