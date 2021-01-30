import { NOTE } from '@pw/core/src/Pod.presets';
import PodUtils from '@pw/core/src/Pod.utils';
import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useLevelContext } from '../core/Level';
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
		width: 100%;
		max-width: 512px;
		margin: 32px 0 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const PodPage = () => {
	const { data: pod, currentLevel } = useLevelContext();
	const [podType, setPodType] = useState('note');

	const preview = JSON.stringify(pod);
	const name = PodUtils.getName(pod, { podType });

	return (
		<StyledPodPage>
			<Panel name={name} caption="Pod" preview={preview}>
				<h2>Pitch<ZoomButton name="Pitch" id={0} level="podIndex" /></h2>
				<PodIndexSubpanel podIndex={pod[0]} podIndexType="pitch" />
				<h2>Degree<ZoomButton name="Degree" id={1} level="podIndex" /></h2>
				<PodIndexSubpanel podIndex={pod[1]} podIndexType="degree" />
			</Panel>
		</StyledPodPage>
	);
};

export default PodPage;
