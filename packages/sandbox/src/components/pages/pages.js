import React from 'react';
import ChartPage from './ChartPage';
import About from './About';
import BlockPage from './BlockPage';
import PodListPage from './PodListPage';
import PodPage from './PodPage';
import FretboardPage from './FretboardPage';
import PodIndexPage from './PodIndexPage';
import SectionPage from './SectionPage';

export const PAGE = {
	about: {
		id: 'about',
		name: 'About',
		component: About
	},
	podIndex: {
		id: 'podIndex',
		name: 'Pod Index',
		component: PodIndexPage
	},
	pod: {
		id: 'pod',
		name: 'Pod',
		component: PodPage
	},
	podList: {
		id: 'podList',
		name: 'Pod List',
		component: PodListPage
	},
	block: {
		id: 'block',
		name: 'Block',
		component: BlockPage
	},
	section: {
		id: 'section',
		name: 'Section',
		component: SectionPage
	},
	chart: {
		id: 'chart',
		name: 'Chart',
		component: ChartPage
	},
	fretboard: {
		id: 'fretboard',
		name: 'Fretboard',
		component: FretboardPage
	}
};

export const PAGE_VALUES = Object.values(PAGE);
