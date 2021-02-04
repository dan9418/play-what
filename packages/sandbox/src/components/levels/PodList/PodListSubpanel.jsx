import PodListUtils from '@pw/core/src/PodList.utils';
import React from 'react';
import Subpanel from '../../ui/Subpanel';
import PodListTable from './PodListTable';

const POD_LIST_ACTIONS = [
	{
		id: 'preset',
		text: 'Import Preset',
		component: <React.Fragment />
	},
	{
		id: 'transform',
		text: 'Transform',
		component: <React.Fragment />
	}
];

const PodListSubpanel = ({ data: pods }) => {

	const name = PodListUtils.getPreview(pods, { podType: 'interval' });

	return (
		<Subpanel
			name={name}
			caption="Pod List"
			actions={POD_LIST_ACTIONS}
			editable
		>
			<PodListTable pods={pods} setPods={null} podType={'interval'} />
		</Subpanel>
	);
};

export default PodListSubpanel;
