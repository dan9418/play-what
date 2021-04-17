import { IModelNode, ModelId, MODEL_MAP } from '@pw/core/src/models/Model.constants';
import React from "react";
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { siblingsState } from '../../../../../state/pathState';
import DropdownInput from '../../../../ui/inputs/DropdownInput';
import ActionForm from '../../shared/ActionForm';
import { IActionProps } from '../../shared/getActions';

const StyledLabel = styled.h4`
	margin: 8px 0 4px;
	color: #555;
	font-weight: bold;

	:first-child {
		margin-top: 0;
	}
`;

interface IPresetActionProps extends Partial<IActionProps> {
	type?: any;
	validTypes?: any[];
	onCancel?: any;
	pathHead?: IModelNode;
	setPathHead?: any;
}

const PresetAction: React.FC<IPresetActionProps> = ({ pathHead = null, setPathHead, type = null, validTypes = null, onCancel = null }) => {
	const [typeIndex, setTypeIndex] = React.useState(0);
	const [presetIndex, setPresetIndex] = React.useState(0);

	const siblingState = useRecoilValue(siblingsState) || { parent: null };
	const { parent } = siblingState;
	const parentModel = MODEL_MAP.get(parent ? parent.config.modelId : ModelId.Group);

	const typeOptions = (validTypes || parentModel.validChildren).map(x => ({ value: x, name: MODEL_MAP.get(x).name }));
	typeOptions.unshift({ value: 'none', name: 'Select a type...' });
	const selectedTypeOption = typeOptions[typeIndex];

	const _type = (validTypes && validTypes.length === 1) ? validTypes[0] : type;

	let presetOptions = [];
	let selectedPresetOption = null;
	if (_type || typeIndex > 0) {
		presetOptions = MODEL_MAP.get(_type || selectedTypeOption.value).presets;
		selectedPresetOption = presetOptions[presetIndex];
	}

	const onSubmit = () => {
		const modelId = selectedTypeOption.value;
		const modelValue = selectedPresetOption.value;
		const newPathHead = {
			config: {
				modelId,
				modelValue
			}
		}
		setPathHead(newPathHead);
	};

	return (
		<ActionForm onSubmit={onSubmit} onCancel={onCancel}>
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
