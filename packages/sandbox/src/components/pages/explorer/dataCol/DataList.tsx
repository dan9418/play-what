import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React from "react";
import styled from 'styled-components';
import Subpanel from '../../../ui/layout/Subpanel';
import Viewer from '../viewerCol/Viewer';

const StyledDataList = styled.ul`
	.data-item {
		margin: 16px 0;
	}
`;

const getItems = (metaChildren, pathIds, isEditing, level) => {

	return metaChildren.map((child, i) => {

		const { modelId } = child.config;
		const { name, preview } = child.data;

		const model = MODEL[modelId];

		const isGroup = modelId === MODEL_ID.Group;

		const newPathIds = [...pathIds, i];

		const content = isGroup ? (
			//  @ts-ignore
			<ul css="padding: 0 8px">
				{getItems(child, newPathIds, isEditing, level + 1)}
			</ul>
		) : (
			<Viewer {...child.config} metaChildren={metaChildren} />
		);

		return (
			<li key={name + i} className='data-item'>
				<Subpanel
					pathIds={newPathIds}
					caption={model.name}
					name={name}
					preview={preview}
					level={level}
					isEditing={isEditing}
				>
					{content}
				</Subpanel>
			</li>
		);
	})
};

const DataList = ({ metaChildren, isEditing, level = 0 }) => {

	if (!metaChildren) return null;

	return (
		<StyledDataList>
			{getItems(metaChildren, [], isEditing, level)}
		</StyledDataList>
	);
};

export default DataList;
