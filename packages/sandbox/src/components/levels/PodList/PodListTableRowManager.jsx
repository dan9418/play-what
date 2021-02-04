import ButtonInput from '@pw/react/src/ui/ButtonInput/ButtonInput';
import React from 'react';
import useEditContext from '../../../contexts/EditContext';
import PodListTableRow from './PodListTableRow';

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

const PodListTableRowManager = ({ pods, setPods, podType }) => {

	const { isEditing } = useEditContext();

	const addPod = () => setPods([...pods, [0, 0]]);

	const rows = pods.map((v, i) => {
		return (
			<PodListTableRow
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

export default PodListTableRowManager;
