import { MODEL_ID } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Fretboard from '../../../../react/src/Fretboard/Fretboard';
import { pathHeadState } from '../../state/pathState';

const Empty = ({ children }) => <div>Please select a viewer for this model type.</div>;

const EMPTY = {
	name: 'No Viewer',
	component: Empty
};

const FRETBOARD = {
	name: 'Fretboard',
	component: Fretboard
}

const MODEL_VIEWER = {
	[MODEL_ID.Frame]: EMPTY,
	[MODEL_ID.Group]: EMPTY,
	[MODEL_ID.Chord]: FRETBOARD,
	[MODEL_ID.AbsoluteChord]: FRETBOARD,
	[MODEL_ID.RelativeChord]: FRETBOARD,
	[MODEL_ID.Scale]: FRETBOARD,
	[MODEL_ID.AbsoluteScale]: FRETBOARD,
	[MODEL_ID.RelativeScale]: FRETBOARD,
	[MODEL_ID.Note]: FRETBOARD,
	[MODEL_ID.Interval]: FRETBOARD,
	[MODEL_ID.Pitch]: EMPTY,
	[MODEL_ID.Degree]: EMPTY
};

const StyledViewerContainer = styled.div`
    width: 100%;
	max-width: 512px;
	
	padding: 16px 0 1024px;

	> .fretboard {
        //width: 100%;
    }
`;

const StyledViewerHeader = styled.h2`
	color: #555;
	text-align: left;
	width: 100%;
	max-width: 512px;
	text-transform: uppercase;
	margin: 16px 0 8px;

	display: flex;
	align-items: flex-end;
	justify-content: space-between;
`;

const Viewer = () => {
	const pathHead = useRecoilValue(pathHeadState);
	const { modelData, modelId } = pathHead;

	let pitchOffset = 0;
	/*if (root) {
		pitchOffset = root[0];
	}*/

	const viewer = MODEL_VIEWER[modelId];

	return (
		<StyledViewerContainer>
			<viewer.component data={modelData} modelId={modelId} pitchOffset={pitchOffset} />
		</StyledViewerContainer>
	);
};

export default Viewer;
