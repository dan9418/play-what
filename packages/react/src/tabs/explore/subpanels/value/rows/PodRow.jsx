import PodUtils from "@pw/core/src/modules/models/pod/PodUtils";
import React from 'react';
import useEditContext from "../../../../../other/EditContext";
import DropdownInput from '../../../../../ui/DropdownInput/DropdownInput';


const PodRow = ({ pod, setPod, podType }) => {

	const editContext = useEditContext();
	const { isEditing } = editContext;

	const reduced = PodUtils.reduce(pod);

	return (
		<tr>
			<td>
				{JSON.stringify(pod)}
			</td>
			<td>
				{JSON.stringify(reduced)}
			</td>
			<td>
				{isEditing ?
					<DropdownInput options={[]} value={null} setValue={null} />
					:
					PodUtils.getPreview(reduced)}
			</td>
		</tr>
	);
};

export default PodRow;
