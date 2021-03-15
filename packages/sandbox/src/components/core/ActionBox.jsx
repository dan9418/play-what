import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonInput from '../ui/inputs/buttons/ButtonInput';
import PresetSelector from './PresetSelector';
import SupersetSelector from './SupersetSelector';

const StyledActionList = styled.ul`
	display: flex;
	> li {
		padding: 8px;
		color: darkblue;
		padding-right: 8px;
		cursor: pointer;
	}
`;

const StyledActionBox = styled.div`
	margin-top: 16px;
	padding: 8px;
	width: 100%;
	max-width: 512px;
	border: 1px solid #ccc;
	border-radius: 8px;
	background-color: #f5f5f5;
`;

const StyledActionHeader = styled.h3`
	margin-bottom: 8px;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
`;

const ACTIONS = {
	data: [
		{
			name: 'Load Preset',
			component: PresetSelector
		}
	],
	viewer: [
		{
			name: 'Apply Superset',
			component: SupersetSelector
		}
	]
};

const ActionBox = ({ modelId, modelValue, modelRoot, setModel, setSuperset, actionType }) => {
	const [selectedActionIndex, setSelectedActionIndex] = useState(null);

	const actions = ACTIONS[actionType];
	const onClose = () => setSelectedActionIndex(null);

	let content = null;
	let text = null;
	if (selectedActionIndex === null) {
		content = (
			<StyledActionList>
				{actions.map((a, i) => {
					return (
						<li key={a.name}>
							<ButtonInput onClick={() => setSelectedActionIndex(i)}>{a.name}</ButtonInput>
						</li>
					);
				})}
			</StyledActionList>
		);
	}
	else {
		const action = actions[selectedActionIndex];
		const Component = action.component;
		text = action.name;
		content = <>
			<Component modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setModel={setModel} setSuperset={setSuperset} onClose={onClose} />
		</>
	}

	return (

		<StyledActionBox>
			{content}
		</StyledActionBox>

	);
};

export default ActionBox;
