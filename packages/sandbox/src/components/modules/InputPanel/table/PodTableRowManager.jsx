import ButtonInput from '@pw/react/src/ui/ButtonInput/ButtonInput';
import React from 'react';
import useEditContext from '../../../../contexts/EditContext';
import PodTableRow from './PodTableRow';

const NewPodRow = ({ addPod }) => {
	return (
		<tr key="new">
			<td colSpan="4" />
			<td>
				Add
			</td>
			<td>
				<ButtonInput className="add" onClick={addPod}>+</ButtonInput>
			</td>
		</tr>
	);
};

const PodTableRowManager = ({ pods, setPods, podType }) => {

	const editContext = useEditContext();
	const { isEditing } = editContext;

	const addPod = () => setPods([...pods, [0, 0]]);

	const rows = pods.map((v, i) => {
		return (
			<PodTableRow
				i={i}
				key={i}
				pods={pods}
				setPods={setPods}
				podType={podType}
			/>
		);
	});

	return [
		...rows,
		isEditing ? <NewPodRow key="new" addPod={addPod} /> : null
	];

};

export default PodTableRowManager;
