import { IModelConfig } from "@pw/core/src/models/Model.constants";
import { hoveredIndexState } from "@pw/sandbox/src/state/dataState";
import React from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { matchOctaveState } from '../../../../state/pathState';
import { VIEWER } from "./actions/viewerActions";

const StyledViewerContainer = styled.div`
    width: 100%;
	padding: 16px;
	overflow: auto;
`;

interface IViewerProps {
	modelConfig: IModelConfig
}

const Viewer: React.FC<IViewerProps> = ({ modelConfig }) => {

	const matchOctave = useRecoilValue(matchOctaveState);
	const [hoveredIndex, setHoveredIndex] = useRecoilState(hoveredIndexState);

	const { modelId, modelValue } = modelConfig;
	const { viewerId, viewerProps } = { viewerId: VIEWER.fretboard.id, viewerProps: {} };

	const labelProps = {
		modelId,
		modelValue,
		matchOctave,
		hoveredIndex,
		setHoveredIndex
	};

	const ViewerComponent = VIEWER[viewerId].component;

	return (
		<StyledViewerContainer>
			<ViewerComponent {...viewerProps} labelProps={labelProps} />
		</StyledViewerContainer>
	);
};

export default Viewer;
