import PodUtils from '@pw/core/src/Pod.utils';
import PodListUtils from '@pw/core/src/PodList.utils';
import { STRUCT_ID, STRUCT } from './STRUCT';

/*
	Defines how to INTERPRET data in the shape of the specified STRUCT_ID
*/

export const MODEL_ID = {
	// Native
	Pitch: 0,
	Degree: 1,
	// LabeledList
	Note: 2,
	Interval: 3,
	// List
	Chord: 4,
	Scale: 5,
	// Object
	Block: 6, // RelativeChord
	// Named List
	Section: 7,
	// Named Keyed List
	Chart: 8
};

const getNoteTableProps = note => {
	return {
		headers: ['Name', 'P', 'D', 'Freq'],
		rows: [{
			cols: [JSON.stringify(note), note[0], note[1], 'f']
		}]
	};
};

const getChordListTableProps = (chord) => {
	return {
		headers: ['Name', 'P', 'D'],
		rows: chord.map((pod, i) => ({
			cols: [JSON.stringify(pod), pod[0], pod[1]]
		}))
	};
};

export const MODEL = {
	[MODEL_ID.Pitch]: {
		modelId: MODEL_ID.Pitch,
		structId: STRUCT_ID.Native,
		name: 'Pitch',
		typeProps: {},
		getPreview: pitch => pitch,
		getTableProps: (pitch) => {
			return {
				headers: ['Model', 'Value'],
				rows: [{
					cols: ['Pitch', pitch]
				}]
			};
		}
	},
	[MODEL_ID.Degree]: {
		modelId: MODEL_ID.Degree,
		structId: STRUCT_ID.Native,
		name: 'Degree',
		typeProps: {},
		getPreview: degree => degree,
		getTableProps: (degree) => {
			return {
				headers: ['Model', 'Value'],
				rows: [{
					cols: ['Degree', degree]
				}]
			};
		}
	},
	[MODEL_ID.Note]: {
		modelId: MODEL_ID.Note,
		structId: STRUCT_ID.LabeledList,
		name: 'Note',
		typeProps: {
			labels: [
				{ pathId: 'pitch', name: 'Pitch', modelId: MODEL_ID.Pitch },
				{ pathId: 'degree', name: 'Degree', modelId: MODEL_ID.Degree }
			]
		},
		getPreview: note => {
			return JSON.stringify(note);
		},
		getTableProps: getNoteTableProps
	},
	[MODEL_ID.Interval]: {
		modelId: MODEL_ID.Interval,
		structId: STRUCT_ID.LabeledList,
		name: 'Interval',
		typeProps: {
			labels: [
				{ pathId: 'pitch', name: 'Pitch', modelId: MODEL_ID.Pitch },
				{ pathId: 'degree', name: 'Degree', modelId: MODEL_ID.Degree }
			]
		},
		getPreview: interval => {
			return JSON.stringify(interval);
		},
		getTableProps: getNoteTableProps
	},
	[MODEL_ID.Chord]: {
		modelId: MODEL_ID.Chord,
		structId: STRUCT_ID.List,
		name: 'Chord',
		typeProps: {
			childModelId: MODEL_ID.Note
		},
		getPreview: (chord) => {
			return JSON.stringify(chord);
		},
		getTableProps: getChordListTableProps
	},
	[MODEL_ID.Scale]: {
		modelId: MODEL_ID.Scale,
		structId: STRUCT_ID.List,
		name: 'Scale',
		typeProps: {
			childModelId: MODEL_ID.Note
		},
		getPreview: (scale) => {
			return JSON.stringify(scale);
		},
		getTableProps: getChordListTableProps
	},
	[MODEL_ID.Block]: {
		modelId: MODEL_ID.Block,
		structId: STRUCT_ID.Object,
		name: 'Block',
		typeProps: {
			properties: [
				{
					propertyId: 'keyCenter',
					modelId: MODEL_ID.Note,
					name: 'Key Center'
				},
				{
					propertyId: 'intervals',
					modelId: MODEL_ID.Chord,
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
					...getNoteTableProps(block.keyCenter)
				},
				{
					title: 'Intervals',
					...getChordListTableProps(block.intervals)
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
