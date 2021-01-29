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

	return (
		<Subpanel
			name="Pod List"
			actions={POD_LIST_ACTIONS}
			editable
		>
			<PodListTable pods={pods} setPods={setPods} podType={podType} />
		</Subpanel>
	);
};

export default PodListSubpanel;
