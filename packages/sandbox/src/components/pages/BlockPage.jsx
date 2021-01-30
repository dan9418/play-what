import { NOTE, SCALE } from '@pw/core/src/Pod.presets';
import PodUtils from '@pw/core/src/Pod.utils';
import PodListUtils from '@pw/core/src/PodList.utils';
import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React, { useState } from 'react';
import styled from 'styled-components';
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
	const [keyCenter, setKeyCenter] = useState(NOTE.C.value);
	const [intervals, setIntervals] = useState(SCALE.Major.value);

	const notes = PodUtils.addPodList(keyCenter, intervals);
	const preview = PodListUtils.getPreview(notes, { podType: 'note' });

	return (
		<StyledBlockPage>
			<Panel name="Untitled" caption="Block" preview={preview}>
				<h2>Key Center<ZoomButton name="Key Center" id="keyCenter" level="pod" /></h2>
				<PodSubpanel pod={keyCenter} setPod={setKeyCenter} podType="note" />
				<h2>Intervals<ZoomButton name="Intervals" id="intervals" level="podList" /></h2>
				<PodListSubpanel pods={intervals} setPods={setIntervals} podType="interval" />
				<h2>Notes<ZoomButton name="Notes" id="notes" level="podList" /></h2>
				<PodListSubpanel pods={notes} podType="note" />
			</Panel>
		</StyledBlockPage>
	);
};

export default BlockPage;
