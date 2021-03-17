import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { pathState } from '../../state/pathState';
import Icon from '../ui/assets/Icon';
import ButtonInput from '../ui/inputs/buttons/ButtonInput';
import DropdownInput from '../ui/inputs/DropdownInput';
import SubpanelFooter from '../ui/layout/SubpanelFooter';

const PresetSelector = ({ modelId, modelValue, modelRoot, setModel }) => {
	const [modelIndex, setModelIndex] = useState(0);
	const [index, setIndex] = useState(0);
	const { parent } = useRecoilValue(pathState);

	let parentModel = MODEL[MODEL_ID.Group];
	if (parent) {
		parentModel = MODEL[parent.modelId];
	}
	const modelOptions = parentModel.validChildren.map(x => ({ value: x, name: MODEL[x].name }));
	const selectedModelOption = modelOptions[modelIndex];

	const options = MODEL[selectedModelOption.value].presets;

	const value = options[index];
	const setValue = () => setModel(value.value);
	const setSelection = (v, i) => setIndex(i);

	return (
		<>
			<DropdownInput options={modelOptions} value={selectedModelOption} setValue={(v, i) => setModelIndex(i)} />
			<DropdownInput options={options} value={value} setValue={setSelection} />
			<SubpanelFooter onSubmit={setValue} />
		</>
	);
};

export default PresetSelector;
