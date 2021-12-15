import React from "react";
import styled from 'styled-components';
import Icon from "../ui/Icon";
import ButtonInput from "./ButtonInput";
import { IInputProps } from "./Input.constants";

export const StyledNumbericInput = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	input, button {
		width: 48px;
		height: 48px;
		padding: 0;

		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;

		color: ${({ theme }) => theme.state.interactive};
		background-color: ${({ theme }) => theme.white};
		&:hover {
			background-color: ${({ theme }) => theme.light2};
		}
	}

	button {
		svg, svg * {
			fill: ${({ theme }) => theme.state.interactive};
		}
	}

	input {
		cursor: pointer;
		border: none;
		font-weight: bold;
		text-align: center;

		border: 1px solid ${({ theme }) => theme.state.interactive};
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
			<ButtonInput onClick={() => setValue(value - 1)}><Icon iconId="minus" /></ButtonInput>
			<input type="number" value={value} onChange={onChange} {...rest} />
			<ButtonInput onClick={() => setValue(value + 1)}><Icon iconId="plus" /></ButtonInput>
		</StyledNumbericInput>
	);
}

export default NumericInput;
