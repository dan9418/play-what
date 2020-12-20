import PodUtils from '@pw/core/src/Pod.utils';
import React from 'react';
import useEditContext from '../../../../../contexts/EditContext';
import { PresetCell, StyledInputTableRow } from './InputTableRow';

const KeyCenterRow = ({ keyCenter, setKeyCenter }) => {

	const editContext = useEditContext();
	const { isEditing } = editContext;

	const pitchClass = PodUtils.getPitchClass(keyCenter);
	const octave = PodUtils.getOctave(keyCenter);

	return (
		<StyledInputTableRow key='keyCenter' $border>
			<td>
				Key
			</td>
			<td>
				{JSON.stringify(keyCenter)}
			</td>
			<td>
				{pitchClass}
			</td>
			<td>
				{octave}
			</td>
			<td>
				{keyCenter[1]}
			</td>
			<PresetCell pod={keyCenter} setPod={setKeyCenter} isEditing={isEditing} podType='note' />
			{isEditing && <td>null</td>}
		</StyledInputTableRow>
	);
};

export default KeyCenterRow;
