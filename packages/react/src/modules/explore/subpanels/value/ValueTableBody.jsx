import React from 'react';
import usePodContext from '../../../other/PodContext';
import ButtonInput from '../../../ui/ButtonInput/ButtonInput';
import PodIndexRow from './rows/PodIndexRow';
import PodRow from './rows/PodRow';
import PodListRow from './rows/PodListRow';
import pw_core from '@pw/core';

const NewModelRow = ({ }) => {
	return (
		<tr key="new">
			<td colSpan="3" />
			<td>
				Add
			</td>
			<td />
			<td>
				<ButtonInput onClick={null}>+</ButtonInput>
			</td>
			<td colSpan="2" />
		</tr>
	);
};

const RowManager = ({ isEditing }) => {
	const podContext = usePodContext();
	const { value, setValue } = podContext;

	if (value instanceof pw_core.Pod) {
		return (
			<PodRow
				pod={value}
				setPod={setValue}
				isEditing={isEditing}
			/>
		);
	}
	else if (value instanceof pw_core.PodList) {
		const rows = value.getValue().map((v, i) => {
			return (
				<PodListRow
					value={value}
					isEditing={isEditing}
					i={i}
					key={i}
				/>
			);
		});
		return [...rows, isEditing ? <NewModelRow /> : null]
	}
	else {
		return <tr><td colSpan="100">{JSON.stringify(value)}</td></tr>
	}
};

const ValueTableBody = ({ isEditing }) => {
	return (
		<tbody>
			<RowManager isEditing={isEditing} />
		</tbody>
	);
};

export default ValueTableBody;
