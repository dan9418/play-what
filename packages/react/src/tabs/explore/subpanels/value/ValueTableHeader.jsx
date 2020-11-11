import React from 'react';
import pw_core from '@pw/core';
import usePodContext from "../../../../other/PodContext";
import useEditContext from '../../../../other/EditContext';

const getHeaders = (type, isEditing) => {
	if (type === 'keyCenter') {
		return ['Pod', 'Reduced', 'Preset'];
	}
	else if (type === 'intervals' || type === 'notes') {
		return ['#', 'Pod', 'Reduced', , 'Preset', isEditing ? 'Delete' : undefined];
	}
	else
		return [];
}

const ValueTableHeader = ({ value, type }) => {
	const editContext = useEditContext();
	const { isEditing, setIsEditing } = editContext;

	const headers = getHeaders(type, isEditing);

	return (
		<thead>
			<tr>
				{headers.map(h => <th key={h}>{h}</th>)}
			</tr>
		</thead>
	);
};

export default ValueTableHeader;
