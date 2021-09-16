import React from "react";
import styled from 'styled-components';
import { IInputProps } from "../../../../../core/src/models/Model.constants";

const StyledDropdownInput = styled.select`
	font-size: 110%;
    min-width: 128px;

	padding: 4px 8px;

    cursor: pointer;
    border-radius: 4px;
	background-color: ${({ theme }) => theme.surface.highlight};
	&:hover:not(:focus) {
		background-color: ${({ theme }) => theme.clickable};
		color: white;
	}

	option {
		cursor: pointer;
	}
	
    border: none;
`;

interface IDropdownInputProps extends IInputProps {
	options: any[];
	idProperty?: string;
	displayProperty?: string;
}

const DropdownInput: React.FC<IDropdownInputProps> = props => {
	const { value, setValue, options, idProperty, displayProperty } = props;

	return (
		<StyledDropdownInput
			className='dropdown-input'
			onChange={e => setValue(options[e.target.selectedIndex], e.target.selectedIndex)}
			value={value ? value[idProperty || 'id'] : ''}
		>
			{(options || []).map((v, i) => (
				<option key={i} value={v[idProperty || 'id']}>{displayProperty ? v[displayProperty] : v.name}</option>
			))}
		</StyledDropdownInput>
	);
}

export default DropdownInput;