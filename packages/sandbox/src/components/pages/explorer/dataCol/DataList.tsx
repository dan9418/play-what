import { MODEL_ID } from '@pw/core/src/models/Model.constants';
import ModelUtils from '@pw/core/src/models/Model.utils';
import { modalState } from '@pw/sandbox/src/state/dataState';
import { fullPathState } from '@pw/sandbox/src/state/pathState';
import React from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import Subpanel from '../../../ui/layout/Subpanel';
import getActions from '../shared/getActions';
import Viewer from '../viewerCol/Viewer';
import DATA_ACTIONS from './actions/dataActions';

const StyledDataList = styled.ul`
	padding: 0;
	.data-item {
		margin: 16px 0;
	}
`;

const getItems = (defs, pathIds, isEditing, level, isLeaf = false, setModal = null) => {

	return defs.map((child, i) => {

		// Model helpers
		const { modelId } = child.config;
		const isGroup = modelId === MODEL_ID.Group;
		const isPod = modelId === MODEL_ID.Note || modelId === MODEL_ID.Interval;

		// Name, Caption, Preview
		const { name, preview, caption } = child.data;

		// Path & Metachildren
		const newPathIds = [...pathIds, i];
		const metaChildren = ModelUtils.getMetaChildren(child.config);

		const list = isGroup ? (
			//  @ts-ignore
			<ul>
				{getItems(metaChildren, newPathIds, isEditing, level + 1, isPod, setModal)}
			</ul>
		) : null;

		const pathHead = child;
		const setPathHeadConfig = null;

		const actions = getActions(DATA_ACTIONS, pathHead, setPathHeadConfig, setModal);

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

	const fullPath = useRecoilValue(fullPathState);
	const setModal = useSetRecoilState(modalState);

	if (!metaChildren) return null;

	const isLeaf = fullPath.length > 1 &&
		(fullPath[fullPath.length - 2].config.modelId === MODEL_ID.Chord || fullPath[fullPath.length - 2].config.modelId === MODEL_ID.Scale) &&
		(fullPath[fullPath.length - 1].config.modelId === MODEL_ID.Note || fullPath[fullPath.length - 1].config.modelId === MODEL_ID.Interval)

	return (
		<StyledDataList>
			{getItems(metaChildren, [], isEditing, level, isLeaf, setModal)}
		</StyledDataList>
	);
};

export default DataList;
