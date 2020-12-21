import PodUtils from '@pw/core/src/Pod.utils';
import ButtonInput from '@pw/react/src/ui/ButtonInput/ButtonInput';
import DropdownInput from '@pw/react/src/ui/DropdownInput/DropdownInput';
import NumericInput from '@pw/react/src/ui/NumericInput/NumericInput';
import React, { useState } from 'react';
import styled from 'styled-components';
import useEditContext from '../../../../../contexts/EditContext';
import Icon from '../../../../Icon';

export const PresetCell = ({ pod, setPod, isEditing, podType }) => {
	const sharedOptions = { podType };
	const presets = PodUtils.getPresets(sharedOptions);
	const preset = PodUtils.findPreset(pod, sharedOptions);
	const presetName = preset ? preset.id : '?';

	const setHelper = v => { if (v.value) setPod(v.value); }

	const unknown = { id: '--', name: 'Unknown' };
	const options = [unknown, ...presets];

	return (
		<td>
			{isEditing ? <DropdownInput options={options} value={preset || unknown} setValue={setHelper} displayProperty="id" /> : presetName}
		</td>
	)
}

export const StyledInputTableRow = styled.tr`
	${props => props.$border && 'border-bottom: 2px solid #ddd;'}
	&:hover {
		background-color: #eee;
	}
`;

export const StyledInputTableSubRow = styled.tr`
	background-color: #ddd;
	& td {
		border-radius: 8px;
	}
`;

const InputTableRow = ({ i, pods, setPods, podType }) => {

	const [isEditing, setIsEditing] = useState(false);

	const pod = pods[i];

	const setPod = r => setPods([...pods.slice(0, i), r, ...pods.slice(i + 1)]);

	const remove = () => setPods([...pods.slice(0, i), ...pods.slice(i + 1)]);

	const moveDown = () => setPods([...pods.slice(0, i - 1), pods[i], pods[i - 1], ...pods.slice(i + 1)]);
	const moveUp = () => setPods([...pods.slice(0, i), pods[i + 1], pods[i], ...pods.slice(i + 2)]);
	const onReorder = v => {
		if (v > i) moveUp();
		if (v < i) moveDown();
	}

	const pitchClass = PodUtils.getPitchClass(pod);
	const octave = PodUtils.getOctave(pod);

	return (
		<>
			<StyledInputTableRow key={i}>
				<td>
					{
						isEditing ?
							<NumericInput value={i} setValue={onReorder} min={0} max={pods.length - 1} />
							: i + 1
					}
				</td>
				<td>
					{JSON.stringify(pod)}
				</td>
				<td>
					{pitchClass}
				</td>
				<td>
					{octave}
				</td>
				<td>
					{pod[1]}
				</td>
				<PresetCell pod={pod} setPod={setPod} isEditing={isEditing} podType={podType} />
				<td>
					<ButtonInput onClick={() => setIsEditing(!isEditing)}>
						<Icon iconId={isEditing ? 'confirm' : 'edit'} />
					</ButtonInput>
				</td>
			</StyledInputTableRow>
			{isEditing &&
				<StyledInputTableSubRow>
					<td colSpan="7">
						test
					</td>
				</StyledInputTableSubRow>
			}
		</>
	);
};

export default InputTableRow;
