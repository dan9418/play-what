import { VIEWER } from "@pw/react";
import React from "react";
import styled from 'styled-components';
import useOutputContext from "../../../../contexts/OutputContext";

const StyledViewerBox = styled.div`
	margin-top: 16px;
	width: 100%;
`;

const ViewerBox = () => {
	const outputContext = useOutputContext();
	const { viewerProps, viewerId } = outputContext.data;

	const ViewerComponent = VIEWER[viewerId].component;

	return (
		<StyledViewerBox>
			<ViewerComponent {...viewerProps} />
		</StyledViewerBox>
	);
};

export default ViewerBox;
