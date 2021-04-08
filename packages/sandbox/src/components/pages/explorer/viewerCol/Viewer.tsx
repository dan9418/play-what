import { MODEL_ID } from "@pw/core/src/models/Model.constants";
import React from "react";
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { matchOctaveState } from '../../../../state/pathState';
import { VIEWER } from "./actions/viewerActions";

const StyledViewerContainer = styled.div`
    width: 100%;
	padding: 16px;
`;

const Viewer = ({ modelConfig }) => {

	const matchOctave = useRecoilValue(matchOctaveState);

	const { modelId, modelValue, modelOptions } = modelConfig;
	const { viewerId, viewerProps } = modelOptions || { viewerId: VIEWER.fretboard.id, viewerProps: {} };

	const isBlank = modelId === MODEL_ID.Group;

	const labelProps = {
		modelId: isBlank ? MODEL_ID.Chord : modelId,
		modelValue: isBlank ? [] : modelValue,
		modelOptions,
		matchOctave
	};

	const ViewerComponent = VIEWER[viewerId].component;

	return (
		<StyledViewerContainer>
			<ViewerComponent {...viewerProps} labelProps={labelProps} />
		</StyledViewerContainer>
	);
};

export default Viewer;
