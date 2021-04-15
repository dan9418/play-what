import { IModelDef } from '@pw/core/src/models/Model.constants';
import { EMPTY_GROUP } from '@pw/core/src/models/Group/Group.constants';
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataState } from '@pw/sandbox/src/state/dataState';
import styled, { css } from 'styled-components';
import { pathHeadState, pathState } from '../../../state/pathState';
import Panel from '../../ui/layout/Panel';
import { IPageProps } from '../Page';
import DataCol from './dataCol/DataCol';
import BreadcrumbList from './shared/BreadcrumbList';
import ViewerCol from './viewerCol/ViewerCol';

const StyledExplorePage = styled.div`
	display: grid;
	width: 100%;
	margin: auto;

	grid-template-columns: 1fr;
	max-width: 768px;
	@media(min-width: 1024px) {
		${({ $isSingle }) => $isSingle ? '' : css`
			grid-template-columns: 1fr 1fr;
			max-width: 100%;
		`}
	}

	.double {
		width: 100%;
		max-width: 512px;
		margin: auto;
	}
`;

const ExplorePage: React.FC<IPageProps> = ({ params }) => {
	const path = useRecoilValue(pathState);
	const [editId, setEditId] = useState(null);
	const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);
	const [data, setData] = useRecoilState(dataState);

	React.useEffect(() => {
		setData(params.data)
	}, []);

	React.useEffect(() => {
		//window.scrollTo(0, 0), [path.length, pathId];
		setEditId(null);
	}, [path.length /*pathId*/]);

	if (!pathHead) return null;

	const { name, preview, pathId } = (pathHead as IModelDef).data;

	return (
		<>
			<BreadcrumbList />
			{/* @ts-ignore */}
			<Panel name={name} preview={preview} caption={null} >
				<StyledExplorePage>
					<DataCol editId={editId} setEditId={setEditId} />
					<ViewerCol editId={editId} setEditId={setEditId} />
				</StyledExplorePage>
			</Panel>
		</>
	);
};

export default ExplorePage;
