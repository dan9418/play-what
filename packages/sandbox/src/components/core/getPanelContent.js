import React from 'react';
import { MODEL } from './MODEL';
import STRUCT_COMPONENT from './StructComponents';

const getPanelContent = (modelData, modelId) => {
	const model = MODEL[modelId];
	const { structConfig, structId } = model;

	const SructComponent = STRUCT_COMPONENT[structId];

	return (
		<SructComponent
			modelData={modelData}
			modelId={modelId}
			{...structConfig}
		/>
	);
};

export default getPanelContent;
