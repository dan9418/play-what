import { NOTE } from '@pw/core/src/Pod.presets';
import PodUtils from '@pw/core/src/Pod.utils';
import React, { useState } from 'react';
import styled from 'styled-components';
import PodSubpanel from '../modules/Pod/PodSubpanel';
import PodIndexSubpanel from '../modules/PodIndex/PodIndexSubpanel';
import PodIndexTable from '../modules/PodIndex/PodIndexTable';
import Panel from '../ui/Panel';

const StyledPodPage = styled.div`
	.panel-body {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	h2 {
		margin: 32px 0 16px;
	}
`;

const PodPage = () => {
	const [pod, setPod] = useState(NOTE.C.value);
	const [podType, setPodType] = useState('note');

	const preview = PodUtils.getName(pod, { podType });

	return (
		<StyledPodPage>
			<Panel name="Untitled" caption="Concept" preview={preview}>
				<h2>Pitch</h2>
				<PodIndexSubpanel podIndex={pod[0]} podIndexType="pitch" />
				<h2>Degree</h2>
				<PodIndexSubpanel podIndex={pod[1]} podIndexType="degree" />
			</Panel>
		</StyledPodPage>
	);
};

export default PodPage;
