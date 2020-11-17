import React, { useState } from 'react';
import DropdownInput from '../../ui/DropdownInput/DropdownInput';
import BasicDemo from './demos/BasicDemo';
import CellDemo from './demos/CellDemo';
import './ExploreTab.css';

const DEMOS = [
	{
		id: 'basic',
		name: 'Basic',
		component: <BasicDemo />
	},
	{
		id: 'cell',
		name: 'Cell',
		component: <CellDemo />
	}
];

const Explore = () => {
	const [demo, setDemo] = useState(DEMOS[0]);

	return (
		<div className='explore-tab'>
			<div className="demo-select">
				<label>Demo:</label>
				<DropdownInput options={DEMOS} value={demo} setValue={setDemo} />
			</div>
			{demo.component}
		</div>
	);
};

export default Explore;
