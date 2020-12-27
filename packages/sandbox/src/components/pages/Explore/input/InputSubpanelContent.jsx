import SwitchInput from "@pw/react/src/ui/SwitchInput/SwitchInput";
import React, { useState } from "react";
import styled from 'styled-components';
import useInputContext from "../../../../contexts/InputContext";
import EditBox from "../EditBox";
import PresetBox from "./PresetBox";
import InputTable from "./table/InputTable";

const StyledInputModeSwitch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
	margin-left: auto;
	font-size: 80%;

    & > * {
        margin: 0 4px;
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

const ACTIONS = [
	{
		id: 'preset',
		text: 'Import Preset',
		component: <PresetBox />
	},
	{
		id: 'transform',
		text: 'Transform',
		component: <div />
	}
];

const InputSubpanelContent = () => {
	const [action, setAction] = useState(null);

	return (
		<>
			<EditBox leftActions={ACTIONS} action={action} setAction={setAction} rightAction={<PodTypeSwitch />} />
			<InputTable />
		</>
	);
};

export default InputSubpanelContent;
