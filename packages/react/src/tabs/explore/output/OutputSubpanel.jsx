import React from "react";
import useEditContext from "../../../other/EditContext";
import DropdownInput from "../../../ui/DropdownInput/DropdownInput";
import { VIEWER_VALUES } from "../../../viewers/viewers";
import Subpanel from "../Subpanel";
import styled from 'styled-components';

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

const ViewerBox = ({ defaultProps, component }) => {

	const ViewerComponent = component;

	return (
		<StyledViewerBox>
			<ViewerComponent {...defaultProps} />
		</StyledViewerBox>
	);
};


const OutputSubpanel = ({ name, data, setData, i }) => {
	return (
		<Subpanel
			name={name}
			data={data}
			setData={setData}
			i={i}
		>
			<ViewerBox {...data.value} />
		</Subpanel>
	);
};

export default OutputSubpanel;
