import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../../contexts/DataContext';
import { usePathContext } from '../../contexts/PathContext';
import BreadcrumbList from '../core/BreadcrumbList';
import getPreview from '../core/getPreview';
import { MODEL } from '../core/MODEL';
import { STRUCT } from '../core/STRUCT';
import Panel from '../ui/Panel';

const StyledPage = styled.div`
	.panel-body {
		display: flex;
		align-items: center;
		flex-direction: column;

        > * {
			margin: 16px 0;
		}
	}

	h2 {
		width: 100%;
		max-width: 512px;
		margin: 32px 0 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
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
			data={modelData}
			modelId={modelId}
			{...structConfig}
		/>
	);
};

const getPanelProps = (pathHead, modelData) => {
	const { modelId, name } = pathHead;

	const model = MODEL[modelId];
	const modelName = model.name;
	const modelTypeId = model.structId;

	const type = STRUCT[modelTypeId];
	const typeName = type.name;

	const caption = `${modelName} (${typeName})`;
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
		<StyledPage>
			<BreadcrumbList />
			<Panel {...panelProps}>
				{content}
			</Panel>
		</StyledPage>
	);
};

export default Explorer;
