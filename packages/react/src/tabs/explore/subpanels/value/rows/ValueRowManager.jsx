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

const ValueRowManager = ({ value, podType, isList }) => {
	const editContext = useEditContext();
	const { isEditing } = editContext;
	if (!isList) {
		return (
			<PodRow
				pod={value}
				setPod={null}
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
					podList={value}
					setPodList={null}
					podType={podType}
				/>
			);
		});
		return [...rows, isEditing ? <NewModelRow key="x" /> : null]
	}
};

export default ValueRowManager;
