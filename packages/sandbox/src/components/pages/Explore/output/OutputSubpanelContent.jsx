import CloseButton from "@pw/react/src/ui/ButtonInput/CloseButton";
import TextButton from "@pw/react/src/ui/ButtonInput/TextButton";
import SwitchInput from "@pw/react/src/ui/SwitchInput/SwitchInput";
import React, { useState } from "react";
import styled from 'styled-components';
import useInputContext from "../../../../contexts/InputContext";
import PresetBox from "./PresetBox";
import InputTable from "./table/InputTable";

const StyledEditBar = styled.div`
	width: 100%;
	display: flex;
	background-color: #eee;
	padding: 8px;
	border-radius: 8px;
`;

const EDIT_MODE = {
	None: 0,
	Preset: 1,
	Transform: 2
};

const InputSubpanelContent = () => {

	const [editMode, setEditMode] = useState(EDIT_MODE.None);

	return (
		<>
			{editMode === EDIT_MODE.None ?
				<StyledEditBar>
					<TextButton onClick={() => setEditMode(EDIT_MODE.Preset)}>Import Preset</TextButton>
					<TextButton onClick={() => setEditMode(EDIT_MODE.Transform)}>Transform</TextButton>
					<PodTypeSwitch />
				</StyledEditBar>
				:
				<StyledEditDetails>
					<CloseButton onClick={() => setEditMode(EDIT_MODE.None)} />
					{editMode === EDIT_MODE.Preset && <PresetBox />}
					{editMode === EDIT_MODE.Transform && "Coming Soon!!!"}
				</StyledEditDetails>
			}
			<InputTable />
		</>
	);
};

export default InputSubpanelContent;
