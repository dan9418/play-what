import { NOTE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import styled from 'styled-components';
import PodTable from '../modules/Pod/PodTable';

const StyledPodIndexPage = styled.div`
	> * {
		max-width: 512px;
		margin: auto;
	}
`;

const PodIndexPage = () => {
	const [pod, setPod] = useState(NOTE.C.value);
	const [podType, setPodType] = useState('note');

	return (
		<StyledPodIndexPage>
			<PodTable name="Pod" pod={pod} setPod={setPod} podType={podType} editable />
		</StyledPodIndexPage>
	);
};

export default PodIndexPage;
