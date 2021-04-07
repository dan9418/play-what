import { IModelDef, MODEL_ID } from "@pw/core/src/models/Model.constants";
import React from "react";
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { pathHeadState } from '../../../../state/pathState';
import { VIEWER } from "./actions/viewerActions";

const StyledViewerContainer = styled.div`
    width: 100%;
	padding: 16px;
`;

const Viewer = ({ modelConfig }) => {

	const { modelId, modelValue, modelOptions } = modelConfig;
	const { viewerId, viewerProps } = modelOptions;

	const isBlank = modelId === MODEL_ID.Group;

	const labelProps = {
		modelId: isBlank ? MODEL_ID.Chord : modelId,
		modelValue: isBlank ? [] : modelValue,
		modelOptions
	};

	const ViewerComponent = VIEWER[viewerId].component;

	return (
		<StyledViewerContainer>
			<ViewerComponent {...viewerProps} labelProps={labelProps} />
		</StyledViewerContainer>
	);
};

export default Viewer;
