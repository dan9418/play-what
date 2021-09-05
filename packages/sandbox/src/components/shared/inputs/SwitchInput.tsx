import React from "react";
import styled from 'styled-components';
import { IInputProps } from "../../../../../core/src/models/Model.constants";

const StyledSwitch = styled.button`
	border: none;

	-ms-user-select: none;
    user-select: none;
    height: 24px;
    width: 48px;
    border-radius: 24px;
	display: inline-flex;
    align-items: center;
	cursor: pointer;
	
	justify-content: ${({ $active }) => $active ? 'flex-end' : 'flex-start'};	
	background-color: ${({ $active, theme }) => $active ? theme.active : theme.surface.highlight};	
	&:hover {
		background-color: ${({ theme }) => theme.clickable};	
	}

	& .ball {
		height: 16px;
		width: 16px;
		margin: 4px;
		border-radius: 100%;
		background-color: #fff;
	}
`;


interface ISwitchInputProps extends IInputProps {
	value: boolean;
	setValue: (boolean) => void;
}

const SwitchInput: React.FC<ISwitchInputProps> = ({ value, setValue }) => {
	return (
		<StyledSwitch $active={value} onClick={() => setValue(!value)}>
			<div className='ball' />
		</StyledSwitch>
	);
}

export default SwitchInput;
