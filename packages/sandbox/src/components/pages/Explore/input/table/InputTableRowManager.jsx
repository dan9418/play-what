import ButtonInput from '@pw/react/src/ui/ButtonInput/ButtonInput';
import React from 'react';
import useEditContext from '../../../../../contexts/EditContext';
import useInputContext from '../../../../../contexts/InputContext';
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

const InputTableRowManager = ({ podType }) => {

	const editContext = useEditContext();
	const { isEditing } = editContext;

	const { intervals, setIntervals, notes, setNotes } = useInputContext();

	const tableData = podType === 'interval' ? intervals : notes;
	const setTableData = podType === 'interval' ? setIntervals : setNotes;
	const addPod = () => setTableData([...tableData, [0, 0]]);

	const rows = tableData.map((v, i) => {
		return (
			<InputTableRow
				i={i}
				key={i}
				pods={tableData}
				setPods={setTableData}
				podType={podType}
			/>
		);
	});

	return [
		...rows,
		isEditing ? <NewPodRow key="new" addPod={addPod} /> : null
	];

};

export default InputTableRowManager;
