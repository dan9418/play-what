import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { pathState } from '../../state/pathState';
import Icon from '../ui/assets/Icon';
import ButtonInput from '../ui/inputs/buttons/ButtonInput';
import DropdownInput from '../ui/inputs/DropdownInput';

const PresetSelector = ({ modelId, modelValue, modelRoot, setModel }) => {
	const [index, setIndex] = useState(0);
	const { parent } = useRecoilValue(pathState);

	let parentModel = MODEL[MODEL_ID.Group];
	if (parent) {
		parentModel = MODEL[parent.modelId];
	}
	const modelOptions = parentModel.validChildren.map(x => ({ value: x, name: MODEL[x].name }));

	const model = MODEL[modelId];
	const options = model.presets;

	if (!options || !options.length) return 'No presets';

	const value = options[index];
	const setValue = () => setModel(value.value);
	const setSelection = (v, i) => setIndex(i);

	return (
		<>
			<DropdownInput options={modelOptions} value={value} setValue={setSelection} />
			<DropdownInput options={options} value={value} setValue={setSelection} />
			<ButtonInput onClick={setValue}>
				<Icon iconId='confirm' color='white' />
			</ButtonInput>
		</>
	);
};

export default PresetSelector;
