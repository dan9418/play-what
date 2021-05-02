import { ModelId } from '@pw/core/src/models/Model.constants';
import ModelUtils from '@pw/core/src/models/Model.utils';
import { hoveredIndexState } from '@pw/sandbox/src/state/dataState';
import { pathHeadState } from '@pw/sandbox/src/state/pathState';
import React from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Subpanel from '../../../ui/layout/Subpanel';
import Viewer from '../viewerCol/Viewer';

const StyledDataList = styled.ul`
	padding: 0;
	.data-item {
		margin: 16px 0;
	}
`;

const getItem = (pathHead, pathIds, level, i, hoveredIndex, isEditing, DataList) => {
	const { config, data } = pathHead;
	// Model helpers
	const { modelId, modelValue } = config;
	const isGroup = modelId === ModelId.Group;
	const isPod = modelId === ModelId.Note || modelId === ModelId.Interval;

	// Name, Caption, Preview
	const { name, preview, caption, t } = data;

	// Path & Metachildren
	const newPathIds = [...pathIds, i];
	const metaChildren = ModelUtils.getMetaChildren(config);

	const actions = [];

	return (
		<li key={name + i} className='data-item'>
			<Subpanel
				pathIds={newPathIds}
				caption={caption}
				name={name}
				preview={preview}
				t={t}
				level={level}
				isEditing={isEditing}
				actions={actions}
				pod={isPod && modelValue}
				isHovered={isPod && modelValue[0] === hoveredIndex}
			>
				<Viewer modelConfig={config} />
				<DataList metaChildren={metaChildren} isEditing={isEditing} level={level + 1} pathIds={newPathIds} />
			</Subpanel>
		</li>
	);
}

const getItems = (defs, pathIds, isEditing, level, hoveredIndex = null, DataList = null) => {
	return defs.map((child, i) => {
		return getItem(child, pathIds, level, i, hoveredIndex, isEditing, DataList);
	});
};

interface IDataListProps {
	metaChildren: any[];
	isEditing: boolean;
	level?: number;
	pathIds?: number[];
}

const DataList: React.FC<IDataListProps> = ({ metaChildren, isEditing, level = 0, pathIds = [] }) => {

	const [pathHead, setPathHead] = useRecoilState(pathHeadState);
	const hoveredIndex = useRecoilValue(hoveredIndexState);

	// pathHead.config.modelId === ModelId.Interval || pathHead.config.modelId === ModelId.Note
	if (!metaChildren) {
		return (
			<StyledDataList>
				{getItem(pathHead, [], level, null, hoveredIndex, isEditing, DataList)}
			</StyledDataList>
		);
	}

	return (
		<StyledDataList>
			{getItems(metaChildren, pathIds, isEditing, level, hoveredIndex, DataList)}
		</StyledDataList>
	);
};

export default DataList;
