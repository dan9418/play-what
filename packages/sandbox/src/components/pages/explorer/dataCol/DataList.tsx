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

const getChildUtils = (pathHead, setPathHeadConfig, child, path) => {
	const copy = _.cloneDeep(pathHead.config);

	const pathStr = `modelValue.${path.join('.modelValue.')}`;

	//if (!path[path.length - 1])
	//	console.log('CHILD', '\ncopy:\n', copy, '\npath:\n', pathStr);

	const set = newConfig => {
		console.log('A', copy);
		_.set(copy, pathStr, newConfig);
		console.log('B', copy);
		setPathHeadConfig(copy);
	}

	return [child.config, set];
}

const getItems = (defs, pathIds, isEditing, level, isLeaf = false, setModal = null, pathHead = null, setPathHeadConfig = null, hoveredIndex = null) => {

	return defs.map((child, i) => {

		// Model helpers
		const { modelId, modelValue } = child.config;
		const isGroup = modelId === ModelId.Group;
		const isPod = modelId === ModelId.Note || modelId === ModelId.Interval;

		// Name, Caption, Preview
		const { name, preview, caption } = child.data;

		// Path & Metachildren
		const newPathIds = [...pathIds, i];
		const metaChildren = ModelUtils.getMetaChildren(child.config);

		const list = isGroup ? (
			//  @ts-ignore
			<ul>
				{getItems(metaChildren, newPathIds, isEditing, level + 1, isPod, setModal, pathHead, setPathHeadConfig)}
			</ul>
		) : null;

		const [childPathHead, setChildPathHeadConfig] = getChildUtils(pathHead, setPathHeadConfig, child, newPathIds);

		const actions = getActions(DATA_ACTIONS, childPathHead, setChildPathHeadConfig, setModal);

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
					actions={actions}
					pod={isPod && modelValue}
					isHovered={isPod && modelValue[0] === hoveredIndex}
				>
					<Viewer modelConfig={child.config} />
					{list}
				</Subpanel>
			</li>
		);
	})
};

interface IDataListProps {
	metaChildren: any[];
	isEditing: boolean;
	level?: number;
}

const DataList: React.FC<IDataListProps> = ({ metaChildren, isEditing, level = 0 }) => {

	const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);
	const fullPath = useRecoilValue(fullPathState);
	const setModal = useSetRecoilState(modalState);
	const hoveredIndex = useRecoilValue(hoveredIndexState);

	if (!metaChildren) return null;

	const isLeaf = fullPath.length > 1 &&
		(fullPath[fullPath.length - 2].config.modelId === ModelId.Chord || fullPath[fullPath.length - 2].config.modelId === ModelId.Scale) &&
		(fullPath[fullPath.length - 1].config.modelId === ModelId.Note || fullPath[fullPath.length - 1].config.modelId === ModelId.Interval)

	return (
		<StyledDataList>
			{getItems(metaChildren, [], isEditing, level, isLeaf, setModal, pathHead, setPathHeadConfig, hoveredIndex)}
		</StyledDataList>
	);
};

export default DataList;
