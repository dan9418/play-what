import React from 'react';
import useEditContext from '../../../../../other/EditContext';
import ButtonInput from '../../../../../ui/ButtonInput/ButtonInput';
import PodListRow from './PodListRow';
import PodRow from './PodRow';

const NewModelRow = ({ }) => {
	return (
		<tr key="new">
			<td colSpan="3" />
			<td>
				Add
			</td>
			<td>
				<ButtonInput onClick={null}>+</ButtonInput>
			</td>
		</tr>
	);
};

const ValueRowManager = ({ value, setValue, podType, setPodType, isList, setIsList }) => {
	const editContext = useEditContext();
	const { isEditing } = editContext;

	if (!isList) {
		return (
			<PodRow
				value={value}
				setValue={setValue}
				podType={podType}
			/>
		);
	}
	else {
		const rows = value.map((v, i) => {
			return (
				<PodListRow
					i={i}
					key={i}
					value={value}
					setValue={setValue}
					podType={podType}
				/>
			);
		});
		return [...rows, isEditing ? <NewModelRow key="x" /> : null]
	}
};

export default ValueRowManager;
