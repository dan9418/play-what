import PodUtils from '@pw/core/src/Pod.utils';
import ButtonInput from '@pw/react/src/ui/ButtonInput/ButtonInput';
import DropdownInput from '@pw/react/src/ui/DropdownInput/DropdownInput';
import NumericInput from '@pw/react/src/ui/NumericInput/NumericInput';
import React from 'react';
import styled from 'styled-components';
import useEditContext from '../../../../contexts/EditContext';

export const PresetCell = ({ pod, setPod, isEditing, podType }) => {
	const sharedOptions = { podType };
	const presets = PodUtils.getPresets(sharedOptions);
	const preset = PodUtils.findPreset(pod, sharedOptions);
	const presetName = preset ? preset.id : '?';
	const podName = PodUtils.getName(pod, sharedOptions);

	const setHelper = v => { if (v.value) setPod(v.value); }

	const unknown = { id: '--', name: 'Unknown' };
	const options = [unknown, ...presets];

	return (
		<td>
			{isEditing ? <DropdownInput options={options} value={preset || unknown} setValue={setHelper} displayProperty="id" /> : podName}
		</td>
	)
}

export const StyledPodTableRow = styled.tr`
	&:hover {
		background-color: #eee;
	}
`;

const PodTableRow = ({ i, pods, setPods, podType }) => {

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
	const x = PodUtils.getDegreeCycles(pod);

	return (
		<StyledPodTableRow key={i}>
			<td>
				{
					isEditing ?
						<NumericInput value={i} setValue={onReorder} min={0} max={pods.length - 1} />
						: i + 1
				}
			</td>
			<PresetCell pod={pod} setPod={setPod} isEditing={isEditing} podType={podType} />
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
			<td>
				{x}
			</td>
			<td>
				?
			</td>
			{isEditing &&
				<td>
					<ButtonInput className="delete" onClick={remove}>X</ButtonInput>
				</td>
			}
		</StyledPodTableRow>
	);
};

export default PodTableRow;
