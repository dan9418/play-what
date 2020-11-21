import { POD_TYPES } from '@pw/core/src/Pod.constants';
import React from 'react';
import useEditContext from '../../../../../other/EditContext';
import usePodContext from '../../../../../other/PodContext';
import DropdownInput from '../../../../../ui/DropdownInput/DropdownInput';

const PodTypeCell = () => {
	const podContext = usePodContext();
	const { podType, setPodType } = podContext;
	const editContext = useEditContext();
	const { isEditing, setIsEditing } = editContext;

	const podTypeDef = POD_TYPES.find(o => o.id == podType)
	const setHelper = v => setPodType(v.id);

	return (
		isEditing ? <DropdownInput options={POD_TYPES} value={podTypeDef} setValue={setHelper} /> : podTypeDef.name
	);
}

const getHeaders = (podType, isEditing) => {
	return ['#', 'Pod', 'P', 'O', 'D', <PodTypeCell />, isEditing ? 'Delete' : undefined];
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
