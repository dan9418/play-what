import { MODEL } from '@pw/core/src/models/helpers/Model.constants';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { pathHeadState, pathState } from '../../state/pathState';
import BreadcrumbList from '../core/BreadcrumbList';
import DataPanel from '../core/DataPanel';
import Viewer from '../core/Viewer';
import Panel from '../ui/layout/Panel';

const StyledExplorer = styled.div`
	display: grid;
	grid-gap: 32px;
	width: 100%;
	max-width: 512px;
	margin: auto;

	/*@media(min-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		max-width: 100%;
	}*/

	grid-template-columns: 1fr;

	padding: 0 0 24px 0;
`;

const Explorer = () => {
	const pathHead = useRecoilValue(pathHeadState);
	const path = useRecoilValue(pathState);
	const { modelId, modelConfig } = pathHead;

	const model = MODEL[modelId];

	const metaChildren = model.utils.getMetaChildren(modelConfig);

	useEffect(() => window.scrollTo(0, 0), [path.length]);

	return (
		<>
			<BreadcrumbList />
			<Panel {...pathHead}>
				<StyledExplorer>
					<Viewer modelId={modelId} modelConfig={modelConfig} metaChildren={metaChildren} />
					<DataPanel modelId={modelId} modelConfig={modelConfig} metaChildren={metaChildren} />
				</StyledExplorer>
			</Panel>
		</>
	);
};

export default Explorer;
