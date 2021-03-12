import { MODEL } from '@pw/core/src/models/Model.constants';
import React from 'react';
import DropdownInput from '../ui/inputs/DropdownInput';

const PresetSelector = ({ modelId, modelValue, modelRoot, setModel }) => {
	const model = MODEL[modelId];
	const options = model.presets;
	const setValue = v => setModel(v.value);
	return (
		<DropdownInput options={options} setValue={setValue} />
	);
};

export default PresetSelector;
