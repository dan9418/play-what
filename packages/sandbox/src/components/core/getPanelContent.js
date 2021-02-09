import React from 'react';
import { MODEL } from './MODEL';
import { STRUCT } from './STRUCT';

const getPanelContent = (modelData, modelId) => {
	const model = MODEL[modelId];
	const modelStructId = model.structId;

	const struct = STRUCT[modelStructId];

	const { structConfig } = model;
	const { component: Component } = struct;

	return (
		<Component
			modelData={modelData}
			modelId={modelId}
			{...structConfig}
		/>
	);
};

export default getPanelContent;
