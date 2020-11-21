import React from 'react';
import useEditContext from '../../../../../other/EditContext';

const getHeaders = (podType, isEditing) => {
	return ['#', 'Pod', 'Pitch', 'Octave', 'Degree', 'Preset', isEditing ? 'Delete' : undefined];
}

const PodTableHeader = ({ podType }) => {
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

export default PodTableHeader;
