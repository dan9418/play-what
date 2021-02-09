import getCaption from "./getCaption";
import getName from "./getName";
import getPreview from "./getPreview";
import { MODEL_ID } from "./MODEL";

const getPanelProps = (modelData, modelId, optionalName = null) => {
	const caption = getCaption(modelData, modelId, modelId !== MODEL_ID.Group);
	const preview = getPreview(modelData, modelId);
	const name = optionalName ? optionalName : getName(modelData, modelId);

	return {
		name,
		caption,
		preview
	};
};

export default getPanelProps;
