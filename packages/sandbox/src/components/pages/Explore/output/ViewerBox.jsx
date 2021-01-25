import { VIEWER } from "@pw/react";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import { outputState } from "../../../../state/state";

const StyledViewerBox = styled.div`
	margin-top: 16px;
	width: 100%;
`;

const ViewerBox = props => {
	const { viewerProps, viewerId } = useRecoilValue(outputState);

	const ViewerComponent = VIEWER[viewerId].component;

	return (
		<StyledViewerBox>
			<ViewerComponent {...viewerProps} />
		</StyledViewerBox>
	);
};

export default ViewerBox;
