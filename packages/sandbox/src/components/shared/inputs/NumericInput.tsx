import React from "react";
import styled from 'styled-components';

export const StyledNumbericInput = styled.input`
	max-width: 64px;
    padding: 4px;
    border-radius: 4px;
    border: none;
	background-color: #ddd;
`;

const NumericInput = ({ value, setValue, ...rest }) => {
	const onChange = e => setValue(parseInt(e.target.value));

	return (
		<StyledNumbericInput type="number" value={value} onChange={onChange} {...rest} />
	);
}

export default NumericInput;
