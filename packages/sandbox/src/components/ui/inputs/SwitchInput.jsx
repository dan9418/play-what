import * as React from 'react';
import styled from 'styled-components';

const StyledSwitch = styled.button`
	border: none;

	-ms-user-select: none;
    user-select: none;
    height: 16px;
    width: 48px;
    border-radius: 16px;
	display: inline-flex;
    align-items: center;
	cursor: pointer;
	
	justify-content: ${({ $active }) => $active ? 'flex-end' : 'flex-start'};	
	background-color: ${({ $active, theme }) => $active ? theme.active : '#555'};	

	& .ball {
		height: 12px;
		width: 12px;
		margin: 2px;
		border-radius: 100%;
		background-color: #fff;
	}
`;


const SwitchInput = ({ value, setValue }) => {
	return (
		<StyledSwitch $active={value} onClick={() => setValue(!value)}>
			<div className='ball' />
		</StyledSwitch>
	);
}

export default SwitchInput;
