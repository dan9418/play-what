import { MODEL_ID } from "../../../Model.constants";
import PodListUtils from "../../PodList.utils";
import { RELATIVE_SCALE_VALUES } from "../../Scale/RelativeScale/RelativeScale.constants";

const findSupersets = (modelValue, modelOptions) => {
	return RELATIVE_SCALE_VALUES.filter(v => PodListUtils.containsSubset(v.value, modelValue)).map(v => ({
		name: v.name,
		modelId: MODEL_ID.RelativeScale,
		modelValue: v.value,
		modelOptions
	}));
}

export default {
	findSupersets
}
