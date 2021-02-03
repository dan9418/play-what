import BlockUtils from '@pw/core/src/Block.utils';
import PodUtils from '@pw/core/src/Pod.utils';
import PodListUtils from '@pw/core/src/PodList.utils';
import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import { useLevelContext } from '../core/Level';
import PodSubpanel from '../modules/Pod/PodSubpanel';
import PodListSubpanel from '../modules/PodList/PodListSubpanel';
import Panel from '../ui/Panel';
import { LEVEL_ID } from './pages';

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
	const { data: block } = useLevelContext();

	const { keyCenter, intervals } = block;

	const notes = PodUtils.addPodList(keyCenter, intervals);
	const name = BlockUtils.getName(block);
	const preview = PodListUtils.getPreview(notes, { podType: 'note' });

	return (
		<StyledBlockPage>
			<Panel name={name} caption="Block" preview={preview}>
				<h2>Key Center<ZoomButton name="Key Center" pathId="keyCenter" levelId={LEVEL_ID.Pod} /></h2>
				<PodSubpanel pod={keyCenter} setPod={null} podType="note" />
				<h2>Intervals<ZoomButton name="Intervals" pathId="intervals" levelId={LEVEL_ID.PodList} /></h2>
				<PodListSubpanel pods={intervals} setPods={null} podType="interval" />
				<h2>Notes<ZoomButton name="Notes" pathId="notes" levelId={LEVEL_ID.PodList} /></h2>
				<PodListSubpanel pods={notes} podType="note" />
			</Panel>
		</StyledBlockPage>
	);
};

export default BlockPage;
