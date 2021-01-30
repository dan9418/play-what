import { SCALE } from '@pw/core/src/Pod.presets';
import PodListUtils from '@pw/core/src/PodList.utils';
import React, { useState } from 'react';
import styled from 'styled-components';
import PodListSubpanel from '../modules/PodList/PodListSubpanel';
import Panel from '../ui/Panel';

const StyledPodListPage = styled.div`
	.panel-body {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 32px 0 16px;
	}

	h2 {
		
	}
`;

const PodListPage = () => {
	const [pods, setPods] = useState(SCALE.Major.value);
	const [podType, setPodType] = useState('note');

	const preview = PodListUtils.getPreview(pods, { podType: 'interval' });

	return (
		<StyledPodListPage>
			<Panel name="Untitled" caption="Block" preview={preview}>
				<PodListSubpanel pods={pods} setPods={setPods} podType={podType} setPodType={setPodType} />
			</Panel>
		</StyledPodListPage>
	);
};

export default PodListPage;
