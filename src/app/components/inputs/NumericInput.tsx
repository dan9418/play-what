import React from "react";
import styled from 'styled-components';
import Icon from "../ui/Icon";
import ButtonInput from "./ButtonInput";

export const StyledNumbericInput = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	input, button {
		height: 32px;
		padding: 0;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	button {
		width: 32px;
		border: 1px solid ${({ theme }) => theme.utils.border};
		svg, svg * {
			fill: white;
		}

		background-color: ${({ theme }) => theme.status.interactive};
		color: white;
		&:hover {
			background-color: ${({ theme }) => theme.status.active};
		}

		:first-child {
			border-right: none;
			border-radius: 8px 0 0 8px;
		}
		:last-child {
			border-left: none;
			border-radius: 0 8px 8px 0
		}
	}

	input {
		width: 48px;
		cursor: pointer;
		border: none;
		font-weight: bold;
		text-align: center;
		background-color: white;
		&:hover {
			background-color: ${({ theme }) => theme.status.highlight};
		}

		border: 1px solid ${({ theme }) => theme.utils.border};
	}
    
	font-size: 110%;
	cursor: pointer;
`;

interface INumericInputProps {
	value: number;
	setValue: (number) => void;
	min?: number;
	max?: number;
}

const NumericInput: React.FC<INumericInputProps> = ({ value, setValue, ...rest }) => {
	const onChange = e => setValue(parseInt(e.target.value));

	const onDown = () => {
		let newVal = value - 1;
		if (typeof rest.min !== 'undefined') {
			newVal = Math.max(rest.min, newVal);
		}
		setValue(newVal);
	};

	const onUp = () => {
		let newVal = value + 1;
		if (typeof rest.max !== 'undefined') {
			newVal = Math.min(rest.max, newVal);
		}
		setValue(newVal);
	};

	return (
		<StyledNumbericInput>
			<ButtonInput onClick={onDown}><Icon iconId="minus" size={12} /></ButtonInput>
			<input type="number" value={value} onChange={null} {...rest} />
			<ButtonInput onClick={onUp}><Icon iconId="plus" size={12} /></ButtonInput>
		</StyledNumbericInput>
	);
}

export default NumericInput;
