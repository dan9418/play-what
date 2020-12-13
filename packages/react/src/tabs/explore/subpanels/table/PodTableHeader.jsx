import { POD_TYPES } from '@pw/core/src/Pod.constants';
import React from 'react';
import useEditContext from '../../../../../other/EditContext';
import DropdownInput from '../../../../../ui/DropdownInput/DropdownInput';

const PodTypeCell = () => {
	const setPods = null;
	const podType = 'interval';
	const editContext = useEditContext();
	const { isEditing, setIsEditing } = editContext;

	const podTypeDef = POD_TYPES.find(o => o.id == podType)
	const setHelper = v => setPodType(v.id);

	return (
		isEditing ? <DropdownInput options={POD_TYPES} value={podTypeDef} setValue={setHelper} /> : podTypeDef.name
	);
}

const getHeaders = (podType, isEditing) => {
	const result = ['#', 'Pod', 'P', 'O', 'D', <PodTypeCell />];
	if (isEditing) {
		result.push('Delete')
	}
	return result;
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
