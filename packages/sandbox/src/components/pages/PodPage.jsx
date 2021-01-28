import { NOTE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import styled from 'styled-components';
import PodTable from '../modules/Pod/PodTable';

const StyledListPage = styled.div`
	> * {
		max-width: 512px;
		margin: auto;
	}
`;

const PodPage = () => {
	const [pod, setPod] = useState(NOTE.C.value);
	const [podType, setPodType] = useState('note');

	return (
		<StyledListPage>
			<PodTable name="Pod" pod={pod} setPod={setPod} podType={podType} editable />
		</StyledListPage>
	);
};

export default PodPage;
