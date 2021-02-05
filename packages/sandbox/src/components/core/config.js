import PodUtils from '@pw/core/src/Pod.utils';
import React from 'react';
import { LabeledList, List, NamedKeyedList, NamedList, Native, PWObject } from './Types';

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
	NamedKeyedList: 4,
	LabeledList: 5
};

export const THEORY_ID = {
	Pitch: 0,
	Degree: 1,
	Note: 2,
	Interval: 3
};

export const THEORY = {
	[THEORY_ID.Pitch]: {
		thoeryId: THEORY_ID.Pitch,
		name: 'Pitch'
	},
	[THEORY_ID.Degree]: {
		thoeryId: THEORY_ID.Degree,
		name: 'Degree'
	},
	[THEORY_ID.Note]: {
		thoeryId: THEORY_ID.Note,
		name: 'Note'
	},
	[THEORY_ID.Interval]: {
		thoeryId: THEORY_ID.Interval,
		name: 'Interval'
	}
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

export const LEVEL = {
	[LEVEL_ID.PodIndex]: {
		levelId: LEVEL_ID.PodIndex,
		typeId: TYPE_ID.Native,
		name: 'Pod Index',
		typeProps: {},
		getPreview: podIndex => podIndex
	},
	[LEVEL_ID.Pod]: {
		levelId: LEVEL_ID.Pod,
		typeId: TYPE_ID.LabeledList,
		name: 'Pod',
		typeProps: {
			childLevelId: LEVEL_ID.PodIndex,
			labels: [
				{ pathId: 'pitch', name: 'Pitch', thoeryId: THEORY_ID.Pitch },
				{ pathId: 'degree', name: 'Degree', thoeryId: THEORY_ID.Degree }
			]
		},
		getPreview: (pod, theoryId) => {
			if (theoryId === THEORY_ID.Note) {
				return PodUtils.getName(pod, { podType: 'note' });
			}
			return JSON.stringify(pod);
		}
	},
	[LEVEL_ID.PodList]: {
		levelId: LEVEL_ID.PodList,
		typeId: TYPE_ID.List,
		name: 'Pod List',
		typeProps: {
			childLevelId: LEVEL_ID.Pod
		},
		getPreview: podList => `${podList.length} Pods`
	},
	[LEVEL_ID.Block]: {
		levelId: LEVEL_ID.Block,
		typeId: TYPE_ID.Object,
		name: 'Block',
		typeProps: {
			properties: [
				{
					propertyId: 'keyCenter',
					levelId: LEVEL_ID.Pod,
					theoryId: THEORY_ID.Note,
					name: 'Key Center'
				},
				{
					propertyId: 'intervals',
					levelId: LEVEL_ID.PodList,
					theoryId: THEORY_ID.Interval,
					name: 'Intervals'
				}
			]
		},
		getPreview: block => `${JSON.stringify(block.keyCenter)} + ${JSON.stringify(block.intervals)}`
	},
	[LEVEL_ID.Section]: {
		levelId: LEVEL_ID.Section,
		typeId: TYPE_ID.NamedList,
		name: 'Section',
		typeProps: {
			childLevelId: LEVEL_ID.Block
		},
		getPreview: section => `${section.data.length} Blocks`
	},
	[LEVEL_ID.Chart]: {
		levelId: LEVEL_ID.Chart,
		typeId: TYPE_ID.NamedKeyedList,
		name: 'Chart',
		typeProps: {
			childLevelId: LEVEL_ID.Section
		},
		getPreview: chart => chart.data.map(s => s.name).join(', ')
	}
};

export const LEVEL_VALUES = Object.values(LEVEL);
