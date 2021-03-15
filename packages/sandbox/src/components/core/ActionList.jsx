import React from 'react';
import styled from 'styled-components';
import Subpanel from '../ui/layout/Subpanel';
import PresetSelector from './PresetSelector';
import SupersetSelector from './SupersetSelector';

const ACTIONS = {
	data: [
		{
			name: 'Load Preset',
			description: 'Import an existing model',
			component: PresetSelector
		},
		{
			name: 'Transpose',
			description: 'Shift to another octave',
			component: PresetSelector
		},
		{
			name: 'Chord Inversion',
			description: 'Raise the lowest note by an octave',
			component: PresetSelector
		}
	],
	viewer: [
		{
			name: 'Apply Superset',
			description: 'Superimpose a model containing these pods',
			component: SupersetSelector
		}
	]
};


const StyledActionList = styled.ul`
	& > li {
		margin-bottom: 16px;

		& > section > *:not(:first-child) {
			margin: 8px;
		}
	}
`;

const getItems = actions => {
	return actions.map((child, i) => {
		const { name, description, editPanel } = child;

		return (
			<li key={name + i}>
				<Subpanel
					metaChild={null}
					caption={null}
					name={name}
					preview={description}
				>
					{editPanel}
				</Subpanel>
			</li>
		);
	})
};


const ActionList = ({ modelId, modelValue, modelRoot, setModel, setSuperset, actionType }) => {

	const actions = ACTIONS[actionType].map(a => ({
		...a,
		editPanel: <a.component modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setModel={setModel} setSuperset={setSuperset} />
	})
	);

	return (
		<StyledActionList>
			{getItems(actions)}
		</StyledActionList>
	);
};

export default ActionList;
