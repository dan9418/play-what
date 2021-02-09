import { STRUCT_ID } from './STRUCT';

/*
	Defines how to INTERPRET data in the shape of the specified STRUCT_ID using the STRUCT_CONFIG
*/

export const MODEL_ID = {
	// Native
	Pitch: 0,
	Degree: 1,
	// LabeledList
	Note: 2,
	Interval: 3,
	// List
	NoteChord: 4,
	IntervalChord: 5,
	NoteScale: 6,
	IntervalScale: 7,
	// Object
	RelativeChord: 9,
	// Named List
	Section: 10,
	// Named Keyed List
	// Group
	Group: 12
};

export const MODEL = {
	[MODEL_ID.Pitch]: {
		name: 'Pitch',
		modelId: MODEL_ID.Pitch,
		structId: STRUCT_ID.Native,
		structConfig: {}
	},
	[MODEL_ID.Degree]: {
		name: 'Degree',
		modelId: MODEL_ID.Degree,
		structId: STRUCT_ID.Native,
		structConfig: {}
	},
	[MODEL_ID.Note]: {
		name: 'Note',
		modelId: MODEL_ID.Note,
		structId: STRUCT_ID.LabeledList,
		structConfig: {
			labels: [
				{ pathId: 'pitch', name: 'Pitch', modelId: MODEL_ID.Pitch },
				{ pathId: 'degree', name: 'Degree', modelId: MODEL_ID.Degree }
			]
		}
	},
	[MODEL_ID.Interval]: {
		name: 'Interval',
		modelId: MODEL_ID.Interval,
		structId: STRUCT_ID.LabeledList,
		structConfig: {
			labels: [
				{ pathId: 'pitch', name: 'Pitch Span', modelId: MODEL_ID.Pitch },
				{ pathId: 'degree', name: 'Degree Span', modelId: MODEL_ID.Degree }
			]
		}
	},
	[MODEL_ID.NoteChord]: {
		name: 'NoteChord',
		modelId: MODEL_ID.NoteChord,
		structId: STRUCT_ID.List,
		structConfig: {
			childModelId: MODEL_ID.Note
		}
	},
	[MODEL_ID.IntervalChord]: {
		name: 'Interval Chord',
		modelId: MODEL_ID.IntervalChord,
		structId: STRUCT_ID.List,
		structConfig: {
			childModelId: MODEL_ID.Interval
		}
	},
	[MODEL_ID.NoteScale]: {
		name: 'NoteScale',
		modelId: MODEL_ID.NoteScale,
		structId: STRUCT_ID.List,
		structConfig: {
			childModelId: MODEL_ID.Note
		}
	},
	[MODEL_ID.IntervalScale]: {
		name: 'Interval Scale',
		modelId: MODEL_ID.IntervalScale,
		structId: STRUCT_ID.List,
		structConfig: {
			childModelId: MODEL_ID.Interval
		}
	},
	[MODEL_ID.RelativeChord]: {
		name: 'Relative Chord',
		modelId: MODEL_ID.RelativeChord,
		structId: STRUCT_ID.Object,
		structConfig: {
			properties: [
				{
					propertyId: 'keyCenter',
					modelId: MODEL_ID.Note,
					name: 'Root'
				},
				{
					propertyId: 'intervals',
					modelId: MODEL_ID.IntervalChord,
					name: 'Intervals'
				}
			]
		}
	},
	[MODEL_ID.Group]: {
		name: 'Group',
		modelId: MODEL_ID.Group,
		structId: STRUCT_ID.Group,
		structConfig: {}
	}
};

export const MODEL_VALUES = Object.values(MODEL);
