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
import ButtonInput from '../ui/inputs/buttons/ButtonInput';
import IconButton from '../ui/inputs/buttons/IconButton';
import Panel from '../ui/layout/Panel';

const StyledExplorer = styled.div`
	display: grid;
	grid-gap: 32px;
	width: 100%;
	max-width: 512px;
	margin: auto;
	padding: 0 0 24px 0;

	grid-template-columns: 1fr;
	@media(min-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		max-width: 100%;
	}

	pre {
		max-width: 512px;
		max-height: 256px;
		overflow: auto;
	}
`;

const StyledColHeader = styled.h2`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
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
		<RootBox modelRoot={modelRoot} />
		: null;

	return (
		<>
			<BreadcrumbList />
			<Panel {...pathHead}>
				<StyledExplorer>
					<div>
						<StyledColHeader>
							Viewer
							<IconButton iconId={isEditingViewer ? 'confirm' : 'edit'} onClick={() => setIsEditingViewer(!isEditingViewer)} />
						</StyledColHeader>

						{isEditingViewer &&
							<ActionBox modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setModel={setPathHeadValue} setSuperset={setSuperset} actionType="viewer" />
						}

						{viewer}
					</div>
					<div>
						<StyledColHeader>
							Data
							<IconButton iconId={isEditingData ? 'confirm' : 'edit'} onClick={() => setIsEditingData(!isEditingData)} />
						</StyledColHeader>

						{isEditingData &&
							<ActionBox modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setModel={setPathHeadValue} setSuperset={setSuperset} actionType="data" />
						}

						{root}
						<DataList modelId={modelId} modelValue={modelValue} metaChildren={metaChildren} modelRoot={modelRoot} onEdit={setPathHeadValue} />
					</div>
				</StyledExplorer>
			</Panel>
		</>
	);
};

export default Explorer;
