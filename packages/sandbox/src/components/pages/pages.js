import React from 'react';
import ChartPage from './ChartPage';
import Home from './Home';
import ConceptPage from './ConceptPage';
import PodListPage from './PodListPage';
import PodPage from './PodPage';
import FretboardPage from './FretboardPage';

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
	fretboard: {
		id: 'fretboard',
		name: 'Fretboard',
		component: <FretboardPage />
	},
	chart: {
		id: 'chart',
		name: 'Chart',
		component: <ChartPage />
	}
};

export const PAGE_VALUES = Object.values(PAGE);
