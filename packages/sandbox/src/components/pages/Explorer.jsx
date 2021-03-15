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
import Col, { StyledColDivider } from '../ui/layout/Col';
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

const Explorer = () => {
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
					<Col
						title="Viewer"
						editPanel={<ActionBox modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setModel={setPathHeadValue} setSuperset={setSuperset} actionType="viewer" />}
					>
						{viewer}
					</Col>
					<Col
						title="Data"
						editPanel={<ActionBox modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setModel={setPathHeadValue} setSuperset={setSuperset} actionType="data" />}
					>
						{root}
						<DataList modelId={modelId} modelValue={modelValue} metaChildren={metaChildren} modelRoot={modelRoot} onEdit={setPathHeadValue} />
					</Col>
				</StyledExplorer>
			</Panel>
		</>
	);
};

export default Explorer;
