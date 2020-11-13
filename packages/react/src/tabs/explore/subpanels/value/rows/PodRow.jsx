import PodUtils from "@pw/core/src/modules/models/pod/PodUtils";
import { findPodTypePreset, getPodTypePresets } from "@pw/core/src/modules/theory/podConfig";
import React from 'react';
import useEditContext from "../../../../../other/EditContext";
import DropdownInput from '../../../../../ui/DropdownInput/DropdownInput';

export const PresetCell = ({ value, setValue, isEditing, podType }) => {
	const presets = getPodTypePresets(podType);
	const preset = findPodTypePreset(value, podType);
	const presetName = preset ? preset.id : '?';

	const setHelper = v => setValue(v.value)

	return (
		<td>
			{isEditing ? <DropdownInput options={presets} value={preset} setValue={setHelper} displayProperty="id" /> : presetName}
		</td>
	)
}

const PodRow = ({ value, setValue, podType }) => {

	const editContext = useEditContext();
	const { isEditing } = editContext;

	const reduced = PodUtils.reduce(value);

	return (
		<tr>
			<td>
				{JSON.stringify(value)}
			</td>
			<td>
				{JSON.stringify(reduced)}
			</td>
			<PresetCell value={reduced} setValue={setValue} isEditing={isEditing} podType={podType} />
		</tr>
	);
};

export default PodRow;
