import React, { useState } from 'react';
import { PodContextProvider } from '../other/PodContext';
import ModelPanel from '../explore/ModelPanel';
import pw_core from '@pw/core';
import './ExploreTab.css';

export const POD_TYPE = {
	interval: 0,
	note: 1
}

//const DEFAULT_VALUE = new pw_core.PodIndex(0);
//const DEFAULT_VALUE = new pw_core.Pod([0, 0]);
const DEFAULT_VALUE = new pw_core.Interval([[0, 0], [1, 1]]);

const Explore = () => {
	const [value, setValue] = useState(DEFAULT_VALUE);
	const [podType, setPodType] = useState(POD_TYPE.interval);
	return (
		<div className='explore-tab'>
			<PodContextProvider
				value={value}
				setValue={setValue}
				podType={podType}
				setPodType={setPodType}
			>
				<ModelPanel />
			</PodContextProvider>
		</div>
	);
};

export default Explore;
