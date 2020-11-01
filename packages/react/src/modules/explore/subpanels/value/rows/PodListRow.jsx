import React from 'react';
import ButtonInput from '../../../../ui/ButtonInput/ButtonInput';
import DropdownInput from '../../../../ui/DropdownInput/DropdownInput';

const PodListRow = ({ pod, setPod, podList, setPodList, i, isEditing, remove, moveUp, moveDown }) => {

	return (
		<tr key={i}>
			<td>
				{i}
			</td>
			<td>
				{JSON.stringify(pod.getValue())}
			</td>
			<td>
				{JSON.stringify(pod.getValue())}
			</td>
			<td>
				{isEditing ?
					<DropdownInput options={[]} value={null} setValue={null} />
					:
					pod.getName()}
			</td>
			<td>
				1:1
			</td>
			{isEditing && (
				<>
					<td>
						<ButtonInput onClick={remove}>X</ButtonInput>
					</td>
					<td>
						<ButtonInput onClick={moveUp}>^</ButtonInput>
						<ButtonInput onClick={moveDown}>v</ButtonInput>
					</td>
				</>
			)}
		</tr>
	);
};

export default PodListRow;
