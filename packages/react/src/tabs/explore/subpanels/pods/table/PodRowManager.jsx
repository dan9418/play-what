import React from 'react';
import useEditContext from '../../../../../other/EditContext';
import useOutputContext from '../../../../../other/OutputContext';
import ButtonInput from '../../../../../ui/ButtonInput/ButtonInput';
import ValueRow from './PodRow';

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

const ValueRowManager = () => {
	const setPods = null;
	const podType = 'interval';
	const { pods } = useOutputContext().frame;
	const editContext = useEditContext();
	const { isEditing } = editContext;

	const rows = pods.map((v, i) => {
		return (
			<ValueRow
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

export default ValueRowManager;
