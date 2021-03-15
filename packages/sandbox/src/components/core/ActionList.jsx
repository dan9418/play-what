import React from 'react';
import styled from 'styled-components';
import Subpanel from '../ui/layout/Subpanel';
import PresetSelector from './PresetSelector';
import SupersetSelector from './SupersetSelector';

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


const StyledActionList = styled.ul`
	& > li {
		margin-bottom: 16px;
	}
`;

const getItems = actions => {
	return actions.map((child, i) => {
		const { name, editPanel } = child;

		return (
			<li key={name + i}>
				<Subpanel
					metaChild={null}
					caption={"action"}
					name={name}
					preview={null}
				>
					{editPanel}
				</Subpanel>
			</li>
		);
	})
};


const ActionList = ({ modelId, modelValue, modelRoot, setModel, setSuperset, actionType }) => {

	const actions = ACTIONS[actionType].map(a => ({
		name: a.name,
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
