import pw_core from "@pw/core";
import React from 'react';
import ButtonInput from '../../ui/ButtonInput/ButtonInput';
import DropdownInput from '../../ui/DropdownInput/DropdownInput';

const getInput = (value) => {
	if (value instanceof pw_core.Note) {
		const options = pw_core.Note.presetValues;
		return <DropdownInput options={options} value={null} setValue={null} />
	}
	else if (value instanceof pw_core.Interval) {
		const options = pw_core.Interval.presetValues;
		return <DropdownInput options={options} value={null} setValue={null} displayProperty="id" />
	}
	return null;
}

const PodRow = ({ value, setValue, i, isEditing, remove, moveUp, moveDown }) => {

	const pod = new pw_core.Pod(value);
	const reduced = pod.reduce();
	let name = isEditing ? getInput(reduced) : reduced.getName();

	const setSubValue = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);

	return (
		<tr key={i}>
			<td>
				{i}
			</td>
			<td>
				{JSON.stringify(value)}
			</td>
			<td>
				{JSON.stringify(reduced)}
			</td>
			<td>
				{name}
			</td>
			<td>
				1:1
			</td>
			{isEditing && (
				<>
					<td>
						<ButtonInput onClick={remove}>X</ButtonInput>
					</td>
					<td>
						<ButtonInput onClick={moveUp}>^</ButtonInput>
						<ButtonInput onClick={moveDown}>v</ButtonInput>
					</td>
				</>
			)}
		</tr>
	);
};

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

const ModelTableRow = ({ value, setValue, isEditing }) => {
	if (value instanceof pw_core.Pod) {
		return (
			<PodRow
				value={value}
				i={0}
				setValue={setValue}
				isEditing={isEditing}
			/>
		);
	}
	else if (value instanceof pw_core.PodList) {
		const rows = value.map((v, i) => {
			const remove = () => setValue([...value.slice(0, i), ...value.slice(i + 1)]);
			const moveUp = () => setValue([...value.slice(0, i - 1), value[i], value[i - 1], ...value.slice(i + 1)]);
			const moveDown = () => setValue([...value.slice(0, i), value[i + 1], value[i], ...value.slice(i + 2)]);
			return (
				<PodRow
					key={i}
					i={i}
					value={v}
					setValue={setValue}
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

export default ModelTableRow;
