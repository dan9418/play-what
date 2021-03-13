import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { pathHeadState } from '../../state/pathState';
import ActionBox from '../core/ActionBox';
import BreadcrumbList from '../core/BreadcrumbList';
import DataList from '../core/DataList';
import Viewer from '../core/Viewer';
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

const StyledActionList = styled.ul`
	display: flex;
	> li {
		padding: 8px;
		color: darkblue;
		padding-right: 8px;
		cursor: pointer;
	}
`;

const Explorer = () => {
	const [superset, setSuperset] = useState(null);
	const [pathHead, setPathHeadValue] = useRecoilState(pathHeadState);
	const { modelId, modelValue, modelRoot, onEdit } = pathHead;
	const model = MODEL[modelId];

	const refreshKey = JSON.stringify({ modelId, modelValue, modelRoot });

	useEffect(() => window.scrollTo(0, 0), [refreshKey]);

	const metaChildren = model.utils.getMetaChildren(modelValue, modelRoot, setPathHeadValue);

	const viewer = modelId === MODEL_ID.Group ?
		null :
		<Viewer modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} superset={superset} />;

	return (
		<>
			<BreadcrumbList />
			<Panel {...pathHead}>
				<StyledExplorer>
					<div>
						{viewer}
						<ActionBox modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setModel={setPathHeadValue} setSuperset={setSuperset} />
					</div>
					<div>
						<DataList modelId={modelId} modelValue={modelValue} metaChildren={metaChildren} modelRoot={modelRoot} onEdit={setPathHeadValue} />
					</div>
				</StyledExplorer>
			</Panel>
		</>
	);
};

export default Explorer;
