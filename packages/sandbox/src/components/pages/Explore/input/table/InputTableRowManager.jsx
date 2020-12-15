import { NOTE } from '@pw/core/src/Pod.presets';
import ButtonInput from '@pw/react/src/ui/ButtonInput/ButtonInput';
import React, { useState } from 'react';
import useEditContext from '../../../../../contexts/EditContext';
import InputTableRow from './InputTableRow';

const NewPodRow = ({ addPod }) => {
	return (
		<tr key="new">
			<td colSpan="5" />
			<td>
				Add
			</td>
			<td>
				<ButtonInput className="add" onClick={addPod}>+</ButtonInput>
			</td>
		</tr>
	);
};

const InputTableRowManager = ({ input, setInput, podType }) => {
	const pods = input.value;
	const setPods = newPods => setInput({ ...input, value: newPods });
	const editContext = useEditContext();
	const { isEditing } = editContext;

	const [keyPod, setKeyPod] = useState(NOTE.C);

	const rows = pods.map((v, i) => {
		return (
			<InputTableRow
				i={i}
				key={i}
				pods={pods}
				setPods={setPods}
				podType={podType}
			/>
		);
	});

	const addPod = () => setPods([...pods, [0, 0]]);

	let keyPodRow = null;
	if (podType === 'interval') {
		keyPodRow = <InputTableRow
			key="key"
			i={0}
			pods={[keyPod.value]}
			setPods={null}
			podType={podType}
		/>;
	}

	return [
		keyPodRow,
		...rows,
		isEditing ? <NewPodRow key="new" addPod={addPod} /> : null
	];

};

export default InputTableRowManager;
