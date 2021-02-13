import DegreeUtils from '../Degree.utils';
import GroupUtils from '../Group.utils';
import IntervalChordUtils from '../IntervalChord.utils';
import IntervalScaleUtils from '../IntervalScale.utils';
import IntervalUtils from '../Interval.utils';
import NoteChordUtils from '../NoteChord.utils';
import NoteScaleUtils from '../NoteScale.utils';
import NoteUtils from '../Note.utils';
import PitchUtils from '../Pitch.utils';
import RelativeChordUtils from '../RelativeChord.utils';
import { STRUCT_ID } from './Struct.constants';
import PodUtils from './Pod.utils';

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
	RelativeChord: 8,
	RelativeScale: 9,
	// Group
	Group: 10
	// Named List
	// Named Keyed List
};

export const MODEL = {
	[MODEL_ID.Pitch]: {
		name: 'Pitch',
		modelId: MODEL_ID.Pitch,
		structId: STRUCT_ID.Native,
		structConfig: {},
		utils: PitchUtils
	},
	[MODEL_ID.Degree]: {
		name: 'Degree',
		modelId: MODEL_ID.Degree,
		structId: STRUCT_ID.Native,
		structConfig: {},
		utils: DegreeUtils
	},
	[MODEL_ID.Note]: {
		name: 'Note',
		modelId: MODEL_ID.Note,
		structId: STRUCT_ID.LabeledList,
		structConfig: {
			labels: [
				{ name: 'Pitch', modelId: MODEL_ID.Pitch },
				{ name: 'Degree', modelId: MODEL_ID.Degree }
			]
		},
		utils: NoteUtils
	},
	[MODEL_ID.Interval]: {
		name: 'Interval',
		modelId: MODEL_ID.Interval,
		structId: STRUCT_ID.LabeledList,
		isRelative: true,
		structConfig: {
			labels: [
				{ pathId: 'pitch', name: 'Pitch Span', modelId: MODEL_ID.Pitch },
				{ pathId: 'degree', name: 'Degree Span', modelId: MODEL_ID.Degree }
			]
		},
		utils: IntervalUtils
	},
	[MODEL_ID.NoteChord]: {
		name: 'NoteChord',
		modelId: MODEL_ID.NoteChord,
		structId: STRUCT_ID.List,
		structConfig: {
			childModelId: MODEL_ID.Note
		},
		utils: NoteChordUtils
	},
	[MODEL_ID.IntervalChord]: {
		name: 'Interval Chord',
		modelId: MODEL_ID.IntervalChord,
		structId: STRUCT_ID.List,
		isRelative: true,
		structConfig: {
			childModelId: MODEL_ID.Interval
		},
		utils: IntervalChordUtils
	},
	[MODEL_ID.NoteScale]: {
		name: 'NoteScale',
		modelId: MODEL_ID.NoteScale,
		structId: STRUCT_ID.List,
		structConfig: {
			childModelId: MODEL_ID.Note
		},
		utils: NoteScaleUtils
	},
	[MODEL_ID.IntervalScale]: {
		name: 'Interval Scale',
		modelId: MODEL_ID.IntervalScale,
		structId: STRUCT_ID.List,
		isRelative: true,
		structConfig: {
			childModelId: MODEL_ID.Interval
		},
		utils: IntervalScaleUtils
	},
	[MODEL_ID.RelativeChord]: {
		name: 'Relative Chord',
		modelId: MODEL_ID.RelativeChord,
		structId: STRUCT_ID.Object,
		structConfig: {
			properties: [
				{
					propertyId: 'root',
					modelId: MODEL_ID.Note,
					name: 'Root'
				},
				{
					propertyId: 'intervals',
					modelId: MODEL_ID.IntervalChord,
					name: 'Intervals'
				}
			],
			outputs: [
				{
					name: 'Notes',
					propertyId: 'notes',
					modelId: MODEL_ID.NoteChord,
					fn: PodUtils.addPodList,
					args: [
						'./root',
						'./intervals'
					]
				}
			]
		},
		utils: RelativeChordUtils
	},
	[MODEL_ID.Group]: {
		name: 'Group',
		modelId: MODEL_ID.Group,
		structId: STRUCT_ID.Group,
		structConfig: {},
		utils: GroupUtils
	}
};

export const MODEL_VALUES = Object.values(MODEL);
