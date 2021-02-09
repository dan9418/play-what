import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../../contexts/DataContext';
import { usePathContext } from '../../contexts/PathContext';
import BreadcrumbList from '../core/BreadcrumbList';
import getCaption from '../core/getCaption';
import getPreview from '../core/getPreview';
import { MODEL, MODEL_ID } from '../core/MODEL';
import { STRUCT } from '../core/STRUCT';
import Panel from '../ui/Panel';

const StyledExplorer = styled.div`
	.panel-body {
		display: flex;
		align-items: center;
		flex-direction: column;

        > * {
			margin: 16px 0;
		}
	}
`;

const getModelContent = (pathHead, modelData) => {
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

const getPanelProps = (pathHead, modelData) => {
	const { modelId, name } = pathHead;

	const caption = getCaption(modelData, modelId, modelId !== MODEL_ID.Group);
	const preview = getPreview(modelData, modelId);

	return {
		name,
		caption,
		preview
	};
};

const Explorer = () => {
	const { pathHead } = usePathContext();
	const { modelData } = useDataContext();

	const panelProps = getPanelProps(pathHead, modelData);

	const content = getModelContent(pathHead, modelData);

	return (
		<StyledExplorer>
			<BreadcrumbList />
			<Panel {...panelProps}>
				{content}
			</Panel>
		</StyledExplorer>
	);
};

export default Explorer;
