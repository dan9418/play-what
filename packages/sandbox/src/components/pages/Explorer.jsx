import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { pathHeadState } from '../../state/pathState';
import ActionBox from '../core/ActionBox';
import BreadcrumbList from '../core/BreadcrumbList';
import DataList from '../core/DataList';
import RootBox from '../core/RootBox';
import Viewer from '../core/Viewer';
import IconButton from '../ui/inputs/buttons/IconButton';
import Panel from '../ui/layout/Panel';

const StyledExplorer = styled.div`
	display: grid;
	width: 100%;
	margin: auto;

	grid-template-columns: 1fr;
	max-width: 512px;
	@media(min-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		max-width: 100%;
	}
`;

const StyledCol = styled.div`
	margin-top: 16px;
	
	&:not(:first-child) {
		margin-left: 32px;
	}
	&:first-child {
		padding-right: 32px;
		border-right: 1px solid #ccc;
	}
`;

const StyledColHeader = styled.h2`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledColDivider = styled.div`
	padding-bottom: 16px;
	margin-bottom: 16px;
	border-bottom: 1px solid #ccc;
`;

const Explorer = () => {
	const [isEditingViewer, setIsEditingViewer] = useState(false);
	const [isEditingData, setIsEditingData] = useState(false);

	const [superset, setSuperset] = useState(null);
	const [pathHead, setPathHeadValue] = useRecoilState(pathHeadState);
	const { modelId, modelValue, modelRoot, onEdit } = pathHead;
	const model = MODEL[modelId];
	const { isRelative } = model;

	const refreshKey = JSON.stringify({ modelId, modelValue, modelRoot });

	useEffect(() => window.scrollTo(0, 0), [refreshKey]);

	const metaChildren = model.utils.getMetaChildren(modelValue, modelRoot, setPathHeadValue);

	const viewer = modelId === MODEL_ID.Group ?
		null :
		<Viewer modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} superset={superset} />;

	const root = modelId === MODEL_ID.Group || isRelative ?
		<>
			<RootBox modelRoot={modelRoot} />
			<StyledColDivider />
		</>
		: null;

	return (
		<>
			<BreadcrumbList />
			<Panel {...pathHead}>
				<StyledExplorer>
					<StyledCol>
						<StyledColHeader>
							Viewer
							<IconButton iconId={isEditingViewer ? 'confirm' : 'edit'} onClick={() => setIsEditingViewer(!isEditingViewer)} />
						</StyledColHeader>

						{isEditingViewer &&
							<ActionBox modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setModel={setPathHeadValue} setSuperset={setSuperset} actionType="viewer" />
						}

						{viewer}
					</StyledCol>
					<StyledCol>
						<StyledColHeader>
							Data
							<IconButton iconId={isEditingData ? 'confirm' : 'edit'} onClick={() => setIsEditingData(!isEditingData)} />
						</StyledColHeader>

						<StyledColDivider />

						{isEditingData &&
							<ActionBox modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setModel={setPathHeadValue} setSuperset={setSuperset} actionType="data" />
						}

						{root}
						<DataList modelId={modelId} modelValue={modelValue} metaChildren={metaChildren} modelRoot={modelRoot} onEdit={setPathHeadValue} />
					</StyledCol>
				</StyledExplorer>
			</Panel>
		</>
	);
};

export default Explorer;
