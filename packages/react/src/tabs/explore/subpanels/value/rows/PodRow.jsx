import PodUtils from "@pw/core/src/modules/models/pod/PodUtils";
import { findPodTypePreset, getPodTypePresets } from "@pw/core/src/modules/theory/podConfig";
import React from 'react';
import useEditContext from "../../../../../other/EditContext";
import DropdownInput from '../../../../../ui/DropdownInput/DropdownInput';

const PresetCell = ({ value, isEditing, podType }) => {
	const presets = getPodTypePresets(podType);
	const preset = findPodTypePreset(value, podType);

	return (
		<td>
			{isEditing ? <DropdownInput options={presets} value={preset} setValue={null} /> : 'TODO'}
		</td>
	)
}

const PodRow = ({ pod, setPod, podType }) => {

	const editContext = useEditContext();
	const { isEditing } = editContext;

	const reduced = PodUtils.reduce(pod);


	return (
		<tr>
			<td>
				{JSON.stringify(pod)}
			</td>
			<td>
				{JSON.stringify(reduced)}
			</td>
			<PresetCell value={reduced} isEditing={isEditing} podType={podType} />
		</tr>
	);
};

export default PodRow;
