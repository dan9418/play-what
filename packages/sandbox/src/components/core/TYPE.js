import { LabeledList, List, NamedKeyedList, NamedList, Native, PWObject } from './Types';

export const TYPE_ID = {
	Native: 0,
	Object: 1,
	List: 2,
	NamedList: 3,
	NamedKeyedList: 4,
	LabeledList: 5
};

export const TYPE = {
	[TYPE_ID.Native]: {
		typeId: TYPE_ID.Native,
		name: 'Native',
		component: Native
	},
	[TYPE_ID.Object]: {
		typeId: TYPE_ID.Object,
		name: 'Object',
		component: PWObject
	},
	[TYPE_ID.List]: {
		typeId: TYPE_ID.List,
		name: 'List',
		component: List
	},
	[TYPE_ID.NamedList]: {
		typeId: TYPE_ID.NamedList,
		name: 'Named List',
		component: NamedList
	},
	[TYPE_ID.NamedKeyedList]: {
		typeId: TYPE_ID.NamedKeyedList,
		name: 'Named Keyed List',
		component: NamedKeyedList
	},
	[TYPE_ID.LabeledList]: {
		typeId: TYPE_ID.LabeledList,
		name: 'Labeled List',
		component: LabeledList
	}
};
