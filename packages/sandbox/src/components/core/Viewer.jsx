import React from 'react';
import styled from 'styled-components';
import Fretboard from '../../../../react/src/Fretboard/Fretboard';

const VIEWER_ID = {
	Fretboard: 'fretboard',
	Keyboard: 'keyboard'
}

const VIEWER = {
	[VIEWER_ID.Fretboard]: {
		viewerId: VIEWER_ID.Fretboard,
		name: 'Fretboard',
		component: Fretboard
	}
}

const StyledViewerContainer = styled.div`
    width: 100%;
	max-width: 512px;
	margin-top: 16px;
`;

const Viewer = props => {

	const viewer = VIEWER[VIEWER_ID.Fretboard];

	return (
		<div>
			<h2>Viewer</h2>
			<StyledViewerContainer>
				<viewer.component {...props} />
			</StyledViewerContainer>
		</div>
	);
};

export default Viewer;
