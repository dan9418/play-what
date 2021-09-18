import React from "react";
import styled from 'styled-components';
import { IInputProps } from "../../../core/src/models/Model.constants";
import ButtonInput from "./ButtonInput";

export const StyledNumbericInput = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	//border: 2px solid ${({ theme }) => theme.border};
	border-radius: 4px;
	background-color: ${({ theme }) => theme.surface.highlight};

	input, button {
		width: 32px;
		height: 32px;
		padding: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		color: ${({ theme }) => theme.text.dark};
		background-color: ${({ theme }) => theme.surface.highlight};
		&:hover { //:not(:focus) {
			background-color: ${({ theme }) => theme.clickable};
			color: white;
		}
	}

	button {

		&:first-child {
            border-radius: 4px 0 0 4px;
			border-right: 1px solid ${({ theme }) => theme.border};
        }
        &:last-child {
            border-radius: 0 4px 4px 0;
			border-left: 1px solid ${({ theme }) => theme.border};
        }
	}

	input {
		padding: 4px 8px;
		
		cursor: pointer;
		border: none;
		font-weight: bold;
	}
    
	font-size: 110%;
	cursor: pointer;
`;

interface INumericInputProps extends IInputProps {
	min?: number;
	max?: number;
}

const NumericInput: React.FC<INumericInputProps> = ({ value, setValue, ...rest }) => {
	const onChange = e => setValue(parseInt(e.target.value));

	return (
		<StyledNumbericInput>
			<ButtonInput onClick={() => setValue(value - 1)}>-</ButtonInput>
			<input type="number" value={value} onChange={onChange} {...rest} />
			<ButtonInput onClick={() => setValue(value + 1)}>+</ButtonInput>
		</StyledNumbericInput>
	);
}

export default NumericInput;
