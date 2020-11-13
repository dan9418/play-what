import React from 'react';
import useEditContext from '../../../../other/EditContext';

const getHeaders = (podType, isList, isEditing) => {
	if (!isList) {
		return ['Pod', 'Reduced', 'Preset'];
	}
	else {
		return ['#', 'Pod', 'Reduced', , 'Preset', isEditing ? 'Delete' : undefined];
	}
}

const ValueTableHeader = ({ value, podType, isList }) => {
	const editContext = useEditContext();
	const { isEditing, setIsEditing } = editContext;

	const headers = getHeaders(podType, isList, isEditing);

	return (
		<thead>
			<tr>
				{headers.map((h, i) => <th key={i}>{h}</th>)}
			</tr>
		</thead>
	);
};

export default ValueTableHeader;
