import ButtonInput from '@pw/react/src/ui/ButtonInput/ButtonInput';
import React from 'react';
import useEditContext from '../../../../../contexts/EditContext';
import useSubpanelContext from '../../../../../contexts/SubpanelContext';
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

const InputTableRowManager = () => {

	const subpanelContext = useSubpanelContext();
	const { data: input, setData: setInput } = subpanelContext;

	const { keyCenter, intervals, notes } = input;
	const setPods = newPods => setInput({ ...input, value: newPods });
	const editContext = useEditContext();
	const { isEditing } = editContext;

	const rows = notes.map((v, i) => {
		return (
			<InputTableRow
				i={i}
				key={i}
				pods={notes}
				setPods={setPods}
			/>
		);
	});

	const addPod = () => setPods([...notes, [0, 0]]);

	let keyPodRow = null;
	if (keyCenter) {
		keyPodRow = <InputTableRow
			key="key"
			i={0}
			pods={[keyCenter]}
			setPods={null}
		/>;
	}

	return [
		keyPodRow,
		...rows,
		isEditing ? <NewPodRow key="new" addPod={addPod} /> : null
	];

};

export default InputTableRowManager;
