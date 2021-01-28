import React from 'react';
import ChartPage from './ChartPage';
import Home from './Home';
import ConceptPage from './ConceptPage';
import OutputPage from './OutputPage';
import PodListPage from './PodListPage';
import PodPage from './PodPage';

export const PAGE = {
	home: {
		id: 'home',
		name: 'Home',
		component: <Home />
	},
	pod: {
		id: 'pod',
		name: 'Pod',
		component: <PodPage />
	},
	podList: {
		id: 'podList',
		name: 'Pod List',
		component: <PodListPage />
	},
	concept: {
		id: 'concept',
		name: 'Concept',
		component: <ConceptPage />
	},
	output: {
		id: 'output',
		name: 'Output',
		component: <OutputPage />
	},
	chart: {
		id: 'chart',
		name: 'Chart',
		component: <ChartPage />
	}
};

export const PAGE_VALUES = Object.values(PAGE);
