import PodUtils from '@pw/core/src/Pod.utils';
import ButtonInput from '@pw/react/src/ui/ButtonInput/ButtonInput';
import DropdownInput from '@pw/react/src/ui/DropdownInput/DropdownInput';
import NumericInput from '@pw/react/src/ui/NumericInput/NumericInput';
import React from 'react';
import styled from 'styled-components';
import useEditContext from '../../../../../contexts/EditContext';

const PresetCell = ({ pod, setPod, isEditing, podType }) => {
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

const StyledInputTableRow = styled.tr`
	${props => props.$border && 'background-color: #ddd;'}
	&:hover {
		background-color: #eee;
	}
`;

const InputTableRow = ({ i, pods, setPods, modelId }) => {

	const editContext = useEditContext();
	const { isEditing } = editContext;

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
		<StyledInputTableRow key={i} $border={setPods === null}>
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
			<PresetCell pod={pod} setPod={setPod} isEditing={isEditing} podType={'note'} />
			{isEditing &&
				<td>
					<ButtonInput className="delete" onClick={remove}>X</ButtonInput>
				</td>
			}
		</StyledInputTableRow>
	);
};

export default InputTableRow;
