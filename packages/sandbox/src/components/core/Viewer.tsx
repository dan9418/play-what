import React from "react";
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
	padding: 16px;
`;

const viewer = VIEWER[VIEWER_ID.Fretboard];

const Viewer = ({ modelId, modelValue, modelOptions }) => {

	const labelProps = { modelId, modelValue, modelOptions };

	return (
		<StyledViewerContainer>
			<viewer.component labelProps={labelProps} />
		</StyledViewerContainer>
	);
};

export default Viewer;
