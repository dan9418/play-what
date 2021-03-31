import { MODEL_ID } from "@pw/core/src/models/Model.constants";
import React from "react";
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { IPathNode, pathHeadState } from '../../../../state/pathState';
import { VIEWER } from "./actions/viewerActions";

const StyledViewerContainer = styled.div`
    width: 100%;
	margin-bottom: 16px;
`;

const Viewer = ({ isBlank }) => {

	const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);

	const { modelId, modelValue, modelOptions } = (pathHead as IPathNode).config;

	const { viewerId, viewerProps } = modelOptions;

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
