import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	cursor: pointer;
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 4px 8px;
	color: white;
	background-color: ${({ $isActive, theme }) => $isActive ? theme.primary : theme.accent}
`;

const ButtonInput = props => {
	const { disabled, onClick, children, isActive, hoverable } = props;

	const hov = onClick || hoverable;
	const isDisabled = disabled || false;
	const clickHander = onClick || (() => null);

	return (
		<StyledButton type='button' disabled={isDisabled} onClick={clickHander} $isActive={isActive}>{children}</StyledButton>
	);
}

export default ButtonInput;
