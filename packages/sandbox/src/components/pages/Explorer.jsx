import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { pathHeadState } from '../../state/pathState';
import BreadcrumbList from '../core/BreadcrumbList';
import DataPanel from '../core/DataPanel';
import Derivations from '../core/Derivations';
import PlaybackControls from '../core/PlaybackControls';
import ViewerPanel from '../core/ViewerPanel';
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

	return (
		<>
			<BreadcrumbList />
			<Panel {...pathHead}>
				<StyledExplorer>
					<h2>Viewer</h2>
					<ViewerPanel />
					<h2>Data</h2>
					<DataPanel />
				</StyledExplorer>
			</Panel>
		</>
	);
};

export default Explorer;
