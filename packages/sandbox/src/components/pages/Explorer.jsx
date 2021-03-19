import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';
import Meter from '../../../../react/src/Meter/Meter';
import { pathHeadState } from '../../state/pathState';
import ActionList from '../core/ActionList';
import BreadcrumbList from '../core/BreadcrumbList';
import DataList from '../core/DataList';
import PresetSelector from '../core/PresetSelector';
import RootSubpanel from '../core/RootSubpanel';
import SupersetSelector from '../core/SupersetSelector';
import TransposeSelector from '../core/TransposeSelector';
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

const DATA_ACTIONS = [
	{
		name: 'Root',
		description: 'Set the root note (key center)',
		component: RootSubpanel
	},
	{
		name: 'Load Preset',
		description: 'Import an existing model',
		component: PresetSelector
	},
	{
		name: 'Transpose',
		description: 'Shift all the notes by the same amount',
		component: TransposeSelector
	}
];

const VIEWER_ACTIONS = [
	{
		name: 'Apply Superset',
		description: 'Superimpose a model containing these pods',
		component: SupersetSelector
	}
];

const Explorer = () => {
	const [superset, setSuperset] = useState(null);
	const [pathHead, setPathHead] = useRecoilState(pathHeadState);
	const { modelId, modelValue, modelRoot, onEdit } = pathHead;
	const model = MODEL[modelId];
	const { isRelative } = model;

	const refreshKey = JSON.stringify({ modelId, modelValue, modelRoot });

	useEffect(() => window.scrollTo(0, 0), [refreshKey]);

	const metaChildren = model.utils.getMetaChildren(modelValue, modelRoot, setPathHead);

	const isGroup = modelId === MODEL_ID.Group;

	const meter = isGroup ?
		null :
		<Meter modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} />;

	const viewer = isGroup ?
		null :
		<Viewer modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} superset={superset} />;

	const viewerActions = VIEWER_ACTIONS.map(a => ({
		...a,
		editPanel: <a.component modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setPathHead={setPathHead} setSuperset={setSuperset} />
	}));

	const dataActions = DATA_ACTIONS.map(a => ({
		...a,
		editPanel: <a.component pathHead={pathHead} setPathHead={setPathHead} />
	}));

	return (
		<>
			<BreadcrumbList />
			<Panel {...pathHead}>
				{!meter && <div css={`border-bottom: 2px solid #ccc;`} />}
				{meter}
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
						hideHeader={isGroup}
					>
						<DataList modelId={modelId} modelValue={modelValue} metaChildren={metaChildren} modelRoot={modelRoot} onEdit={setPathHead} />
					</Col>
				</StyledExplorer>
			</Panel>
		</>
	);
};

export default Explorer;
