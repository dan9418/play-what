import { NOTE, SCALE } from '@pw/core/src/Pod.presets';
import PodUtils from '@pw/core/src/Pod.utils';
import PodListUtils from '@pw/core/src/PodList.utils';
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
		margin: 32px 0 16px;
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
				<h2>Key Center</h2>
				<PodSubpanel pod={keyCenter} setPod={setKeyCenter} podType="note" />
				<h2>Intervals</h2>
				<PodListSubpanel pods={intervals} setPods={setIntervals} podType="interval" />
				<h2>Notes</h2>
				<PodListSubpanel pods={notes} podType="note" />
			</Panel>
		</StyledBlockPage>
	);
};

export default BlockPage;
