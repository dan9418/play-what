import React from "react";
import styled from 'styled-components';
import useEditContext from "../../../other/EditContext";
import useSubpanelContext from "../../../other/SubpanelContext";
import DropdownInput from "../../../ui/DropdownInput/DropdownInput";
import { VIEWER_VALUES } from "../../../viewers/viewers";

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
	const { defaultProps, component } = subpanelContext.data.value;

	const ViewerComponent = component;

	return (
		<StyledViewerBox>
			<ViewerComponent {...defaultProps} />
		</StyledViewerBox>
	);
};

export default ViewerBox;
