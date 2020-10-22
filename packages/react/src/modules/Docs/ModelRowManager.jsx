import React, { useState } from 'react';
import ButtonInput from '../ui/ButtonInput/ButtonInput';
import pw_core from "@pw/core";
import DropdownInput from '../ui/DropdownInput/DropdownInput';
import './ModelTable.css';

const getName = (value, podType) => {
	if (podType === 'pod') {
		return JSON.stringify(value);
	}
	else if (podType === 'note') {
		return pw_core.models.pod.note.getName({ a: value });
	}
	else if (podType === 'interval') {
		return pw_core.models.pod.interval.getName({ a: value });
	}
	else if (podType === 'podList') {
		return JSON.stringify(value);
	}
	else if (podType === 'noteList') {
		return pw_core.models.pod.note.getName({ a: value });
	}
	else if (podType === 'intervalList') {
		return pw_core.models.pod.interval.getName({ a: value });
	}
	return '?';
}

const getInput = (value, podType) => {
	if (podType === 'pod') {
		return value;
	}
	else if (podType === 'note') {
		const options = pw_core.models.pod.note.presetValues;
		return <DropdownInput options={options} value={null} setValue={null} />
	}
	else if (podType === 'interval') {
		const options = pw_core.models.pod.interval.presetValues;
		return <DropdownInput options={options} value={null} setValue={null} displayProperty="id" />
	}
	return null;
}

const ModelRow = ({ value, setValue, i, isEditing, modelType, podType }) => {

	const reduced = pw_core.models.pod.reduce({ a: value });
	let name = isEditing ? getInput(reduced, podType) : getName(reduced, podType);

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
		</tr>
	);
};

const ModelRowManager = ({ value, setValue, isEditing, modelType, podType }) => {
	if (modelType === 'index') {
		return <tr><td colSpan="100">{JSON.stringify(value)}</td></tr>
	}
	else if (modelType === 'pod') {
		return <ModelRow
			value={value}
			i={0}
			setValue={setValue}
			isEditing={isEditing}
			modelType={modelType}
			podType={podType}
		/>;
	}
	else if (modelType === 'podList') {
		return value.map((v, i) => {
			const setSubValue = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);
			//const remove = () => setValue([...value.slice(0, i), ...value.slice(i + 1)]);
			return <ModelRow
				key={i}
				i={i}
				value={v}
				setValue={setSubValue}
				isEditing={isEditing}
				modelType={modelType}
				podType={podType}
			/>;
		});
	}
};

export default ModelRowManager;
