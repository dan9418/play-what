import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import NoteUtils from '@pw/core/src/models/Pod/Note/Note.utils';
import React from 'react';
import Subpanel from '../ui/layout/Subpanel';

const RootBox = ({ modelRoot }) => {
	const name = "Root";
	const modelId = MODEL_ID.Note;
	const caption = MODEL[MODEL_ID.Note].name;
	const preview = NoteUtils.getName(modelRoot, modelRoot);
	const metaChild = { name, preview, modelId, caption, modelValue: modelRoot, modelRoot };
	return (
		<Subpanel
			metaChild={metaChild}
			caption={caption}
			name={name}
			preview={preview}
		>
			{JSON.stringify(modelRoot)}
		</Subpanel>
	);
};

export default RootBox;
