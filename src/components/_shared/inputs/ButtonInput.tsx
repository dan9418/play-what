import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
	cursor: pointer;
    border: none;
    border-radius: 4px;
	font-size: 110%;
    padding: 8px 16px;
	color: ${({ theme }) => theme.white};
	background-color: ${({ $isActive, theme }) => $isActive ? theme.medium : theme.state.interactive};

	&:hover {
		opacity: .9;
	}
`;

const ButtonInput = props => {
	const { disabled, onClick, children, isActive, hoverable, className } = props;

	const hov = onClick || hoverable;
	const isDisabled = disabled || false;
	const clickHander = onClick || (() => null);

	return (
		<StyledButton type='button' disabled={isDisabled} onClick={clickHander} $isActive={isActive} className={className}>{children}</StyledButton>
	);
}

export default ButtonInput;
