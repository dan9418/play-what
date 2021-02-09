import React from 'react';

const getPanelContent = (pathHead, modelData) => {
	const { modelId } = pathHead;

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
