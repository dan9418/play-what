import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React from "react";
import styled from 'styled-components';
import Subpanel from '../../../ui/layout/Subpanel';
import Viewer from '../viewerCol/Viewer';

const StyledDataList = styled.ul`
	& li {
		margin: 16px 0;
	}
`;

const getItems = (pathHead, setPathHeadConfig, pathIds, isEditing, level) => {

	const { metaChildren } = pathHead.data;
	if (!metaChildren) return null;

	/*const { modelValue } = pathHead.config;
	const setModelValue = (data) => {
		const copy = _.cloneDeep(pathHead);
		const pathStr = `config.modelValue`;
		_.set(copy, pathStr, data);
		setPathHeadConfig(copy.config);
	};*/

	return metaChildren.map((child, i) => {

		const { modelId } = child.config;
		const { name, preview } = child.data;

		const model = MODEL[modelId];

		const isGroup = modelId === MODEL_ID.Group;

		const newPathIds = [...pathIds, i];

		const content = isGroup ? (
			//  @ts-ignore
			<ul css="padding: 0 8px">
				{getItems(child, null, newPathIds, isEditing, level + 1)}
			</ul>
		) : (
			<Viewer {...child.config} metaChildren={metaChildren} />
		);

		return (
			<li key={name + i}>
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

const DataList = ({ pathHead, setPathHeadConfig, isEditing, level = 0 }) => {

	if (!pathHead.data.metaChildren) return null;

	return (
		<StyledDataList>
			{getItems(pathHead, setPathHeadConfig, [], isEditing, level)}
		</StyledDataList>
	);
};

export default DataList;
