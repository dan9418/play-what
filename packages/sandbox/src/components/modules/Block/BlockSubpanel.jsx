import PodUtils from '@pw/core/src/Pod.utils';
import React from 'react';
import Subpanel from '../../ui/Subpanel';
import PodListTable from '../PodList/PodListTable';
import PodTable from '../Pod/PodTable';

const BlockSubpanel = ({ block, setBlock }) => {

	const { keyCenter, intervals } = block;

	const kc = PodUtils.getName(keyCenter, { podType: 'note' });
	const ivls = PodUtils.getName(intervals, { podType: 'interval' });
	const name = `${kc} ${ivls}`;

	return (
		<Subpanel name={name} caption="Block" editable>
			<PodTable pod={keyCenter} setPod={null} podType="note" />
			<PodListTable podList={intervals} setPod={null} podType="interval" />
		</Subpanel>
	);
};

export default BlockSubpanel;
