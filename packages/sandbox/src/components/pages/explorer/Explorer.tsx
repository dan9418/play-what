import { IModelDef, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import { pathHeadState, pathState } from '../../../state/pathState';
import Col from '../../ui/layout/Col';
import Panel from '../../ui/layout/Panel';
import DATA_ACTIONS from './dataCol/actions/dataActions';
import DataList from './dataCol/DataList';
import BreadcrumbList from './shared/BreadcrumbList';
import ViewerCol from './viewerCol/ViewerCol';

const StyledExplorer = styled.div`
	display: grid;
	width: 100%;
	margin: auto;
	margin-top: 16px;

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

const Explorer = () => {
	const path = useRecoilValue(pathState);
	const [edit, setEdit] = useState(null);
	const [pathHead, setPathHeadConfig] = useRecoilState(pathHeadState);

	const { modelId, modelValue, modelOptions } = (pathHead as IModelDef).config;
	const { name, preview, pathId, metaChildren } = (pathHead as IModelDef).data;

	React.useEffect(() => {
		window.scrollTo(0, 0), [path.length, pathId];
		setEdit(null);
	}, [path.length, pathId]);

	const isGroup = modelId === MODEL_ID.Group;

	const dataActions = DATA_ACTIONS;

	const hasRoot = !isGroup && modelOptions && modelOptions.modelRoot;

	const dataName = isGroup ? 'Items' : hasRoot ? 'Intervals' : 'Notes';

	return (
		<>
			<BreadcrumbList />
			{/* @ts-ignore */}
			<Panel name={name} preview={preview} caption={null} >
				<StyledExplorer>
					<ViewerCol />
					<div className="double">
						{hasRoot &&
							<Col
								title="Root"
								actions={[]}
								isOpen={edit === 'root'}
								setIsOpen={x => x ? setEdit('root') : setEdit(null)}
							>
								<DataList pathHead={pathHead} setPathHeadConfig={setPathHeadConfig} isEditing={edit === 'data'} level={path.length} />
							</Col>
						}
						<Col
							title={dataName}
							actions={dataActions}
							isOpen={edit === 'data'}
							setIsOpen={x => x ? setEdit('data') : setEdit(null)}
						>
							<DataList pathHead={pathHead} setPathHeadConfig={setPathHeadConfig} isEditing={edit === 'data'} level={path.length} />
						</Col>
					</div>
				</StyledExplorer>
			</Panel>
		</>
	);
};

export default Explorer;
