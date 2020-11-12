import PodUtils from '@pw/core/src/modules/models/pod/PodUtils';
import { findPodTypePreset, getPodTypePresets } from '@pw/core/src/modules/theory/podConfig';
import React from 'react';
import useEditContext from '../../../../../other/EditContext';
import ButtonInput from '../../../../../ui/ButtonInput/ButtonInput';
import DropdownInput from '../../../../../ui/DropdownInput/DropdownInput';
import NumericInput from '../../../../../ui/NumericInput/NumericInput';

const PresetCell = ({ value, isEditing, podType }) => {
	const presets = getPodTypePresets(podType);
	const preset = findPodTypePreset(value, podType);
	const presetName = preset ? preset.id : '?';

	return (
		<td>
			{isEditing ? <DropdownInput options={presets} value={preset} setValue={null} displayProperty="id" /> : presetName}
		</td>
	)
}

const PodListRow = ({ i, podList, setPodList, podType }) => {

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
			<PresetCell value={reduced} isEditing={isEditing} podType={podType} />
			{isEditing &&
				<td>
					<ButtonInput onClick={remove}>X</ButtonInput>
				</td>
			}
		</tr>
	);
};

export default PodListRow;
