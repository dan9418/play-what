import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../../contexts/DataContext';
import { useModelContext } from '../../contexts/ModelContext';
import BreadcrumbList from '../core/BreadcrumbList';
import { MODEL } from '../core/MODEL';
import { TYPE } from '../core/TYPE';
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
	const modelTypeId = model.typeId;

	const type = TYPE[modelTypeId];

	const { typeProps } = model;
	const { component: Component } = type;

	return (
		<Component
			data={modelData}
			modelId={modelId}
			{...typeProps}
		/>
	);
};

const getPanelProps = (pathHead, modelData) => {
	const { modelId, name } = pathHead;

	const model = MODEL[modelId];
	const modelName = model.name;
	const modelTypeId = model.typeId;

	const type = TYPE[modelTypeId];
	const typeName = type.name;

	const caption = `${modelName} (${typeName})`;
	const preview = model.getPreview(modelData);

	return {
		name,
		caption,
		preview
	};
};

const Explorer = () => {
	const { pathHead } = useModelContext();
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
