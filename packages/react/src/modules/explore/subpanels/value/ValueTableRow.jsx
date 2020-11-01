import pw_core from "@pw/core";
import React from 'react';
import ButtonInput from '../../../ui/ButtonInput/ButtonInput';
import DropdownInput from '../../../ui/DropdownInput/DropdownInput';

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

const ValueTableRow = ({ value, setValue, i, isEditing, remove, moveUp, moveDown }) => {

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
				{JSON.stringify(value.getValue())}
			</td>
			<td>
				{JSON.stringify(reduced.getValue())}
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

export default ValueTableRow;
