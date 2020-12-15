import { POD_TYPES } from '@pw/core/src/Pod.constants';
import DropdownInput from '@pw/react/src/ui/DropdownInput/DropdownInput';
import React from 'react';
import useEditContext from '../../../../../contexts/EditContext';

const getHeaders = (podType, isEditing) => {
	const result = ['#', 'Pod', 'P', 'O', 'D', podType];
	if (isEditing) {
		result.push('Delete')
	}
	return result;
}

const InputTableHeader = ({ podType }) => {
	const editContext = useEditContext();
	const { isEditing, setIsEditing } = editContext;

	const headers = getHeaders(podType, isEditing);

	return (
		<thead>
			<tr>
				{headers.map((h, i) => <th key={i}>{h}</th>)}
			</tr>
		</thead>
	);
};

export default InputTableHeader;
