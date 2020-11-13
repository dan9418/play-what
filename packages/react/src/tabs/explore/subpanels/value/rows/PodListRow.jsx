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

const PodListRow = ({ i, value, setValue, podType }) => {

	const editContext = useEditContext();
	const { isEditing } = editContext;

	const raw = value[i];
	const reduced = PodUtils.reduce(raw);

	const remove = () => setValue([...value.slice(0, i), ...value.slice(i + 1)]);
	const moveUp = () => setValue([...value.slice(0, i - 1), value[i], value[i - 1], ...value.slice(i + 1)]);
	const moveDown = () => setValue([...value.slice(0, i), value[i + 1], value[i], ...value.slice(i + 2)]);
	const setPod = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);
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
