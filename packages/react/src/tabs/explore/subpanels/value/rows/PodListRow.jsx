import React from 'react';
import ButtonInput from '../../../../../ui/ButtonInput/ButtonInput';
import DropdownInput from '../../../../../ui/DropdownInput/DropdownInput';
import pw_core from '@pw/core';
import Pod from '@pw/core/src/modules/models/pod/Pod';
import NumericInput from '../../../../../ui/NumericInput/NumericInput';
import useEditContext from '../../../../../other/EditContext';
import PodListUtils from '@pw/core/src/modules/models/podList/PodListUtils';
import PodUtils from '@pw/core/src/modules/models/pod/PodUtils';

const PresetCell = ({ value, isEditing, podType }) => {
	return <td>{
		isEditing ? <DropdownInput options={[]} value={null} setValue={null} /> :
			<>{'n/a'}</>
	}</td>
}

const PodListRow = ({ i, podList, setPodList, type }) => {

	const editContext = useEditContext();
	const { isEditing } = editContext;

	const raw = podList[i];
	const reduced = PodUtils.reduce(raw);

	const remove = () => setPodList([...podList.slice(0, i), ...podList.slice(i + 1)]);
	const moveUp = () => setPodList([...podList.slice(0, i - 1), podList[i], podList[i - 1], ...podList.slice(i + 1)]);
	const moveDown = () => setPodList([...podList.slice(0, i), podList[i + 1], podList[i], ...podList.slice(i + 2)]);
	const setPod = r => setPodList([...podList.slice(0, i), r, ...podList.slice(i + 1)]);
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
						<NumericInput value={i} setValue={onChange} />
						: i
				}
			</td>
			<td>
				{JSON.stringify(raw)}
			</td>
			<td>
				{JSON.stringify(reduced)}
			</td>
			<PresetCell value={reduced} isEditing={isEditing} type={type} />
			{isEditing &&
				<td>
					<ButtonInput onClick={remove}>X</ButtonInput>
				</td>
			}
		</tr>
	);
};

export default PodListRow;
