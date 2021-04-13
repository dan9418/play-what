import { IModelDef, ModelId } from '@pw/core/src/models/Model.constants';
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import { pathHeadState, pathState } from '../../../state/pathState';
import Panel from '../../ui/layout/Panel';
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

const ExplorePage: React.FC = () => {
	const path = useRecoilValue(pathState);
	const [editId, setEditId] = useState(null);
	const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);

	const { name, preview, pathId } = (pathHead as IModelDef).data;

	React.useEffect(() => {
		//window.scrollTo(0, 0), [path.length, pathId];
		setEditId(null);
	}, [path.length, pathId]);


	return (
		<>
			<BreadcrumbList />
			{/* @ts-ignore */}
			<Panel name={name} preview={preview} caption={null} >
				<StyledExplorePage>
					<ViewerCol editId={editId} setEditId={setEditId} />
					<DataCol editId={editId} setEditId={setEditId} />
				</StyledExplorePage>
			</Panel>
		</>
	);
};

export default ExplorePage;
