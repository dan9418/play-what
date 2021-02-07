import PodUtils from '@pw/core/src/Pod.utils';
import PodListUtils from '@pw/core/src/PodList.utils';
import { THEORY_ID, THEORY } from './THEORY';
import { TYPE_ID, TYPE } from './TYPE';

export const LEVEL_ID = {
	PodIndex: 0,
	Pod: 1,
	PodList: 2,
	Block: 3,
	Section: 4,
	Chart: 5
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
	/*if (theoryId === THEORY_ID.Note) {
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
    }*/
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
			return {
				headers: ['Type', 'Value'],
				rows: [{
					cols: [THEORY[theoryId].name, podIndex]
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
				{ pathId: 'pitch', name: 'Pitch', theoryId: THEORY_ID.Pitch },
				{ pathId: 'degree', name: 'Degree', theoryId: THEORY_ID.Degree }
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
		getPreview: section => `${section.items.length} Blocks`,
		getTableProps: (section, theoryId) => {
			return {
				headers: ['#', 'Key Center', 'Intervals', 't'],
				rows: section.items.map((block, i) => ({
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
		getPreview: chart => chart.items.map(s => s.name).join(', ')
	}
};

export const LEVEL_VALUES = Object.values(LEVEL);
