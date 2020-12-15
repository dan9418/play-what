import React from "react";
import styled from 'styled-components';
import useEditContext from "../../../../contexts/EditContext";
import PresetBox from "./PresetBox";
import InputTable from "./table/InputTable";

const StyledDiv = styled.div`
	width: 100%;
`;

const InputSubpanelContent = () => {
	const { isEditing } = useEditContext();

	return (
		<StyledDiv>
			<InputTable />
			<PresetBox />
		</StyledDiv>
	);
};

export default InputSubpanelContent;
