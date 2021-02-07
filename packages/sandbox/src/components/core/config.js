import CoreUtils from '@pw/core/src/Core.utils';
import PodUtils from '@pw/core/src/Pod.utils';
import PodListUtils from '@pw/core/src/PodList.utils';
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
	Interval: 3,
	Chord: 4,
	Scale: 5
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
	},
	[THEORY_ID.Chord]: {
		thoeryId: THEORY_ID.Chord,
		name: 'Chord'
	},
	[THEORY_ID.Scale]: {
		thoeryId: THEORY_ID.Scale,
		name: 'Scale'
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

const getPodTableProps = (pod, theoryId) => {
	let theoryCol = {
		header: '?',
		getData: () => '?'
	};
	if (theoryId === THEORY_ID.Note) {
		theoryCol = {
			header: 'Freq',
			getData: pod => 'f'
		};
	}
	if (theoryId === THEORY_ID.Interval) {
		theoryCol = {
			header: 'Ratio',
			getData: pod => '1:n'
		};
	}
	return {
		headers: ['Name', 'P', 'D', theoryCol.header],
		rows: [{
			cols: [JSON.stringify(pod), pod[0], pod[1], theoryCol.getData(pod)]
		}]
	};
};

const getPodListTableProps = (podList, theoryId) => {
	let theoryCol = {
		header: '?',
		getData: () => '?'
	};
	if (theoryId === THEORY_ID.Note) {
		theoryCol = {
			header: 'Freq',
			getData: pod => 'f'
		};
	}
	if (theoryId === THEORY_ID.Interval) {
		theoryCol = {
			header: 'Ratio',
			getData: pod => '1:n'
		};
	}
	return {
		headers: ['Name', 'P', 'D', theoryCol.header],
		rows: podList.map((pod, i) => ({
			cols: [JSON.stringify(pod), pod[0], pod[1], theoryCol.getData(pod)]
		}))
	};
};

export const LEVEL = {
	[LEVEL_ID.PodIndex]: {
		levelId: LEVEL_ID.PodIndex,
		typeId: TYPE_ID.Native,
		name: 'Pod Index',
		typeProps: {},
		getPreview: podIndex => podIndex,
		getTableProps: (podIndex, theoryId) => {
			let theoryCol = {
				header: '?',
				getData: () => '?'
			};
			if (theoryId === THEORY_ID.Note) {
				theoryCol = {
					header: 'Freq',
					getData: pod => 'f'
				};
			}
			if (theoryId === THEORY_ID.Interval) {
				theoryCol = {
					header: 'Ratio',
					getData: pod => '1:n'
				};
			}
			return {
				headers: ['Name', 'P', 'D'],
				rows: [{
					cols: [podIndex, 'p', 'd']
				}]
			};
		}
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
			if (theoryId === THEORY_ID.Interval) {
				return PodUtils.getName(pod, { podType: 'interval' });
			}
			return JSON.stringify(pod);
		},
		getTableProps: getPodTableProps
	},
	[LEVEL_ID.PodList]: {
		levelId: LEVEL_ID.PodList,
		typeId: TYPE_ID.List,
		name: 'Pod List',
		typeProps: {
			childLevelId: LEVEL_ID.Pod
		},
		getPreview: (podList, theoryId) => {
			if (theoryId === THEORY_ID.Chord) {
				return PodListUtils.getName(podList, { podType: 'chord' });
			}
			if (theoryId === THEORY_ID.Scale) {
				return PodListUtils.getName(podList, { podType: 'scale' });
			}
			return JSON.stringify(podList);
		},
		getTableProps: getPodListTableProps
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
					theoryId: THEORY_ID.Chord,
					name: 'Intervals'
				}
			]
		},
		getPreview: block => `
			${PodUtils.getName(block.keyCenter, { podType: 'note' })}
			+ 
			${PodListUtils.getName(block.intervals, { podType: 'chord' })}`,
		getTableProps: (block, theoryId) => {
			return [
				{
					title: 'Key Center',
					...getPodTableProps(block.keyCenter, 'note')
				},
				{
					title: 'Intervals',
					...getPodListTableProps(block.intervals, 'chord')
				}
			];
		}
	},
	[LEVEL_ID.Section]: {
		levelId: LEVEL_ID.Section,
		typeId: TYPE_ID.NamedList,
		name: 'Section',
		typeProps: {
			childLevelId: LEVEL_ID.Block
		},
		getPreview: section => `${section.data.length} Blocks`,
		getTableProps: (section, theoryId) => {
			return {
				headers: ['#', 'Key Center', 'Intervals', 't'],
				rows: section.data.map((block, i) => ({
					cols: [i, PodUtils.getName(block.keyCenter, { podType: 'note' }), PodListUtils.getName(block.intervals, { podType: 'chord' }), block.t || 1]
				}))
			};
		}
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
