import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../../contexts/DataContext';
import BreadcrumbList from '../core/BreadcrumbList';
import GenericModel from '../core/GenericModel';
import Viewer from '../core/Viewer';
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
	const { modelData, modelId } = useDataContext();

	//const panelProps = getPanelProps(modelData, modelId, name);
	//const content = getPanelContent(modelData, modelId);

	const panelProps = {
		name: 'Panel',
		preview: null,
		caption: modelId
	}

	const content = <GenericModel modelData={modelData} modelId={modelId} />;

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
