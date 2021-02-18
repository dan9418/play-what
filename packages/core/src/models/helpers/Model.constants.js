import DegreeUtils from '../Degree.utils';
import GroupUtils from '../Group.utils';
import RelativeChordUtils from '../RelativeChord.utils';
import RelativeScaleUtils from '../RelativeScale.utils';
import IntervalUtils from '../Interval.utils';
import AbsoluteChordUtils from '../AbsoluteChord.utils';
import AbsoluteScaleUtils from '../AbsoluteScale.utils';
import NoteUtils from '../Note.utils';
import PitchUtils from '../Pitch.utils';
import ChordUtils from '../Chord.utils';
import { STRUCT_ID } from './Struct.constants';
import PodUtils from './Pod.utils';

/*
	Defines how to INTERPRET data in the shape of the specified STRUCT_ID using the STRUCT_CONFIG
*/

export const MODEL_ID = {
	// Native
	Pitch: 'pitch',
	Degree: 'degree',
	// LabeledList
	Note: 'note',
	Interval: 'interval',
	// List
	AbsoluteChord: 'absChord',
	RelativeChord: 'relChord',
	AbsoluteScale: 'absScale',
	RelativeScale: 'relScale',
	// Object
	Chord: 'chord',
	Scale: 'scale',
	// Group
	Group: 'group'
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
	[MODEL_ID.AbsoluteChord]: {
		name: 'Absolute Chord',
		modelId: MODEL_ID.AbsoluteChord,
		structId: STRUCT_ID.List,
		structConfig: {
			childModelId: MODEL_ID.Note
		},
		utils: AbsoluteChordUtils
	},
	[MODEL_ID.RelativeChord]: {
		name: 'Relative Chord',
		modelId: MODEL_ID.RelativeChord,
		structId: STRUCT_ID.List,
		isRelative: true,
		structConfig: {
			childModelId: MODEL_ID.Interval
		},
		utils: RelativeChordUtils
	},
	[MODEL_ID.AbsoluteScale]: {
		name: 'Absolute Scale',
		modelId: MODEL_ID.AbsoluteScale,
		structId: STRUCT_ID.List,
		structConfig: {
			childModelId: MODEL_ID.Note
		},
		utils: AbsoluteScaleUtils
	},
	[MODEL_ID.RelativeScale]: {
		name: 'Relative Scale',
		modelId: MODEL_ID.RelativeScale,
		structId: STRUCT_ID.List,
		isRelative: true,
		structConfig: {
			childModelId: MODEL_ID.Interval
		},
		utils: RelativeScaleUtils
	},
	[MODEL_ID.Chord]: {
		name: 'Chord',
		modelId: MODEL_ID.Chord,
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
					modelId: MODEL_ID.RelativeChord,
					name: 'Intervals'
				}
			],
			outputs: [
				{
					name: 'Notes',
					propertyId: 'notes',
					modelId: MODEL_ID.AbsoluteChord,
					fn: PodUtils.addPodList,
					args: [
						'./root',
						'./intervals'
					]
				}
			]
		},
		utils: ChordUtils
	},
	[MODEL_ID.Scale]: {
		name: 'Scale',
		modelId: MODEL_ID.Scale,
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
					modelId: MODEL_ID.RelativeScale,
					name: 'Intervals'
				}
			],
			outputs: [
				{
					name: 'Notes',
					propertyId: 'notes',
					modelId: MODEL_ID.AbsoluteScale,
					fn: PodUtils.addPodList,
					args: [
						'./root',
						'./intervals'
					]
				}
			]
		},
		utils: ChordUtils
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
