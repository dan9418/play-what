import { MODEL_ID } from '@pw/core/src/models/Model.constants';
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import { IPathNode, pathHeadState, pathState } from '../../../state/pathState';
import Col, { StyledColDivider } from '../../ui/layout/Col';
import Panel from '../../ui/layout/Panel';
import DATA_ACTIONS from './dataCol/actions/dataActions';
import DataList from './dataCol/DataList';
import DataCard from './dataCol/DataCard';
import getActions from './getActions';
import MeterWrapper from './MeterWrapper';
import ActionList from './shared/ActionList';
import BreadcrumbList from './shared/BreadcrumbList';
import VIEWER_ACTIONS from './viewerCol/actions/viewerActions';
import Viewer from './viewerCol/Viewer';


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

const Explorer = () => {
	const path = useRecoilValue(pathState);
	const [edit, setEdit] = useState(null);
	const [pathHead, setPathHead] = useRecoilState(pathHeadState);

	const { modelId, modelValue, modelOptions } = (pathHead as IPathNode).config;
	const { name, preview, pathId, metaChildren } = (pathHead as IPathNode).data;

	React.useEffect(() => {
		window.scrollTo(0, 0), [path.length, pathId];
		setEdit(null);
	}, [path.length, pathId]);

	const isGroup = modelId === MODEL_ID.Group;

	const meter = isGroup ?
		null :
		<MeterWrapper />;

	const viewer = isGroup ? null : <Viewer />;

	const viewerActions = getActions(VIEWER_ACTIONS, pathHead, setPathHead);
	const dataActions = getActions(DATA_ACTIONS, pathHead, setPathHead);

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
						isOpen={edit === 'data'}
						setIsOpen={x => x ? setEdit('data') : setEdit(null)}
						hideHeader={isGroup}
					>
						<DataList metaChildren={metaChildren} modelValue={modelValue} setPathHead={setPathHead} isEditing={edit === 'data'} />
					</Col>

					{!isGroup &&
						/* @ts-ignore */
						<Col
							title="Viewer"
							isOpen={edit === 'viewer'}
							setIsOpen={x => x ? setEdit('viewer') : setEdit(null)}
							editPanel={(
								<ActionList actions={viewerActions} />
							)}
						>
							{viewer}
							<StyledColDivider />
							<DataCard pathHead={pathHead} setPathHead={setPathHead} />
						</Col>
					}

				</StyledExplorer>
			</Panel>
		</>
	);
};

export default Explorer;
