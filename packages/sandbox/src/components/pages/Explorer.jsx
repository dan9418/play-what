import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';
import { pathHeadState } from '../../state/pathState';
import ActionList from '../core/ActionList';
import BreadcrumbList from '../core/BreadcrumbList';
import DataList from '../core/DataList';
import PresetSelector from '../core/PresetSelector';
import RootSubpanel from '../core/RootSubpanel';
import SupersetSelector from '../core/SupersetSelector';
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
		${({ $isSingle }) => $isSingle ? '' : css`
			grid-template-columns: 1fr 1fr;
			max-width: 100%;
		`}
	}
`;

const VIEWER_ACTIONS = [
	{
		name: 'Load Preset',
		description: 'Import an existing model',
		component: PresetSelector
	}
];

const DATA_ACTIONS = [
	{
		name: 'Apply Superset',
		description: 'Superimpose a model containing these pods',
		component: SupersetSelector
	}
];

const Explorer = () => {
	const [superset, setSuperset] = useState(null);
	const [pathHead, setPathHeadValue] = useRecoilState(pathHeadState);
	const { modelId, modelValue, modelRoot, onEdit } = pathHead;
	const model = MODEL[modelId];
	const { isRelative } = model;

	const refreshKey = JSON.stringify({ modelId, modelValue, modelRoot });

	useEffect(() => window.scrollTo(0, 0), [refreshKey]);

	const metaChildren = model.utils.getMetaChildren(modelValue, modelRoot, setPathHeadValue);

	const isGroup = modelId === MODEL_ID.Group;

	const viewer = isGroup ?
		null :
		<Viewer modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} superset={superset} />;

	const root = isGroup || isRelative ?
		<>
			<RootSubpanel modelRoot={modelRoot} />
			<StyledColDivider />
		</>
		: null;

	const viewerActions = VIEWER_ACTIONS.map(a => ({
		...a,
		editPanel: <a.component modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setModel={setPathHeadValue} setSuperset={setSuperset} />
	}));

	const dataActions = DATA_ACTIONS.map(a => ({
		...a,
		editPanel: <a.component modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setModel={setPathHeadValue} setSuperset={setSuperset} />
	}));

	return (
		<>
			<BreadcrumbList />
			<Panel {...pathHead}>
				<StyledExplorer $isSingle={isGroup}>
					{!isGroup &&
						<Col
							title="Viewer"
							editPanel={(
								<ActionList actions={viewerActions} />
							)}
						>
							{viewer}
						</Col>
					}
					<Col
						title="Data"
						editPanel={(
							<ActionList actions={dataActions} />
						)}
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
