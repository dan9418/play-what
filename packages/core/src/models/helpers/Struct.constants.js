
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
		name: 'Native'
	},
	[STRUCT_ID.Object]: {
		structId: STRUCT_ID.Object,
		name: 'Object'
	},
	[STRUCT_ID.List]: {
		structId: STRUCT_ID.List,
		name: 'List'
	},
	[STRUCT_ID.NamedList]: {
		structId: STRUCT_ID.NamedList,
		name: 'Named List'
	},
	[STRUCT_ID.NamedKeyedList]: {
		structId: STRUCT_ID.NamedKeyedList,
		name: 'Named Keyed List'
	},
	[STRUCT_ID.LabeledList]: {
		structId: STRUCT_ID.LabeledList,
		name: 'Labeled List'
	},
	[STRUCT_ID.Group]: {
		structId: STRUCT_ID.Group,
		name: 'Group'
	}
};
