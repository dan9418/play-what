import { MODEL_ID } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import styled from 'styled-components';
import Fretboard from '../../../../react/src/Fretboard/Fretboard';

const FRETBOARD = {
	name: 'Fretboard',
	component: Fretboard
}

const MODEL_VIEWER = {
	[MODEL_ID.Group]: null,
	[MODEL_ID.Chord]: FRETBOARD,
	[MODEL_ID.AbsoluteChord]: FRETBOARD,
	[MODEL_ID.RelativeChord]: FRETBOARD,
	[MODEL_ID.Scale]: FRETBOARD,
	[MODEL_ID.AbsoluteScale]: FRETBOARD,
	[MODEL_ID.RelativeScale]: FRETBOARD,
	[MODEL_ID.Note]: FRETBOARD,
	[MODEL_ID.Interval]: FRETBOARD
};

const StyledViewerContainer = styled.div`
    width: 100%;
	max-width: 512px;
`;


const Viewer = props => {

	const viewer = MODEL_VIEWER[props.modelId];

	if (!viewer) return null;

	return (
		<>
			<h2>Viewer</h2>
			<StyledViewerContainer>
				<viewer.component {...props} />
			</StyledViewerContainer>
		</>
	);
};

export default Viewer;
