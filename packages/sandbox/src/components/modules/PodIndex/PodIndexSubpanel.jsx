import React from 'react';
import Subpanel from '../../ui/Subpanel';

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

const PodIndexSubpanel = ({ index, setIndex, podIndexType, setPodIndexType }) => {

	return (
		<Subpanel name={index} caption="Pod Index" actions={POD_INDEX_ACTIONS} editable>
			here
		</Subpanel>
	);
};

export default PodIndexSubpanel;
