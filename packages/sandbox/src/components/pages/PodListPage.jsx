import { SCALE } from '@pw/core/src/Pod.presets';
import PodListUtils from '@pw/core/src/PodList.utils';
import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useLevelContext } from '../core/Level';
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
	const { data: podList, currentLevel } = useLevelContext();

	const [podType, setPodType] = useState('note');

	const preview = PodListUtils.getPreview(podList, { podType });

	return (
		<StyledPodListPage>
			<Panel name={currentLevel.id} caption="Pod List" preview={preview}>
				{
					podList.map((pod, i) => {
						return (
							<div key={i} className="pod-wrapper">
								<PodSubpanel pod={pod} podType={podType} />
								<ZoomButton name={i} level="pod" id={i} />
							</div>
						);
					})
				}
			</Panel>
		</StyledPodListPage>
	);
};

export default PodListPage;
