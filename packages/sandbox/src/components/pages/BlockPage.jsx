import PodUtils from '@pw/core/src/Pod.utils';
import PodListUtils from '@pw/core/src/PodList.utils';
import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import { useLevelContext } from '../core/Level';
import PodSubpanel from '../modules/Pod/PodSubpanel';
import PodListSubpanel from '../modules/PodList/PodListSubpanel';
import Panel from '../ui/Panel';

const StyledBlockPage = styled.div`
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

const BlockPage = () => {
	const { data: block, currentLevel } = useLevelContext();

	const { keyCenter, intervals } = block;

	const notes = PodUtils.addPodList(keyCenter, intervals);
	const preview = PodListUtils.getPreview(notes, { podType: 'note' });

	return (
		<StyledBlockPage>
			<Panel name={currentLevel.name} caption="Block" preview={preview}>
				<h2>Key Center<ZoomButton name="Key Center" id="keyCenter" level="pod" /></h2>
				<PodSubpanel pod={keyCenter} setPod={null} podType="note" />
				<h2>Intervals<ZoomButton name="Intervals" id="intervals" level="podList" /></h2>
				<PodListSubpanel pods={intervals} setPods={null} podType="interval" />
				<h2>Notes<ZoomButton name="Notes" id="notes" level="podList" /></h2>
				<PodListSubpanel pods={notes} podType="note" />
			</Panel>
		</StyledBlockPage>
	);
};

export default BlockPage;
