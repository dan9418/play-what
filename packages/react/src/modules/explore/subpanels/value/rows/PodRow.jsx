import pw_core from "@pw/core";
import React from 'react';
import DropdownInput from '../../../../ui/DropdownInput/DropdownInput';

const getInputOptions = (value) => {
	if (value instanceof pw_core.Note) {
		return pw_core.Note.presetValues;
	}
	else if (value instanceof pw_core.Interval) {
		const options = pw_core.Interval.presetValues;
		return <DropdownInput options={options} value={null} setValue={null} displayProperty="id" />
	}
	return null;
}

const PodRow = ({ pod, setPod, isEditing }) => {

	const reduced = pod.reduce();

	return (
		<tr>
			<td>
				{JSON.stringify(pod.getValue())}
			</td>
			<td>
				{JSON.stringify(reduced.getValue())}
			</td>
			<td>
				{isEditing ?
					<DropdownInput options={options} value={null} setValue={null} />
					:
					pod.getName()}
			</td>
			<td>
                1:1
			</td>
		</tr>
	);
};

export default PodRow;
