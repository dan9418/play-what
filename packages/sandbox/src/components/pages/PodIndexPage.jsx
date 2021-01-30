import { NOTE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useLevelContext } from '../core/Level';
import PodTable from '../modules/Pod/PodTable';
import PodIndexSubpanel from '../modules/PodIndex/PodIndexSubpanel';
import Panel from '../ui/Panel';

const StyledPodIndexPage = styled.div`
	.panel-body {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 32px 0 16px;
	}

	h2 {
		
	}
`;

const PodIndexPage = () => {
	const { data: podIndex } = useLevelContext();
	const [podIndexType, setPodIndexType] = useState('pitch');

	return (
		<StyledPodIndexPage>
			<Panel name="Untitled" caption="Index" preview={podIndexType}>
				<PodIndexSubpanel podIndex={podIndex} setPodIndex={null} podIndexType={podIndexType} setPodIndexType={setPodIndexType} />
			</Panel>
		</StyledPodIndexPage>
	);
};

export default PodIndexPage;
