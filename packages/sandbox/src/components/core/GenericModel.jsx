import { MODEL } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import styled from 'styled-components';
import ZoomButton from '../ui/inputs/buttons/ZoomButton';
import Subpanel from '../ui/layout/Subpanel';

const StyledTypeRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 512px;
	>:nth-child(1) {
		width: 100%;
		margin-right: 8px;	
	}
`;

const StyledPropertyHeader = styled.h3`
	color: #555;
	text-align: left;
	width: 100%;
	max-width: 512px;
	text-transform: uppercase;
	margin: 0;
`;

const GenericModel = ({ modelData, modelId }) => {
	const model = MODEL[modelId];
	const children = model.getMetaChildren(modelData);

	if (!children) return null;

	console.log('dpb generic model START', modelData, modelId);

	return children.map((item, i) => {
		const { pathId, name, childModelId, childData } = item;

		const content = null;

		console.log('dpb generic model', item);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={name} preview={null} caption={childModelId}>
					{content}
				</Subpanel>
				<ZoomButton modelData={childData} name={name} modelId={childModelId} pathId={pathId} />
			</StyledTypeRow>
		);
	})
};

export default GenericModel;
