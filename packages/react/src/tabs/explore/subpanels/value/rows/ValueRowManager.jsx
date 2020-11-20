import React from 'react';
import useEditContext from '../../../../../other/EditContext';
import ButtonInput from '../../../../../ui/ButtonInput/ButtonInput';
import PodListRow from './PodListRow';
import PodRow from './PodRow';

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

const ValueRowManager = ({ value, reducedValue, setValue, podType, setPodType }) => {
	const editContext = useEditContext();
	const { isEditing } = editContext;

	const rows = value.map((v, i) => {
		return (
			<PodListRow
				i={i}
				key={i}
				value={value}
				reducedValue={reducedValue}
				setValue={setValue}
				podType={podType}
			/>
		);
	});

	const addPod = () => setValue([...value, [0, 0]]);
	return [...rows, isEditing ? <NewPodRow key="new" addPod={addPod} /> : null];

};

export default ValueRowManager;
