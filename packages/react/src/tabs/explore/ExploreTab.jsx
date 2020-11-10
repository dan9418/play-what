import React from 'react';
import ModelPanel from '../explore/ModelPanel';
import { PodContextProvider } from '../../other/PodContext';
import './ExploreTab.css';

const Explore = () => {
	return (
		<div className='explore-tab'>
			<PodContextProvider>
				<ModelPanel />
			</PodContextProvider>
		</div>
	);
};

export default Explore;
