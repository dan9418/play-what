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

const StyledEditDetails = styled.div`
	margin-top: 8px;
	width: 100%;
	background-color: #eee;
	padding: 8px;
	border-radius: 8px;
	position: relative;

	& .close {
		position: absolute;
		top: 8px;
		right: 8px;
	}
`;

const StyledInputModeSwitch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
	margin-left: auto;

    & > * {
        margin: 8px;
    }
`;

const PodTypeSwitch = () => {
	const { podType, setPodType } = useInputContext();
	const value = podType === 'interval';
	const setValue = v => setPodType(v ? 'interval' : 'note');
	return (
		<StyledInputModeSwitch>
			<span>Notes</span>
			<SwitchInput value={value} setValue={setValue} />
			<span>Intervals</span>
		</StyledInputModeSwitch>
	);
};

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
