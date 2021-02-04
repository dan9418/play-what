import React from 'react';
import Subpanel from '../../ui/Subpanel';
import PodIndexTable from './PodIndexTable';

const POD_INDEX_ACTIONS = [
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

const PodIndexSubpanel = ({ data: podIndex }) => {

	return (
		<Subpanel name={podIndex} caption="Pod Index" actions={POD_INDEX_ACTIONS} editable>
			<PodIndexTable podIndex={podIndex} setPodIndex={null} podIndexType={'pitch'} setPodIndexType={null} />
		</Subpanel>
	);
};

export default PodIndexSubpanel;
