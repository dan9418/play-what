import { MODEL } from '@pw/core/src/models/Model.constants';
import React from 'react';
import DropdownInput from '../ui/inputs/DropdownInput';

const SupersetSelector = ({ modelId, modelValue, modelRoot, setSuperset }) => {

	const model = MODEL[modelId];
	const supersets = model.utils.findSupersets ? model.utils.findSupersets(modelValue, modelRoot) : [];

	const setValue = (v, i) => {
		setSuperset(supersets[i]);
	}

	return (
		<DropdownInput options={supersets} value={null} setValue={setValue} />
	);
};

export default SupersetSelector;
