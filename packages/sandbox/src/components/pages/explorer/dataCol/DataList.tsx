import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import ModelUtils from '@pw/core/src/models/Model.utils';
import React from "react";
import { useRecoilValue } from 'recoil';
import { fullPathState } from '@pw/sandbox/src/state/pathState';
import styled from 'styled-components';
import Subpanel from '../../../ui/layout/Subpanel';
import Viewer from '../viewerCol/Viewer';

const StyledDataList = styled.ul`
	padding: 0;
	.data-item {
		margin: 16px 0;
	}
`;

const getItems = (defs, pathIds, isEditing, level, isLeaf = false) => {

	return defs.map((child, i) => {

		const { modelId } = child.config;
		const { name, preview } = child.data;

		const model = MODEL[modelId];

		const isGroup = modelId === MODEL_ID.Group;
		const isPod = modelId === MODEL_ID.Note || modelId === MODEL_ID.Interval;

		const newPathIds = [...pathIds, i];

		const metaChildren = ModelUtils.getMetaChildren(child.config);

		const list = isGroup ? (
			//  @ts-ignore
			<ul>
				{getItems(metaChildren, newPathIds, isEditing, level + 1, isPod)}
			</ul>
		) : null;

		let caption = model.name;

		if (child.config.modelOptions && child.config.modelOptions.t)
			caption = `${model.name} (${child.config.modelOptions.t})`;

		return (
			<li key={name + i} className='data-item'>
				<Subpanel
					pathIds={newPathIds}
					caption={caption}
					name={name}
					preview={preview}
					level={level}
					isEditing={isEditing}
					isLeaf={isLeaf}
				>
					<Viewer modelConfig={child.config} />
					{list}
				</Subpanel>
			</li>
		);
	})
};

const DataList = ({ metaChildren, isEditing, level = 0 }) => {

	const fullPath = useRecoilValue(fullPathState);

	if (!metaChildren) return null;

	const isLeaf = fullPath.length > 1 &&
		(fullPath[fullPath.length - 2].config.modelId === MODEL_ID.Chord || fullPath[fullPath.length - 2].config.modelId === MODEL_ID.Scale) &&
		(fullPath[fullPath.length - 1].config.modelId === MODEL_ID.Note || fullPath[fullPath.length - 1].config.modelId === MODEL_ID.Interval)

		console.log(isLeaf, fullPath);

	return (
		<StyledDataList>
			{getItems(metaChildren, [], isEditing, level, isLeaf)}
		</StyledDataList>
	);
};

export default DataList;
