import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../../contexts/DataContext';
import { usePathContext } from '../../contexts/PathContext';
import BreadcrumbList from '../core/BreadcrumbList';
import Viewer from '../core/Viewer';
import getPanelContent from '../ui/layout/getPanelContent';
import getPanelProps from '../ui/layout/getPanelProps';
import Panel from '../ui/layout/Panel';

const StyledExplorer = styled.div`
	.panel-body {
		display: flex;
		align-items: center;
		flex-direction: column;

        > * {
			margin: 9px 0;
		}
	}
`;

const Explorer = () => {
	const { pathHead } = usePathContext();
	const { modelData } = useDataContext();
	const { modelId, name } = pathHead;

	const panelProps = getPanelProps(modelData, modelId, name);
	const content = getPanelContent(modelData, modelId);

	return (
		<StyledExplorer>
			<BreadcrumbList />
			<Panel {...panelProps}>
				<Viewer />
				{content}
			</Panel>
		</StyledExplorer>
	);
};

export default Explorer;
