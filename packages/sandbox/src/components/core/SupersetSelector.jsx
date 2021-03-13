import { MODEL } from '@pw/core/src/models/Model.constants';
import React, { useState } from 'react';
import Icon from '../ui/assets/Icon';
import ButtonInput from '../ui/inputs/buttons/ButtonInput';
import DropdownInput from '../ui/inputs/DropdownInput';

const SupersetSelector = ({ modelId, modelValue, modelRoot, setSuperset }) => {
	const [index, setIndex] = useState(0);

	const model = MODEL[modelId];
	const supersets = model.utils.findSupersets ? model.utils.findSupersets(modelValue, modelRoot) : [];

	if (!supersets.length) return 'No supersets';

	const value = supersets[index];
	const setValue = () => setSuperset(value);
	const reset = () => setSuperset(null);
	const setSelection = (v, i) => setIndex(i);

	return (
		<>
			<DropdownInput options={supersets} value={null} setValue={setSelection} />
			<ButtonInput onClick={setValue}><Icon iconId='confirm' color='white' /></ButtonInput>
			<ButtonInput onClick={reset}><Icon iconId='cancel' color='white' /></ButtonInput>
		</>
	);
};

export default SupersetSelector;
