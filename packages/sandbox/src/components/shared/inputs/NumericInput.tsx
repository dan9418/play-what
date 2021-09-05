import React from "react";
import styled from 'styled-components';
import { IInputProps } from "../../../../../core/src/models/Model.constants";

export const StyledNumbericInput = styled.input`
	max-width: 64px;
    padding: 4px;
    border-radius: 4px;
    border: none;
	background-color: ${({ theme }) => theme.surface.highlight};
`;

interface INumericInputProps extends IInputProps {
	min?: number;
	max?: number;
}

const NumericInput: React.FC<INumericInputProps> = ({ value, setValue, ...rest }) => {
	const onChange = e => setValue(parseInt(e.target.value));

	return (
		<StyledNumbericInput type="number" value={value} onChange={onChange} {...rest} />
	);
}

export default NumericInput;
