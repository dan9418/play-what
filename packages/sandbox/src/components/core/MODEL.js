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
	IntervalChord: 4.5,
	NoteScale: 5,
	IntervalScale: 5.5,
	// Object
	RelativeChord: 6, // RelativeChord
	// Named List
	Section: 7,
	// Named Keyed List
	Chart: 8
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
	[MODEL_ID.Section]: {
		name: 'Section',
		modelId: MODEL_ID.Section,
		structId: STRUCT_ID.NamedList,
		structConfig: {
			childModelId: MODEL_ID.RelativeChord
		}
	},
	[MODEL_ID.Chart]: {
		name: 'Chart',
		modelId: MODEL_ID.Chart,
		structId: STRUCT_ID.NamedKeyedList,
		structConfig: {
			childModelId: MODEL_ID.Section
		}
	}
};

export const MODEL_VALUES = Object.values(MODEL);
