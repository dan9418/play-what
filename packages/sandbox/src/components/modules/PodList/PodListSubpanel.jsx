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

const PodListSubpanel = ({ pods, setPods, podType, setPodType }) => {

	const name = PodListUtils.getPreview(pods, { podType });

	return (
		<Subpanel
			name={name}
			caption="Pod List"
			actions={POD_LIST_ACTIONS}
			editable
		>
			<PodListTable pods={pods} setPods={setPods} podType={podType} />
		</Subpanel>
	);
};

export default PodListSubpanel;
