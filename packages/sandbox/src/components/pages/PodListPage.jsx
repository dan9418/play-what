import { SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import styled from 'styled-components';
import PodTable from '../modules/InputPanel/table/PodTable';

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
			<PodTable name="Pod List" pods={pods} setPods={setPods} podType={podType} editable />
		</StyledPodListPage>
	);
};

export default PodListPage;
