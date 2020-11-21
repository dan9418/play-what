import React, { useState } from 'react';
import DropdownInput from '../../ui/DropdownInput/DropdownInput';
import BasicDemo from './demos/BasicDemo';
import './ExploreTab.css';

const DEMOS = [
	{
		id: 'basic',
		name: 'Basic',
		component: <BasicDemo />
	}
];

const Explore = () => {
	const [demo, setDemo] = useState(DEMOS[0]);

	return (
		<div className='explore-tab'>
			<h1 className="demo-select">
				<label>Demo:</label>
				<DropdownInput options={DEMOS} value={demo} setValue={setDemo} />
			</h1>
			{demo.component}
		</div>
	);
};

export default Explore;
