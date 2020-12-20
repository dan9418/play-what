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

const InputTableRowManager = ({ data, setData }) => {

	const editContext = useEditContext();
	const { isEditing } = editContext;

	const rows = data.map((v, i) => {
		return (
			<InputTableRow
				i={i}
				key={i}
				pods={data}
				setPods={setData}
			/>
		);
	});

	return [
		...rows,
		isEditing ? <NewPodRow key="new" addPod={null} /> : null
	];

};

export default InputTableRowManager;
