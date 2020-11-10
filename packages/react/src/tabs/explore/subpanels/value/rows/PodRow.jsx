import pw_core from "@pw/core";
import Pod from "@pw/core/src/modules/models/pod/Pod";
import React from 'react';
import DropdownInput from '../../../../../ui/DropdownInput/DropdownInput';


const PodRow = ({ pod, setPod, isEditing }) => {

	const raw = pod.getValue();
	const reduced = new Pod(raw).reduce().getValue();

	return (
		<tr>
			<td>
				{JSON.stringify(raw)}
			</td>
			<td>
				{JSON.stringify(reduced)}
			</td>
			<td>
				{isEditing ?
					<DropdownInput options={[]} value={null} setValue={null} />
					:
					pod.getName()}
			</td>
		</tr>
	);
};

export default PodRow;
