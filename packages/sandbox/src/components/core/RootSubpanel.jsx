import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React from 'react';
import Subpanel from '../ui/layout/Subpanel';
import Viewer from './Viewer';

const NOTE_MODEL = MODEL[MODEL_ID.Note];

const RootSubpanel = ({ modelRoot }) => {

	const name = NOTE_MODEL.utils.getName(modelRoot, modelRoot);
	const caption = "Root Note"; //NOTE_MODEL.name;
	const preview = NOTE_MODEL.utils.getPreview(modelRoot, modelRoot);

	const implicitProps = {
		modelId: NOTE_MODEL.modelId,
		modelValue: modelRoot,
		modelRoot
	};

	const metaChild = {
		name,
		caption,
		preview,
		...implicitProps
	};

	return (
		<Subpanel
			metaChild={metaChild}
			caption={caption}
			name={name}
			preview={preview}
		>
			<Viewer {...implicitProps} metaChildren={[]} />
		</Subpanel>
	);
};

export default RootSubpanel;
