import React from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Fretboard from '../../../../../../react/src/Fretboard/Fretboard';
import Keyboard from '../../../../../../react/src/Keyboard/Keyboard';
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
	},
	[VIEWER_ID.Keyboard]: {
		viewerId: VIEWER_ID.Fretboard,
		name: 'Keyboard',
		component: Keyboard
	}
}

const StyledViewerContainer = styled.div`
    width: 100%;
	padding: 16px;
`;

const Viewer = () => {

	const [pathHead, setPathHead] = useRecoilState(pathHeadState);

	const { modelId, modelValue, modelOptions } = (pathHead as IPathNode).config;

	const { viewerId, viewerProps } = modelOptions;

	const labelProps = { modelId, modelValue, modelOptions };

	const ViewerComponent: any = VIEWER[viewerId].component;

	return (
		<StyledViewerContainer>
			<ViewerComponent {...viewerProps} labelProps={labelProps} />
		</StyledViewerContainer>
	);
};

export default Viewer;
