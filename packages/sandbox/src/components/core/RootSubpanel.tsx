import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import ModelUtils from '@pw/core/src/models/Model.utils';
import React from "react";
import Viewer from './Viewer';

const NOTE_MODEL = MODEL[MODEL_ID.Note];

const RootSubpanel = ({ pathHead }) => {
	const { modelOptions } = pathHead;

	const name = ModelUtils.getName(MODEL_ID.Note, modelOptions, modelOptions);
	const caption = "Root Note"; //NOTE_MODEL.name;
	const preview = ModelUtils.getPreview(MODEL_ID.Note, modelOptions, modelOptions);

	const implicitProps = {
		modelId: NOTE_MODEL.modelId,
		modelValue: modelOptions.modelRoot,
		modelOptions
	};

	const metaChild = {
		name,
		caption,
		preview,
		...implicitProps
	};

	return (
		/* @ts-ignore */
		<Viewer {...implicitProps} metaChildren={[]} />
	);
};

export default RootSubpanel;
