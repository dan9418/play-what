import React from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Fretboard from '../../../../../../react/src/Fretboard/Fretboard';
import { IPathNode, pathHeadState, pathState } from '../../../../state/pathState';

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
	padding: 16px;
`;

const viewer = VIEWER[VIEWER_ID.Fretboard];

const Viewer = () => {

	const [pathHead, setPathHead] = useRecoilState(pathHeadState);

	const { modelId, modelValue, modelOptions } = (pathHead as IPathNode).config;

	const labelProps = { modelId, modelValue, modelOptions };

	return (
		<StyledViewerContainer>
			<viewer.component labelProps={labelProps} />
		</StyledViewerContainer>
	);
};

export default Viewer;
