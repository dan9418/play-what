import React from 'react';
import styled from 'styled-components';

const StyledTextButton = styled.button`
	cursor: pointer;
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 4px 8px;
	background-color: transparent;
	color: ${({ theme }) => theme.accent};

	&:hover {
		background-color: #eee;
	}
`;

const TextButton = props => {
	return (
		<StyledTextButton
			type='button'
			{...props}
		/>
	);
}

export default TextButton;
