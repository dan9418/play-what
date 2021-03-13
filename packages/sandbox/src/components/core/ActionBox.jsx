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
	padding: 8px;
`;

const ACTIONS = [
	{
		name: 'Load Preset',
		component: PresetSelector
	},
	{
		name: 'Apply Superset',
		component: PresetSelector
	}
];

const ActionBox = ({ modelId, modelValue, modelRoot, setModel, setSuperset }) => {
	const [selectedActionIndex, setSelectedActionIndex] = useState(null);

	let content = null;
	if (selectedActionIndex === null) {
		content = (
			<StyledActionList>
				{ACTIONS.map((a, i) => {
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
		const action = ACTIONS[selectedActionIndex];
		const Component = action.component;
		content = <>
			<h3>
				{action.name}
				<ButtonInput onClick={() => setSelectedActionIndex(null)}>X</ButtonInput>
			</h3>
			<Component modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setModel={setModel} setSuperset={setSuperset} />
		</>
	}

	return (
		<StyledActionBox>
			{content}
		</StyledActionBox>
	);
};

export default ActionBox;
