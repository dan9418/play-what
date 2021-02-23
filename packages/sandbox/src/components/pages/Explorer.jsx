import { MODEL } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import styled from 'styled-components';
import { usePathContext } from '../../contexts/PathContext';
import BreadcrumbList from '../core/BreadcrumbList';
import GenericModel from '../core/GenericModel';

const StyledExplorer = styled.div`
	.panel-body {
		display: flex;
		align-items: center;
		flex-direction: column;

        > * {
			margin: 9px 0;
		}
	}
`;

const getMetaData = pathHead => {
	const { name, modelId, modelData } = pathHead;
	const model = MODEL[modelId];

	return {
		name,
		caption: model.name,
		preview: model.utils.getPreview(modelData)
	}
};

const Explorer = () => {
	const { pathHead } = usePathContext();
	const { modelId, modelData } = pathHead;

	const model = MODEL[modelId];

	const metaData = getMetaData(pathHead);
	const metaChildren = model.utils.getMetaChildren(modelData);

	return (
		<StyledExplorer>
			<BreadcrumbList />
			<GenericModel metaData={metaData} metaChildren={metaChildren} />
		</StyledExplorer>
	);
};

export default Explorer;
