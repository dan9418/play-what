import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { pathState } from '../../state/pathState';
import DropdownInput from '../ui/inputs/DropdownInput';
import SubpanelFooter from '../ui/layout/SubpanelFooter';

const StyledPresetSelector = styled.div`
	padding: 16px;

	select {
		width: 100%;
	}
`;

const StyledLabel = styled.h4`
	margin: 8px 0 4px;
	color: #555;
	font-weight: bold;

	:first-child {
		margin-top: 0;
	}
`;

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
			<StyledPresetSelector>
				<StyledLabel>Type: </StyledLabel>
				<DropdownInput options={modelOptions} value={selectedModelOption} setValue={(v, i) => setModelIndex(i)} />
				<StyledLabel>Preset: </StyledLabel>
				<DropdownInput options={options} value={value} setValue={setSelection} />
			</StyledPresetSelector>
			<SubpanelFooter onSubmit={setValue} />
		</>
	);
};

export default PresetSelector;
