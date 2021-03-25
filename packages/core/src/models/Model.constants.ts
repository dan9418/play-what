import GroupUtils from './Group/Group.utils';
import { INTERVAL_VALUES } from './Pod/Interval/Interval.constants';
import IntervalUtils from './Pod/Interval/Interval.utils';
import { NOTE_VALUES } from './Pod/Note/Note.constants';
import NoteUtils from './Pod/Note/Note.utils';
import { RELATIVE_CHORD_VALUES } from './PodList/Chord/Chord.constants';
import ChordUtils from './PodList/Chord/Chord.utils';
import { RELATIVE_SCALE_VALUES } from './PodList/Scale/Scale.constants';
import ScaleUtils from './PodList/Scale/Scale.utils';

export const MODEL_ID = {
	// Group
	Group: 'group',
	// Pod
	Note: 'note',
	Interval: 'interval',
	// Pod[]
	Chord: 'chord',
	Scale: 'scale'
};

export const MODEL = {
	// Group
	[MODEL_ID.Group]: {
		name: 'Group',
		modelId: MODEL_ID.Group,
		utils: GroupUtils,
		presets: [],
		validChildren: [
			MODEL_ID.Group,
			MODEL_ID.Note,
			MODEL_ID.Interval,
			MODEL_ID.Chord,
			MODEL_ID.Scale
		]
	},
	// Pod
	[MODEL_ID.Note]: {
		name: 'Note',
		modelId: MODEL_ID.Note,
		utils: NoteUtils,
		presets: NOTE_VALUES,
		validChildren: []
	},
	[MODEL_ID.Interval]: {
		name: 'Interval',
		modelId: MODEL_ID.Interval,
		utils: IntervalUtils,
		presets: INTERVAL_VALUES,
		validChildren: []
	},
	// Pod[]
	[MODEL_ID.Chord]: {
		name: 'Chord',
		modelId: MODEL_ID.Chord,
		utils: ChordUtils,
		presets: RELATIVE_CHORD_VALUES,
		validChildren: [MODEL_ID.Interval]
	},
	[MODEL_ID.Scale]: {
		name: 'Scale',
		modelId: MODEL_ID.Scale,
		utils: ScaleUtils,
		presets: RELATIVE_SCALE_VALUES,
		validChildren: [MODEL_ID.Interval]
	}
};

export const MODEL_VALUES = Object.values(MODEL);

export type IModel = any[];

export interface IModelOptions {
	modelRoot: IModel;
	name?: string;
	preview?: string;
	superset?: any;
}

export interface IModelConfig {
	modelId: string;
	modelValue: IModel;
	modelOptions: IModelOptions
}

export interface IModelData {
	pathId: number;
	name: string;
	preview: string;
	modelRoot: IModel;
	superset: IModelConfig;
	metaChildren: any[];
}
