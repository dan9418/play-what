import BlockSubpanel from '../levels/Block/BlockSubpanel';
import PodSubpanel from '../levels/Pod/PodSubpanel';
import PodIndexSubpanel from '../levels/PodIndex/PodIndexSubpanel';
import PodListSubpanel from '../levels/PodList/PodListSubpanel';
import SectionSubpanel from '../levels/Section/SectionSubpanel';

export const LEVEL_ID = {
	PodIndex: 0,
	Pod: 1,
	PodList: 2,
	Block: 3,
	Section: 4,
	Chart: 5
};

export const TYPE_ID = {
	Native: 0,
	Object: 1,
	List: 2,
	NamedList: 3,
	NamedKeyedList: 4
};

export const TYPE = {
	[TYPE_ID.Native]: {
		id: TYPE_ID.Native,
		name: 'Native'
	},
	[TYPE_ID.Object]: {
		id: TYPE_ID.Object,
		name: 'Object'
	},
	[TYPE_ID.List]: {
		id: TYPE_ID.List,
		name: 'List'
	},
	[TYPE_ID.NamedList]: {
		id: TYPE_ID.NamedList,
		name: 'Named List'
	},
	[TYPE_ID.NamedKeyedList]: {
		id: TYPE_ID.NamedKeyedList,
		name: 'Named Keyed List'
	}
};

export const LEVEL = {
	[LEVEL_ID.PodIndex]: {
		levelId: LEVEL_ID.PodIndex,
		typeId: TYPE_ID.Native,
		name: 'Pod Index',
		subpanelComponent: PodIndexSubpanel
	},
	[LEVEL_ID.Pod]: {
		levelId: LEVEL_ID.Pod,
		typeId: TYPE_ID.List,
		name: 'Pod',
		subpanelComponent: PodSubpanel
	},
	[LEVEL_ID.PodList]: {
		levelId: LEVEL_ID.PodList,
		typeId: TYPE_ID.List,
		name: 'Pod List',
		subpanelComponent: PodListSubpanel
	},
	[LEVEL_ID.Block]: {
		levelId: LEVEL_ID.Block,
		typeId: TYPE_ID.Object,
		name: 'Block',
		subpanelComponent: BlockSubpanel
	},
	[LEVEL_ID.Section]: {
		levelId: LEVEL_ID.Section,
		typeId: TYPE_ID.NamedList,
		name: 'Section',
		subpanelComponent: SectionSubpanel
	},
	[LEVEL_ID.Chart]: {
		levelId: LEVEL_ID.Chart,
		typeId: TYPE_ID.NamedKeyedList,
		name: 'Chart',
		subpanelComponent: null
	}
};

export const LEVEL_VALUES = Object.values(LEVEL);
