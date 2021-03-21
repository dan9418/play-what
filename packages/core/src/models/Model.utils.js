import { MODEL_ID, MODEL } from "./Model.constants";
import PodListUtils from "./PodList/PodList.utils";

const getGroupMetaChildren = (modelValue, modelRoot) => {
	return modelValue.map((child, i) => {
		const model = MODEL[child.modelId];
		const calcModelRoot = child.modelRoot || modelRoot;
		const name = child.name ? child.name : model.utils.getName(child.modelValue, calcModelRoot);
		return {
			...child,
			pathId: i,
			name,
			preview: model.utils.getPreview(child.modelValue, calcModelRoot),
			modelValue: child.modelValue,
			modelRoot: calcModelRoot
		}
	});
};

const getAbsoluteMetaChildren = (modelValue, modelRoot) => PodListUtils.getMetaChildren(modelValue, modelRoot, MODEL_ID.Note);

const getRelativeMetaChildren = (modelValue, modelRoot) => PodListUtils.getMetaChildren(modelValue, modelRoot, MODEL_ID.Interval);

const getMetaChildren = (modelId, modelValue, modelRoot) => {
	switch (modelId) {
	case MODEL_ID.Group:
		return getGroupMetaChildren(modelValue, modelRoot);
	case MODEL_ID.RelativeChord:
	case MODEL_ID.RelativeScale:
		return getRelativeMetaChildren(modelValue, modelRoot);
	case MODEL_ID.AbsoluteChord:
	case MODEL_ID.AbsoluteScale:
		return getAbsoluteMetaChildren(modelValue, modelRoot);
	default:
		return null;
	}
}

export default {
	getMetaChildren
}
