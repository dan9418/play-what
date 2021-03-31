import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React from "react";
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { siblingsState } from '../../../../../state/pathState';
import DropdownInput from '../../../../ui/inputs/DropdownInput';
import ActionForm from '../../shared/ActionForm';

const StyledLabel = styled.h4`
	margin: 8px 0 4px;
	color: #555;
	font-weight: bold;

	:first-child {
		margin-top: 0;
	}
`;

const PresetAction = ({ pathHead = null, setPathHeadConfig, type = null, validTypes }) => {
	const [typeIndex, setTypeIndex] = React.useState(0);
	const [presetIndex, setPresetIndex] = React.useState(0);

	const { parent } = useRecoilValue(siblingsState);
	const parentModel = MODEL[parent ? parent.config.modelId : MODEL_ID.Group];

	const typeOptions = (validTypes || parentModel.validChildren).map(x => ({ value: x, name: MODEL[x].name }));
	typeOptions.unshift({ value: 'none', name: 'Select a type...' });
	const selectedTypeOption = typeOptions[typeIndex];
	const model = MODEL[selectedTypeOption.value];

	const _type = validTypes.length === 1 ? validTypes[0] : type;

	let presetOptions = [];
	let selectedPresetOption = null;
	if (_type || typeIndex > 0) {
		presetOptions = MODEL[_type || selectedTypeOption.value].presets;
		selectedPresetOption = presetOptions[presetIndex];
	}

	const onSubmit = () => {
		const modelId = selectedTypeOption.value;
		const modelValue = selectedPresetOption.value;
		setPathHeadConfig({
			modelId,
			modelValue
		});
	};

	return (
		<ActionForm onSubmit={onSubmit}>
			{!_type &&
				<>
					<StyledLabel>Type: </StyledLabel>
					<DropdownInput options={typeOptions} value={selectedTypeOption} setValue={(v, i) => setTypeIndex(i)} />
				</>
			}
			{presetOptions.length > 0 &&
				<>
					<StyledLabel>Preset: </StyledLabel>
					<DropdownInput options={presetOptions} value={selectedPresetOption} setValue={(v, i) => setPresetIndex(i)} />
				</>
			}
		</ActionForm>
	);
};

export default PresetAction;
