import PodUtils from '@pw/core/src/Pod.utils';
import PodListUtils from '@pw/core/src/PodList.utils';
import { STRUCT_ID, STRUCT } from './STRUCT';

export const MODEL_ID = {
	PodIndex: 0,
	Pod: 1,
	PodList: 2,
	Block: 3,
	Section: 4,
	Chart: 5
};

const getPodTableProps = (pod) => {
	return {
		headers: ['Name', 'P', 'D', 'Freq'],
		rows: [{
			cols: [JSON.stringify(pod), pod[0], pod[1], 'f']
		}]
	};
};

const getPodListTableProps = (podList) => {
	return {
		headers: ['Name', 'P', 'D'],
		rows: podList.map((pod, i) => ({
			cols: [JSON.stringify(pod), pod[0], pod[1]]
		}))
	};
};

export const MODEL = {
	[MODEL_ID.PodIndex]: {
		modelId: MODEL_ID.PodIndex,
		structId: STRUCT_ID.Native,
		name: 'Pod Index',
		typeProps: {},
		getPreview: podIndex => podIndex,
		getTableProps: (podIndex) => {
			return {
				headers: ['Type', 'Value'],
				rows: [{
					cols: ['?', podIndex]
				}]
			};
		}
	},
	[MODEL_ID.Pod]: {
		modelId: MODEL_ID.Pod,
		structId: STRUCT_ID.LabeledList,
		name: 'Pod',
		typeProps: {
			childModelId: MODEL_ID.PodIndex,
			labels: [
				{ pathId: 'pitch', name: 'Pitch' },
				{ pathId: 'degree', name: 'Degree' }
			]
		},
		getPreview: (pod) => {
			return JSON.stringify(pod);
		},
		getTableProps: getPodTableProps
	},
	[MODEL_ID.PodList]: {
		modelId: MODEL_ID.PodList,
		structId: STRUCT_ID.List,
		name: 'Pod List',
		typeProps: {
			childModelId: MODEL_ID.Pod
		},
		getPreview: (podList) => {
			return JSON.stringify(podList);
		},
		getTableProps: getPodListTableProps
	},
	[MODEL_ID.Block]: {
		modelId: MODEL_ID.Block,
		structId: STRUCT_ID.Object,
		name: 'Block',
		typeProps: {
			properties: [
				{
					propertyId: 'keyCenter',
					modelId: MODEL_ID.Pod,
					name: 'Key Center'
				},
				{
					propertyId: 'intervals',
					modelId: MODEL_ID.PodList,
					name: 'Intervals'
				}
			]
		},
		getPreview: block => `
			${PodUtils.getName(block.keyCenter, { podType: 'note' })}
			+ 
			${PodListUtils.getName(block.intervals, { podType: 'chord' })}`,
		getTableProps: (block) => {
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
	[MODEL_ID.Section]: {
		modelId: MODEL_ID.Section,
		structId: STRUCT_ID.NamedList,
		name: 'Section',
		typeProps: {
			childModelId: MODEL_ID.Block
		},
		getPreview: section => `${section.items.length} Blocks`,
		getTableProps: (section) => {
			return {
				headers: ['#', 'Key Center', 'Intervals', 't'],
				rows: section.items.map((block, i) => ({
					cols: [i, PodUtils.getName(block.keyCenter, { podType: 'note' }), PodListUtils.getName(block.intervals, { podType: 'chord' }), block.t || 1]
				}))
			};
		}
	},
	[MODEL_ID.Chart]: {
		modelId: MODEL_ID.Chart,
		structId: STRUCT_ID.NamedKeyedList,
		name: 'Chart',
		typeProps: {
			childModelId: MODEL_ID.Section
		},
		getPreview: chart => chart.items.map(s => s.name).join(', ')
	}
};

export const MODEL_VALUES = Object.values(MODEL);
