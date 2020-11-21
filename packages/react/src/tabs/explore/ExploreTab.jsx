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
			<div className="demo-select">
				<h1>Demo:</h1>
				<DropdownInput options={DEMOS} value={demo} setValue={setDemo} />
			</div>
			{demo.component}
		</div>
	);
};

export default Explore;
