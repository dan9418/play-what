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

const InputTableRowManager = ({ input, setInput }) => {
	const { keyCenter, intervals, notes, modelId } = input;
	const setPods = newPods => setInput({ ...input, value: newPods });
	const editContext = useEditContext();
	const { isEditing } = editContext;

	const [keyPod, setKeyPod] = useState(NOTE.C);

	const rows = notes.map((v, i) => {
		return (
			<InputTableRow
				i={i}
				key={i}
				pods={notes}
				setPods={setPods}
				modelId={modelId}
			/>
		);
	});

	const addPod = () => setPods([...notes, [0, 0]]);

	let keyPodRow = null;
	if (modelId === 'relative') {
		keyPodRow = <InputTableRow
			key="key"
			i={0}
			pods={[keyPod.value]}
			setPods={null}
			modelId={modelId}
		/>;
	}

	return [
		keyPodRow,
		...rows,
		isEditing ? <NewPodRow key="new" addPod={addPod} /> : null
	];

};

export default InputTableRowManager;
