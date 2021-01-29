import React from 'react';
import Subpanel from '../../ui/Subpanel';
import PodTable from './PodTable';

const POD_ACTIONS = [
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

const PodSubpanel = ({ pod, setPod, podType, setPodType }) => {

	return (
		<Subpanel name="Pod" actions={POD_ACTIONS} editable>
			<PodTable pod={pod} setPod={setPod} podType={podType} />
		</Subpanel>
	);
};

export default PodSubpanel;
