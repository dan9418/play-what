import React from 'react';
import ButtonInput from '../../../../ui/ButtonInput/ButtonInput';
import DropdownInput from '../../../../ui/DropdownInput/DropdownInput';
import pw_core from '@pw/core';

const PodListRow = ({ value, setValue, i, isEditing }) => {

	const podList = value.getValue();
	const pod = new pw_core.Pod(podList[i]);

	const remove = () => setValue(new pw_core.Pod([...podList.slice(0, i), ...podList.slice(i + 1)]));
	const moveUp = () => setValue(new pw_core.Pod([...podList.slice(0, i - 1), podList[i], podList[i - 1], ...podList.slice(i + 1)]));
	const moveDown = () => setValue(new pw_core.Pod([...podList.slice(0, i), podList[i + 1], podList[i], ...podList.slice(i + 2)]));
	const setPod = r => setValue([...podList.slice(0, i), r, ...podList.slice(i + 1)]);

	const raw = JSON.stringify(pod.getValue());
	pod.reduce();
	const reduced = JSON.stringify(pod.getValue());

	const onChange = e => {
		const v = e.target.value;
		if (v > i) moveUp();
		if (v < i) moveDown();
	}

	return (
		<tr key={i}>
			<td>
				{
					isEditing ?
						<input type="number" value={i} onChange={onChange} />
						: i
				}
			</td>
			<td>
				{raw}
			</td>
			<td>
				{reduced}
			</td>
			<td>
				{
					isEditing ?
						<DropdownInput options={[]} value={null} setValue={null} />
						: value.getName()
				}
			</td>
			{isEditing &&
				<td>
					<ButtonInput onClick={remove}>X</ButtonInput>
				</td>
			}
		</tr>
	);
};

export default PodListRow;
