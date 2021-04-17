import { ModelId } from '@pw/core/src/models/Model.constants';
import ModelUtils from '@pw/core/src/models/Model.utils';
import { hoveredIndexState, modalState } from '@pw/sandbox/src/state/dataState';
import { fullPathState, pathHeadState } from '@pw/sandbox/src/state/pathState';
import React from "react";
import { useRecoilState } from 'recoil';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import Subpanel from '../../../ui/layout/Subpanel';
import getActions from '../shared/getActions';
import Viewer from '../viewerCol/Viewer';
import DATA_ACTIONS from './actions/dataActions';
import _ from 'lodash';

const StyledDataList = styled.ul`
	padding: 0;
	.data-item {
		margin: 16px 0;
	}
`;

const getChildUtils = (pathHead, setPathHead, child, path) => {
	const copy = _.cloneDeep(pathHead.config);

	const pathStr = `modelValue.${path.join('.modelValue.')}`;

	//if (!path[path.length - 1])
	//	console.log('CHILD', '\ncopy:\n', copy, '\npath:\n', pathStr);

	const set = newConfig => {
		console.log('A', copy);
		_.set(copy, pathStr, newConfig);
		console.log('B', copy);
		setPathHead(copy);
	}

	return [child.config, set];
}

const getItem = (pathHead, pathIds, level, i, hoveredIndex, isEditing, DataList) => {
	const { config, data } = pathHead;
	// Model helpers
	const { modelId, modelValue } = config;
	const isGroup = modelId === ModelId.Group;
	const isPod = modelId === ModelId.Note || modelId === ModelId.Interval;

	// Name, Caption, Preview
	const { name, preview, caption } = data;

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
				level={level}
				isEditing={isEditing}
				actions={actions}
				pod={isPod && modelValue}
				isHovered={isPod && modelValue[0] === hoveredIndex}
			>
				<Viewer modelConfig={config} />
				<DataList metaChildren={metaChildren} isEditing={isEditing} level={level + 1} />
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
}

const DataList: React.FC<IDataListProps> = ({ metaChildren, isEditing, level = 0 }) => {

	const [pathHead, setPathHead] = useRecoilState(pathHeadState);
	const fullPath = useRecoilValue(fullPathState);
	const setModal = useSetRecoilState(modalState);
	const hoveredIndex = useRecoilValue(hoveredIndexState);

	if (!metaChildren) {
		return (
			<StyledDataList>
				{getItem(pathHead, [], level, null, hoveredIndex, isEditing, DataList)}
			</StyledDataList>
		);
	}

	return (
		<StyledDataList>
			{getItems(metaChildren, [], isEditing, level, hoveredIndex, DataList)}
		</StyledDataList>
	);
};

export default DataList;
