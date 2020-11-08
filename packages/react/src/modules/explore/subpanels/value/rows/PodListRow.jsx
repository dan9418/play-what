import React from 'react';
import ButtonInput from '../../../../ui/ButtonInput/ButtonInput';
import DropdownInput from '../../../../ui/DropdownInput/DropdownInput';
import pw_core from '@pw/core';
import Pod from '@pw/core/src/modules/models/pod/Pod';
import NumericInput from '../../../../ui/NumericInput/NumericInput';

const PresetCell = ({ value, isEditing, podType }) => {
	const model = new podType.cl(value.getValue());
	const preset = model.getPreset();
	return <td>{
		isEditing ? <DropdownInput options={podType.cl.presetValues} value={preset} setValue={null} /> :
			<>{preset ? preset.name : 'n/a'}</>
	}</td>
}

const PodListRow = ({ value, setValue, i, isEditing, model, preset, podType }) => {

	const podList = value.getValue();
	const pod = new pw_core.Pod(podList[i]);

	const remove = () => setValue(new pw_core.Pod([...podList.slice(0, i), ...podList.slice(i + 1)]));
	const moveUp = () => setValue(new pw_core.Pod([...podList.slice(0, i - 1), podList[i], podList[i - 1], ...podList.slice(i + 1)]));
	const moveDown = () => setValue(new pw_core.Pod([...podList.slice(0, i), podList[i + 1], podList[i], ...podList.slice(i + 2)]));
	const setPod = r => setValue([...podList.slice(0, i), r, ...podList.slice(i + 1)]);

	const raw = pod.getValue();
	const reduced = new Pod(raw).reduce().getValue();

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
						<NumericInput value={i} setValue={setValue} />
						: i
				}
			</td>
			<td>
				{JSON.stringify(raw)}
			</td>
			<td>
				{JSON.stringify(reduced)}
			</td>
			<PresetCell value={pod} isEditing={isEditing} podType={podType} />
			{isEditing &&
				<td>
					<ButtonInput onClick={remove}>X</ButtonInput>
				</td>
			}
		</tr>
	);
};

export default PodListRow;
