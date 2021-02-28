import { MODEL } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import styled from 'styled-components';
import Subpanel from '../ui/layout/Subpanel';

const StyledPropertyHeader = styled.h4`
	color: #555;
	text-align: left;
	width: 100%;
	max-width: 512px;
	text-transform: uppercase;
	margin: 16px 8px 8px;
`;

const getRows = metaChildren => {
	return metaChildren.map((child, i) => {
		const { name, modelId, preview, modelConfig, label } = child;
		const model = MODEL[modelId];

		const header = <StyledPropertyHeader>
			{label || i + 1}
		</StyledPropertyHeader>;

		return (
			<div key={name + i}>
				{header}
				<Subpanel
					metaChild={child}
					caption={model.name}
					name={name}
					preview={preview}
				>
					{JSON.stringify(modelConfig, null, "\t")}
				</Subpanel>
			</div>
		);
	})
};

const DataPanel = ({ modelConfig, metaChildren }) => {
	if (!metaChildren)
		return <pre>{JSON.stringify(modelConfig, null, '\t')}</pre>;

	return (
		<>
			<h2>Data</h2>
			{getRows(metaChildren)}
		</>
	);
};

export default DataPanel;
