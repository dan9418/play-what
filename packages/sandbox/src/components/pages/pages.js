import About from './About';
import BlockPage from './BlockPage';
import ChartPage from './ChartPage';
import FretboardPage from './FretboardPage';
import PodIndexPage from './PodIndexPage';
import PodListPage from './PodListPage';
import PodPage from './PodPage';
import SectionPage from './SectionPage';

/*
	podIndex
		type: array
		extensible: no
		type: pitch/degree
	pod
		type: array
		extensible: no
		type: note/interval
	podList
		type: array
		extensible: yes
		type: chord/scale
	block
		type: object
		extensible: no
	group
		type: namedArray
		extensible: yes
*/

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
