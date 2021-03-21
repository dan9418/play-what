import GroupUtils from './Group/Group.utils';
import { INTERVAL_VALUES } from './Pod/Interval/Interval.constants';
import IntervalUtils from './Pod/Interval/Interval.utils';
import { NOTE_VALUES } from './Pod/Note/Note.constants';
import NoteUtils from './Pod/Note/Note.utils';
import AbsoluteChordUtils from './PodList/Chord/AbsoluteChord/AbsoluteChord.utils';
import { RELATIVE_CHORD_VALUES } from './PodList/Chord/RelativeChord/RelativeChord.constants';
import RelativeChordUtils from './PodList/Chord/RelativeChord/RelativeChord.utils';
import AbsoluteScaleUtils from './PodList/Scale/AbsoluteScale/AbsoluteScale.utils';
import { RELATIVE_SCALE_VALUES } from './PodList/Scale/RelativeScale/RelativeScale.constants';
import RelativeScaleUtils from './PodList/Scale/RelativeScale/RelativeScale.utils';

export const MODEL_ID = {
	// Group
	Group: 'group',
	// Absolute
	Note: 'note',
	AbsoluteChord: 'absChord',
	AbsoluteScale: 'absScale',
	// Relative
	Interval: 'interval',
	RelativeChord: 'relChord',
	RelativeScale: 'relScale'
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
			MODEL_ID.AbsoluteChord,
			MODEL_ID.AbsoluteScale,
			MODEL_ID.Interval,
			MODEL_ID.RelativeChord,
			MODEL_ID.RelativeScale
		]
	},
	// Absolute
	[MODEL_ID.Note]: {
		name: 'Note',
		modelId: MODEL_ID.Note,
		utils: NoteUtils,
		presets: NOTE_VALUES,
		validChildren: []
	},
	[MODEL_ID.AbsoluteChord]: {
		name: 'Absolute Chord',
		modelId: MODEL_ID.AbsoluteChord,
		utils: AbsoluteChordUtils,
		presets: RELATIVE_CHORD_VALUES,
		validChildren: [MODEL_ID.Note]
	},
	[MODEL_ID.AbsoluteScale]: {
		name: 'Absolute Scale',
		modelId: MODEL_ID.AbsoluteScale,
		utils: AbsoluteScaleUtils,
		presets: RELATIVE_SCALE_VALUES,
		validChildren: [MODEL_ID.Note]
	},
	// Relative
	[MODEL_ID.Interval]: {
		name: 'Interval',
		isRelative: true,
		modelId: MODEL_ID.Interval,
		utils: IntervalUtils,
		presets: INTERVAL_VALUES,
		validChildren: []
	},
	[MODEL_ID.RelativeChord]: {
		name: 'Relative Chord',
		isRelative: true,
		modelId: MODEL_ID.RelativeChord,
		utils: RelativeChordUtils,
		presets: RELATIVE_CHORD_VALUES,
		validChildren: [MODEL_ID.Interval]
	},
	[MODEL_ID.RelativeScale]: {
		name: 'Relative Scale',
		isRelative: true,
		modelId: MODEL_ID.RelativeScale,
		utils: RelativeScaleUtils,
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
	superset: any;
}

export interface IModelDef {
	modelId: string;
	modelValue: IModel;
	modelOptions: IModelOptions
}

export interface IComputedModelDef extends IModelDef {
	computed: {
		name: string;
		preview?; string;
		modelRoot?: IModel;
		superset?: IComputedModelDef;
	}
}
