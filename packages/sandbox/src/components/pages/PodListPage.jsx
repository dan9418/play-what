import { SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import styled from 'styled-components';
import PodListSubpanel from '../modules/PodList/PodListSubpanel';

const StyledPodListPage = styled.div`
	> * {
		max-width: 512px;
		margin: auto;
	}
`;

const PodListPage = () => {
	const [pods, setPods] = useState(SCALE.Major.value);
	const [podType, setPodType] = useState('note');

	return (
		<StyledPodListPage>
			<PodListSubpanel pods={pods} setPods={setPods} podType={podType} setPodType={setPodType} />
		</StyledPodListPage>
	);
};

export default PodListPage;
