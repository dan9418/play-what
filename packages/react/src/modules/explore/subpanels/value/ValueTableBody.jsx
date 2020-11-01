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
		const rows = value.map((v, i) => {
			const remove = () => setValue([...value.slice(0, i), ...value.slice(i + 1)]);
			const moveUp = () => setValue([...value.slice(0, i - 1), value[i], value[i - 1], ...value.slice(i + 1)]);
			const moveDown = () => setValue([...value.slice(0, i), value[i + 1], value[i], ...value.slice(i + 2)]);
			const setPod = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);

			return (
				<PodListRow
					key={i}
					i={i}
					pod={v}
					setPod={setPod}
					podList={value}
					setPodList={setValue}
					isEditing={isEditing}
					remove={remove}
					moveUp={moveUp}
					moveDown={moveDown}
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
