import { LabeledList, List, NamedKeyedList, NamedList, Native, PWObject } from './Types';

export const STRUCT_ID = {
	Native: 0,
	Object: 1,
	List: 2,
	NamedList: 3,
	NamedKeyedList: 4,
	LabeledList: 5
};

export const STRUCT = {
	[STRUCT_ID.Native]: {
		structId: STRUCT_ID.Native,
		name: 'Native',
		component: Native
	},
	[STRUCT_ID.Object]: {
		structId: STRUCT_ID.Object,
		name: 'Object',
		component: PWObject
	},
	[STRUCT_ID.List]: {
		structId: STRUCT_ID.List,
		name: 'List',
		component: List
	},
	[STRUCT_ID.NamedList]: {
		structId: STRUCT_ID.NamedList,
		name: 'Named List',
		component: NamedList
	},
	[STRUCT_ID.NamedKeyedList]: {
		structId: STRUCT_ID.NamedKeyedList,
		name: 'Named Keyed List',
		component: NamedKeyedList
	},
	[STRUCT_ID.LabeledList]: {
		structId: STRUCT_ID.LabeledList,
		name: 'Labeled List',
		component: LabeledList
	}
};
