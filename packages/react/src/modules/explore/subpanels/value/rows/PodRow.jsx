import pw_core from "@pw/core";
import React from 'react';
import DropdownInput from '../../../../ui/DropdownInput/DropdownInput';


const PodRow = ({ pod, setPod, isEditing }) => {

	const raw = JSON.stringify(pod.getValue());
	pod.reduce();
	const reduced = JSON.stringify(pod.getValue());

	return (
		<tr>
			<td>
				{raw}
			</td>
			<td>
				{reduced}
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
