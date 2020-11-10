import React, { useState } from 'react';
import ModelPanel from '../explore/ModelPanel';
import usePodContext, { PodContextProvider } from '../../other/PodContext';
import './ExploreTab.css';
import ButtonInput from '../../ui/ButtonInput/ButtonInput';

const Breadcrumbs = () => {
	const podContext = usePodContext();
	return (
		<div className='breadcrumb-container'>
			{podContext.breadcrumbs.map(b => <ButtonInput key={b}>{b}</ButtonInput>)}
		</div>
	);
};

const Explore = () => {
	return (
		<div className='explore-tab'>
			<PodContextProvider>
				<Breadcrumbs />
				<ModelPanel />
			</PodContextProvider>
		</div>
	);
};

export default Explore;
