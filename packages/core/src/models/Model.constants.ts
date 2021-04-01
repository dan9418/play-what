import GroupUtils from './Group/Group.utils';
import { INTERVAL_VALUES } from './Pod/Interval/Interval.constants';
import IntervalUtils from './Pod/Interval/Interval.utils';
import { NOTE_VALUES } from './Pod/Note/Note.constants';
import NoteUtils from './Pod/Note/Note.utils';
import { CHORD_VALUES } from './PodList/Chord/Chord.constants';
import ChordUtils from './PodList/Chord/Chord.utils';
import { SCALE_VALUES } from './PodList/Scale/Scale.constants';
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

export interface IModelMap {
	name: string;
	modelId: string;
	utils: any;
	presets: any[];
	validChildren: any[];
}

export const MODEL: { [x: string]: IModelMap } = {
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
		presets: CHORD_VALUES,
		validChildren: [MODEL_ID.Interval]
	},
	[MODEL_ID.Scale]: {
		name: 'Scale',
		modelId: MODEL_ID.Scale,
		utils: ScaleUtils,
		presets: SCALE_VALUES,
		validChildren: [MODEL_ID.Interval]
	}
};

export const MODEL_VALUES = Object.values(MODEL);

export type IGroup<T> = T[];

export type IPod = [number, number];
export type IPodList = IPod[];
type IPodType = IPod | IPodList;

// @ts-ignore
export type IModel = IPodType | IGroup<IPodType | IModel>;

export interface IProjection {
	podList: IPodList;
}

export interface IModelOptions {
	modelRoot?: IPod;
	name?: string;
	preview?: string;
	projection?: IProjection;
	viewerId?: string;
	viewerProps?: any;
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
	projection: IProjection;
	metaChildren: any[];
}

export interface IModelDef {
	config: IModelConfig;
	data: IModelData;
}
