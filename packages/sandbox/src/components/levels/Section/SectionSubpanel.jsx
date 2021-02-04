import PodListUtils from '@pw/core/src/PodList.utils';
import React from 'react';
import Subpanel from '../../ui/Subpanel';
import SectionTable from './SectionTable';
import PodListTable from './SectionTable';

const SECTION_ACTIONS = [
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

const SectionSubpanel = ({ data: section }) => {

	return (
		<Subpanel
			name={section.name}
			caption="Section"
			actions={SECTION_ACTIONS}
			editable
		>
			<SectionTable section={section} />
		</Subpanel>
	);
};

export default SectionSubpanel;
