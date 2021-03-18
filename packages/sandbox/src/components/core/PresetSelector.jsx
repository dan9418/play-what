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

const PresetSelector = ({ modelId, modelValue, modelRoot, setPathHead }) => {
	const [typeIndex, setTypeIndex] = useState(0);
	const [presetIndex, setPresetIndex] = useState(0);

	const { parent } = useRecoilValue(pathState);
	let parentModel = MODEL[parent ? parent.modelId : MODEL_ID.Group];

	const typeOptions = parentModel.validChildren.map(x => ({ value: x, name: MODEL[x].name }));
	typeOptions.unshift({ value: 'none', name: 'Select a type...' });
	const selectedTypeOption = typeOptions[typeIndex];

	let presetOptions = [];
	let selectedPresetOption = null;
	if (typeIndex > 0) {
		presetOptions = MODEL[selectedTypeOption.value].presets;
		selectedPresetOption = presetOptions[presetIndex];
	}

	const onSubmit = () => setPathHead({
		modelId: selectedTypeOption.value,
		modelValue: selectedPresetOption.value
	});

	return (
		<>
			<StyledPresetSelector>
				<StyledLabel>Type: </StyledLabel>
				<DropdownInput options={typeOptions} value={selectedTypeOption} setValue={(v, i) => setTypeIndex(i)} />
				{presetOptions.length > 0 &&
					<>
						<StyledLabel>Preset: </StyledLabel>
						<DropdownInput options={presetOptions} value={selectedPresetOption} setValue={(v, i) => setPresetIndex(i)} />
					</>
				}
			</StyledPresetSelector>
			<SubpanelFooter onSubmit={onSubmit} />
		</>
	);
};

export default PresetSelector;
