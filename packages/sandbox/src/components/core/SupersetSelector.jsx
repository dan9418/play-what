import { MODEL } from '@pw/core/src/models/Model.constants';
import React, { useState } from 'react';
import Icon from '../ui/assets/Icon';
import ButtonInput from '../ui/inputs/buttons/ButtonInput';
import DropdownInput from '../ui/inputs/DropdownInput';



const SupersetSelector = ({ modelId, modelValue, modelRoot, setSuperset }) => {
	const [index, setIndex] = useState(0);

	const model = MODEL[modelId];
	const supersets = model.utils.findSupersets ? model.utils.findSupersets(modelValue, modelRoot) : [];

	const none = {
		name: 'None',
		modelId,
		modelRoot,
		modelValue: []
	};

	supersets.unshift(none);

	const value = supersets[index];
	const setValue = () => setSuperset(value);
	const reset = () => setSuperset(none);
	const setSelection = (v, i) => setIndex(i);

	return (
		<>
			<DropdownInput options={supersets} value={value} setValue={setSelection} />
			<ButtonInput onClick={setValue}>Apply</ButtonInput>
		</>
	);
};

export default SupersetSelector;
