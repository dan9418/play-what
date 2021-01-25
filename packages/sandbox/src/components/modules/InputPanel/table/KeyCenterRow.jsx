import PodUtils from '@pw/core/src/Pod.utils';
import React from 'react';
import { useRecoilValue } from 'recoil';
import useEditContext from '../../../../contexts/EditContext';
import { inputState } from '../../../../state/state';
import { PresetCell, StyledInputTableRow } from './InputTableRow';

const KeyCenterRow = props => {

	const { isEditing } = useEditContext();
	const { keyCenter, setKeyCenter } = useRecoilValue(inputState);

	const pitchClass = PodUtils.getPitchClass(keyCenter);
	const octave = PodUtils.getOctave(keyCenter);

	return (
		<StyledInputTableRow key='keyCenter'>
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
		</StyledInputTableRow>
	);
};

export default KeyCenterRow;
