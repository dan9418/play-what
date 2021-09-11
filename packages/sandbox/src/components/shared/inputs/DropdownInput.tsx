import React from "react";
import styled from 'styled-components';
import { IInputProps } from "../../../../../core/src/models/Model.constants";

const StyledDropdownInput = styled.select`
	height: 40px;
	font-size: 16px;
    min-width: 128px;

	padding: 0 8px;

    cursor: pointer;
    border-radius: 4px;
	background-color: ${({ theme }) => theme.surface.highlight};;
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
