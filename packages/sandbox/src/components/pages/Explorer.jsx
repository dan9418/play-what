import React from 'react';
import styled from 'styled-components';
import { usePathContext } from '../../contexts/PathContext';
import BreadcrumbList from '../core/BreadcrumbList';
import GenericModel from '../core/GenericModel';
import Viewer from '../core/Viewer';
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
	const { modelData, modelId, name } = pathHead;

	const panelProps = getPanelProps(modelData, modelId, name);

	return (
		<StyledExplorer>
			<BreadcrumbList />
			<Panel {...panelProps}>
				<GenericModel modelData={modelData} modelId={modelId} />
			</Panel>
		</StyledExplorer>
	);
};

export default Explorer;
