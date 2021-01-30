import PodUtils from '@pw/core/src/Pod.utils';
import React from 'react';
import Subpanel from '../../ui/Subpanel';
import PodListTable from '../PodList/PodListTable';
import PodTable from '../Pod/PodTable';
import BlockUtils from '@pw/core/src/Block.utils';

const BlockSubpanel = ({ block, setBlock }) => {

	const { keyCenter, intervals } = block;
	console.log(keyCenter, intervals);

	const name = BlockUtils.getName(block);

	return (
		<Subpanel name={name} caption="Block" editable>
			<h4>Key Center</h4>
			<PodTable pod={keyCenter} setPod={null} podType="note" />
			<h4>Intervals</h4>
			<PodListTable pods={intervals} setPods={null} podType="interval" />
		</Subpanel>
	);
};

export default BlockSubpanel;
