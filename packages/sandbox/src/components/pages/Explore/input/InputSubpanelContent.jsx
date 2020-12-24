import ButtonInput from "@pw/react/src/ui/ButtonInput/ButtonInput";
import CloseButton from "@pw/react/src/ui/ButtonInput/CloseButton";
import TextButton from "@pw/react/src/ui/ButtonInput/TextButton";
import SwitchInput from "@pw/react/src/ui/SwitchInput/SwitchInput";
import React, { useState } from "react";
import styled from 'styled-components';
import useEditContext from "../../../../contexts/EditContext";
import useInputContext from "../../../../contexts/InputContext";
import useSubpanelContext from "../../../../contexts/InputContext";
import SubpanelConfigRow from "../SubpanelConfigRow";
import PresetBox from "./PresetBox";
import InputTable from "./table/InputTable";

const StyledDiv = styled.div`
	width: 100%;
`;

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

const InputModeSwitch = ({ value, setValue }) => (
	<StyledInputModeSwitch>
		Notes
		<SwitchInput value={value === 'interval'} setValue={setValue} />
		Intervals
	</StyledInputModeSwitch>
);

const EDIT_MODE = {
	None: 0,
	Preset: 1,
	Transform: 2
};

const InputSubpanelContent = () => {

	const [editMode, setEditMode] = useState(EDIT_MODE.None);

	const { data, setData } = useInputContext();
	const hasKey = !!data.keyCenter;
	const podType = hasKey ? 'interval' : 'note';
	const setHasKey = () => {
		if (hasKey) setData({ ...data, keyCenter: null });
		else setData({ ...data, keyCenter: [0, 0], intervals: data.notes, notes: null });
	}

	return (
		<StyledDiv>
			{editMode === EDIT_MODE.None ?
				<StyledEditBar>
					<TextButton onClick={() => setEditMode(EDIT_MODE.Preset)}>Import Preset</TextButton>
					<TextButton onClick={() => setEditMode(EDIT_MODE.Transform)}>Transform</TextButton>
					<InputModeSwitch value={podType} setValue={setHasKey} />
				</StyledEditBar>
				:
				<StyledEditDetails>
					<CloseButton onClick={() => setEditMode(EDIT_MODE.None)} />
					{editMode === EDIT_MODE.Preset && <PresetBox />}
					{editMode === EDIT_MODE.Transform && "Coming Soon!!!"}
				</StyledEditDetails>
			}
			<InputTable podType={podType} />
		</StyledDiv>
	);
};

export default InputSubpanelContent;
