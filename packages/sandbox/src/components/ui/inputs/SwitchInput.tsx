import React from "react";
import styled from 'styled-components';

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
	background-color: ${({ $active, theme }) => $active ? theme.accent : theme.light};	
	&:hover {
		background-color: ${({ theme }) => theme.active};	
	}

	& .ball {
		height: 20px;
		width: 20px;
		margin: 2px;
		border-radius: 100%;
		background-color: #fff;
	}
`;


interface ISwitchInputProps {
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
