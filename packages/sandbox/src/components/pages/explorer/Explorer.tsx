import React from "react";
import { MODEL_ID } from '@pw/core/src/models/Model.constants';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import Meter from '../../../../../react/src/Meter/Meter';
import { pathHeadState, pathState, IPathNode } from '../../../state/pathState';
import ActionList from './shared/ActionList';
import BreadcrumbList from './shared/BreadcrumbList';
import DataList from './dataCol/DataList';
import Viewer from './viewerCol/Viewer';
import Col from '../../ui/layout/Col';
import Panel from '../../ui/layout/Panel';
import { useIsTablet, useIsDesktop } from '../../../hooks/useWindowSize';
import PresetAction from './dataCol/actions/PresetAction';
import SupersetAction from './dataCol/actions/SupersetAction';
import TransposeAction from './dataCol/actions/TransposeAction';
import RootAction from './dataCol/actions/RootAction';

const StyledExplorer = styled.div`
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
`;

const DATA_ACTIONS = [
	{
		name: 'Change Key',
		description: 'Set the root note (key center)',
		component: RootAction
	},
	{
		name: 'Load Preset',
		description: 'Import an existing model',
		component: PresetAction
	},
	{
		name: 'Transpose',
		description: 'Shift all the notes by the same amount',
		component: TransposeAction
	},
	{
		name: 'Apply Superset',
		description: 'Superimpose a model containing these pods',
		component: SupersetAction
	}
];

const VIEWER_ACTIONS = [

];

const Explorer = () => {
	const path = useRecoilValue(pathState);
	const [pathHead, setPathHead] = useRecoilState(pathHeadState);
	const isTablet = useIsTablet();
	const isDesktop = useIsDesktop();

	const { modelId, modelValue, modelOptions } = (pathHead as IPathNode).config;
	const { name, preview, pathId, metaChildren } = (pathHead as IPathNode).data;

	React.useEffect(() => window.scrollTo(0, 0), [path.length, pathId]);

	let range = [0, 12];
	if (isTablet) {
		range = [-12, 12]
	}
	if (isDesktop) {
		range = [-39, 48]
	}

	const isGroup = modelId === MODEL_ID.Group;

	const meter = isGroup ?
		null :
		<Meter modelId={modelId} modelValue={modelValue} modelOptions={modelOptions} range={range} matchOctave={isDesktop} />;

	const viewer = isGroup ?
		null :
		<Viewer modelId={modelId} modelValue={modelValue} modelOptions={modelOptions} />;

	const viewerActions = VIEWER_ACTIONS.map(a => ({
		...a,
		/* @ts-ignore */
		editPanel: <a.component pathHead={pathHead} setPathHead={setPathHead} />
	}));

	const dataActions = DATA_ACTIONS.map(a => ({
		...a,
		/* @ts-ignore */
		editPanel: <a.component pathHead={pathHead} setPathHead={setPathHead} />
	}));

	return (
		<>
			<BreadcrumbList />
			{/* @ts-ignore */}
			<Panel name={name} preview={preview} caption={null} >
				{/* @ts-ignore */}
				{meter}
				<StyledExplorer $isSingle={isGroup}>
					<Col
						title="Data"
						editPanel={(
							<ActionList actions={dataActions} />
						)}
						hideHeader={isGroup}
					>
						<DataList metaChildren={metaChildren} modelValue={modelValue} setPathHead={setPathHead} />
					</Col>
					{!isGroup &&
						/* @ts-ignore */
						<Col
							title="Viewer"
							editPanel={(
								<ActionList actions={viewerActions} />
							)}
						>
							{viewer}
						</Col>
					}
				</StyledExplorer>
			</Panel>
		</>
	);
};

export default Explorer;
