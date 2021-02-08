import { Group, LabeledList, List, NamedKeyedList, NamedList, Native, PWObject } from './Structs';

/*
	Defines SHAPE of data and how to NAVIGATE with a PATH_ID
*/

export const STRUCT_ID = {
	Native: 0,
	Object: 1,
	List: 2,
	NamedList: 3,
	KeyedList: 4,
	NamedKeyedList: 5,
	LabeledList: 6,
	Group: 7
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
	},
	[STRUCT_ID.Group]: {
		structId: STRUCT_ID.Group,
		name: 'Group',
		component: Group
	}
};
