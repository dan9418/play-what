import React from 'react';
import useBreadcrumbContext, { BreadcrumbContextProvider } from '../../other/BreadcrumbContext';
import { PodContextProvider } from '../../other/PodContext';
import ButtonInput from '../../ui/ButtonInput/ButtonInput';
import ModelPanel from '../explore/ModelPanel';
import './ExploreTab.css';

const Breadcrumbs = () => {
	const breadcrumbContext = useBreadcrumbContext();
	return (
		<div className='breadcrumb-container'>
			{breadcrumbContext.breadcrumbs.map(b => <ButtonInput key={b}>{b}</ButtonInput>)}
		</div>
	);
};

const Explore = () => {
	return (
		<div className='explore-tab'>
			<BreadcrumbContextProvider>
				<h2>Key Center</h2>
				<PodContextProvider>
					<ModelPanel />
				</PodContextProvider>
				<h2>Intervals</h2>
				<PodContextProvider>
					<ModelPanel />
				</PodContextProvider>
				<h2>Notes</h2>
				<PodContextProvider>
					<ModelPanel />
				</PodContextProvider>
			</BreadcrumbContextProvider>
		</div>
	);
};

export default Explore;
