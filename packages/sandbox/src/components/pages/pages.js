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

export const LEVEL_ID = {
	PodIndex: 0,
	Pod: 1,
	PodList: 2,
	Block: 3,
	Section: 4,
	Chart: 5
};

export const TYPE = {
	Object: 0,
	List: 1,
	NamedList: 2
};

export const LEVEL = {
	[LEVEL_ID.PodIndex]: {
		id: LEVEL_ID.PodIndex,
		name: 'Pod Index',
		component: PodIndexPage
	},
	[LEVEL_ID.Pod]: {
		id: LEVEL_ID.Pod,
		name: 'Pod',
		component: PodPage
	},
	[LEVEL_ID.PodList]: {
		id: LEVEL_ID.PodList,
		name: 'Pod List',
		component: PodListPage
	},
	[LEVEL_ID.Block]: {
		id: LEVEL_ID.Block,
		name: 'Block',
		component: BlockPage
	},
	[LEVEL_ID.Section]: {
		id: LEVEL_ID.Section,
		name: 'Section',
		component: SectionPage
	},
	[LEVEL_ID.Chart]: {
		id: LEVEL_ID.Chart,
		name: 'Chart',
		component: ChartPage
	},
	[LEVEL_ID.Fretboard]: {
		id: LEVEL_ID.Fretboard,
		name: 'Fretboard',
		component: FretboardPage
	}
};

export const LEVEL_VALUES = Object.values(LEVEL);
