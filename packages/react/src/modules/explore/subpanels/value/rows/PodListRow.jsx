import React from 'react';
import ButtonInput from '../../../../ui/ButtonInput/ButtonInput';
import DropdownInput from '../../../../ui/DropdownInput/DropdownInput';

const PodListRow = ({ value, setValue, i, isEditing }) => {

	const podList = value.getValue();
	const pod = podList[i];

	const remove = () => setValue([...podList.slice(0, i), ...podList.slice(i + 1)]);
	const moveUp = () => setValue([...podList.slice(0, i - 1), podList[i], podList[i - 1], ...podList.slice(i + 1)]);
	const moveDown = () => setValue([...podList.slice(0, i), podList[i + 1], podList[i], ...podList.slice(i + 2)]);
	const setPod = r => setValue([...podList.slice(0, i), r, ...podList.slice(i + 1)]);

	const raw = JSON.stringify(podList);
	value.reduce();
	const reduced = JSON.stringify(podList);

	return (
		<tr key={i}>
			<td>
				{i}
			</td>
			<td>
				{raw}
			</td>
			<td>
				{reduced}
			</td>
			{isEditing ?
				<>
					<td>
						<DropdownInput options={[]} value={null} setValue={null} />
					</td>
					<td>
						<ButtonInput onClick={remove}>X</ButtonInput>
					</td>
					<td>
						<ButtonInput onClick={moveUp}>^</ButtonInput>
						<ButtonInput onClick={moveDown}>v</ButtonInput>
					</td>
				</>
				:
				<td>
					{value.getName()}
				</td>
			}
		</tr>
	);
};

export default PodListRow;
