import SwitchInput from "@pw/react/src/ui/SwitchInput/SwitchInput";
import React from "react";
import styled from 'styled-components';

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

const PodTypeSwitch = ({ podType, setPodType }) => {
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
