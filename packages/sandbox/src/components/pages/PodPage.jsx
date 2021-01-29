import { NOTE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import styled from 'styled-components';
import PodSubpanel from '../modules/Pod/PodSubpanel';

const StyledPodPage = styled.div`
	> * {
		max-width: 512px;
		margin: auto;
	}
`;

const PodPage = () => {
	const [pod, setPod] = useState(NOTE.C.value);
	const [podType, setPodType] = useState('note');

	return (
		<StyledPodPage>
			<PodSubpanel pod={pod} setPod={setPod} podType={podType} setPodType={setPodType} />
		</StyledPodPage>
	);
};

export default PodPage;
