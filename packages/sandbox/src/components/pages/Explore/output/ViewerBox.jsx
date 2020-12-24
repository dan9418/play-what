import React from "react";
import styled from 'styled-components';
import useEditContext from "../../../../contexts/EditContext";
import useSubpanelContext from "../../../../contexts/InputContext";
import { VIEWER_VALUES, DropdownInput, VIEWER } from "@pw/react";

const StyledViewerBox = styled.div`
	margin-top: 16px;
	width: 100%;
`;

const StyledInputBar = styled.div`
	display: flex;
    justify-content: space-between;
    align-items: center;
	padding: 8px;
	
	& .input-bar:not(:first-child) {
		border-top: 1px solid #ddd;
	}

	& .input-bar> :first-child {
		width: 100%;
	}

	& .input-bar>span {
		padding: 4px;
	}
`;

const ViewerBar = () => {
	const { isEditing } = useEditContext();

	return (
		<StyledInputBar>
			<div>Component</div>
			{isEditing ?
				<DropdownInput options={VIEWER_VALUES} value={viewerDef} setValue={setViewerDef} />
				: viewerDef.name}
		</StyledInputBar>
	);
};

const ViewerBox = () => {
	const subpanelContext = useSubpanelContext();
	const { viewerProps, viewerId } = subpanelContext.data;

	const ViewerComponent = VIEWER[viewerId].component;

	return (
		<StyledViewerBox>
			<ViewerComponent {...viewerProps} />
		</StyledViewerBox>
	);
};

export default ViewerBox;
