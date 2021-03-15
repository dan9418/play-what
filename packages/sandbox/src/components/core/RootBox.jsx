import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import NoteUtils from '@pw/core/src/models/Pod/Note/Note.utils';
import React from 'react';
import styled from 'styled-components';
import Subpanel from '../ui/layout/Subpanel';

export const StyledRootBox = styled.div`
	padding-bottom: 16px;
	margin: 16px 0;
	border-bottom: 2px solid #ccc;

	&:first-of-type{
		border-top: 2px solid #ccc;
	}
`;

const RootBox = ({ modelRoot }) => {
	const name = "Root";
	const modelId = MODEL_ID.Note;
	const caption = MODEL[MODEL_ID.Note].name;
	const preview = NoteUtils.getName(modelRoot, modelRoot);
	const metaChild = { name, preview, modelId, caption, modelValue: modelRoot, modelRoot };
	return (
		<StyledRootBox>
			<Subpanel
				metaChild={metaChild}
				caption={caption}
				name={name}
				preview={preview}
			>
				{JSON.stringify(modelRoot)}
			</Subpanel>
		</StyledRootBox>
	);
};

export default RootBox;
