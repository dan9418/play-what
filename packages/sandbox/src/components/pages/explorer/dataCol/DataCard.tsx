import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React from "react";
import { useRecoilValue } from 'recoil';
import Subpanel from '../../../ui/layout/Subpanel';
import styled from 'styled-components';
import { siblingsState } from '../../../../state/pathState';
import DropdownInput from '../../../ui/inputs/DropdownInput';
import ActionForm from '../shared/ActionForm';

const StyledLabel = styled.h4`
	margin: 8px 0 4px;
	color: #555;
	font-weight: bold;

	:first-child {
		margin-top: 0;
	}
`;

const DataCard = ({ pathHead = null, setPathHead = null, type = null }) => {
	const [typeIndex, setTypeIndex] = React.useState(0);
	const [presetIndex, setPresetIndex] = React.useState(0);

	const { parent } = useRecoilValue(siblingsState);
	const parentModel = MODEL[parent ? parent.config.modelId : MODEL_ID.Group];

	const typeOptions = parentModel.validChildren.map(x => ({ value: x, name: MODEL[x].name }));
	typeOptions.unshift({ value: 'none', name: 'Select a type...' });
	const selectedTypeOption = typeOptions[typeIndex];
	const model = MODEL[selectedTypeOption.value];

	let presetOptions = [];
	let selectedPresetOption = null;
	if (type || typeIndex > 0) {
		presetOptions = MODEL[type || selectedTypeOption.value].presets;
		selectedPresetOption = presetOptions[presetIndex];
	}

	const onSubmit = () => {
		const modelId = selectedTypeOption.value;
		const modelValue = selectedPresetOption.value;
		setPathHead({
			modelId,
			modelValue
		});
	};

	return (
		<Subpanel>
			<ActionForm onSubmit={onSubmit}>
				{!type &&
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
		</Subpanel>
	);
};

export default DataCard;
