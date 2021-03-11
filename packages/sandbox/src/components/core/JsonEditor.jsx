import { MODEL } from '@pw/core/src/models/Model.constants';
import React from 'react';
import DropdownInput from '../ui/inputs/DropdownInput';

const JsonEditor = ({ modelId, modelValue, modelRoot, onEdit }) => {
	const model = MODEL[modelId];
	const options = model.presets;
	const setValue = v => onEdit(v.value);
	return (
		<DropdownInput options={options} setValue={setValue} />
	);
};

export default JsonEditor;
