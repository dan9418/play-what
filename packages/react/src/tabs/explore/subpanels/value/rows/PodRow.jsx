import PodUtils from "@pw/core/src/modules/models/pod/PodUtils";
import React from 'react';
import useEditContext from "../../../../../other/EditContext";
import DropdownInput from '../../../../../ui/DropdownInput/DropdownInput';

export const PresetCell = ({ value, setValue, isEditing, podType }) => {
	const sharedOptions = { podType };
	const presets = PodUtils.getPresets(sharedOptions);
	const preset = PodUtils.findPreset(value, sharedOptions);
	const presetName = preset ? preset.id : '?';

	const setHelper = v => { if (v.value) setValue(v.value); }

	const unknown = { id: '--', name: 'Unknown' };
	const options = [unknown, ...presets];

	return (
		<td>
			{isEditing ? <DropdownInput options={options} value={preset || unknown} setValue={setHelper} displayProperty="id" /> : presetName}
		</td>
	)
}

const PodRow = ({ value, reducedValue, setValue, podType }) => {

	const editContext = useEditContext();
	const { isEditing } = editContext;

	return (
		<tr>
			<td>
				{JSON.stringify(value)}
			</td>
			<td>
				{JSON.stringify(reducedValue)}
			</td>
			<PresetCell value={reducedValue} setValue={setValue} isEditing={isEditing} podType={podType} />
		</tr>
	);
};

export default PodRow;
