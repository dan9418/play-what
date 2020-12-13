import React from 'react';
import useEditContext from '../../../../contexts/EditContext';
import InputTableRow from './InputTableRow';

const NewPodRow = ({ addPod }) => {
	return (
		<tr key="new">
			<td colSpan="5" />
			<td>
				Add
			</td>
			<td>
				<ButtonInput onClick={addPod}>+</ButtonInput>
			</td>
		</tr>
	);
};

const InputTableRowManager = ({ input, setInput }) => {
	const pods = input.value;
	const setPods = setInput;
	const podType = 'interval';
	const editContext = useEditContext();
	const { isEditing } = editContext;

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
	return [...rows, isEditing ? <NewPodRow key="new" addPod={addPod} /> : null];

};

export default InputTableRowManager;
