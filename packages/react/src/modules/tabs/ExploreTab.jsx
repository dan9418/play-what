import React, { useState } from 'react';
import { PodContextProvider } from '../other/PodContext';
import ModelPanel from '../explore/ModelPanel';
import pw_core from '@pw/core';
import './ExploreTab.css';

//const DEFAULT_VALUE = new pw_core.PodIndex(0);
//const DEFAULT_VALUE = new pw_core.Pod([0, 0]);
const DEFAULT_VALUE = new pw_core.PodList([[0, 0], [0, 0]]);

const Explore = () => {
	const [value, setValue] = useState(DEFAULT_VALUE);
	return (
		<div className='explore-tab'>
			<PodContextProvider
				value={value}
				setValue={setValue}
			>
				<ModelPanel label='Custom' />
			</PodContextProvider>
		</div>
	);
};

export default Explore;
