import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../../contexts/DataContext';
import { usePathContext } from '../../contexts/PathContext';
import BreadcrumbList from '../core/BreadcrumbList';
import { GenericModel } from '../core/StructComponents';
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
	const { modelData, modelId } = useDataContext();
	const { name } = modelData;

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
