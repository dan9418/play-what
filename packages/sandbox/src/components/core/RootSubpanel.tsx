import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import ModelUtils from '@pw/core/src/models/Model.utils';
import PresetSelector from '../core/PresetSelector';
import React from "react";
import Viewer from './Viewer';

const NOTE_MODEL = MODEL[MODEL_ID.Note];

const RootSubpanel = ({ pathHead }) => {
	const { config } = pathHead;
	const { modelOptions } = config;
	const { modelRoot } = modelOptions;

	const name = ModelUtils.getName(MODEL_ID.Note, modelRoot, modelOptions);
	const caption = "Root Note"; //NOTE_MODEL.name;
	const preview = ModelUtils.getPreview(MODEL_ID.Note, modelRoot, modelOptions);

	const implicitProps = {
		modelId: NOTE_MODEL.modelId,
		modelValue: modelRoot,
		modelOptions
	};

	return (
		<>
			<PresetSelector pathHead={pathHead} setPathHead={null} />
		</>
	);
};

export default RootSubpanel;
