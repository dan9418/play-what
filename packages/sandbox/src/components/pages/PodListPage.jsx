import { SCALE } from '@pw/core/src/Pod.presets';
import PodListUtils from '@pw/core/src/PodList.utils';
import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React, { useState } from 'react';
import styled from 'styled-components';
import PodSubpanel from '../modules/Pod/PodSubpanel';
import PodListSubpanel from '../modules/PodList/PodListSubpanel';
import Panel from '../ui/Panel';

const StyledPodListPage = styled.div`
	.panel-body {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 32px 0 16px;

		> * {
			margin: 16px 0;
		}
	}

	.pod-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 512px;
		>:first-child {
			width: 100%;
			margin-right: 8px;	
		}
	}
`;

const PodListPage = () => {
	const [pods, setPods] = useState(SCALE.Major.value);
	const [podType, setPodType] = useState('note');

	const preview = PodListUtils.getPreview(pods, { podType: 'interval' });

	return (
		<StyledPodListPage>
			<Panel name="Untitled" caption="Pod List" preview={preview}>
				{
					pods.map((pod, i) => {
						return (
							<div key={i} className="pod-wrapper">
								<PodSubpanel pod={pod} podType={podType} />
								<ZoomButton name={i} level="pod" pathId={0} />
							</div>
						);
					})
				}
			</Panel>
		</StyledPodListPage>
	);
};

export default PodListPage;
