import GroupUtils from './Group/Group.utils';
import { INTERVAL_PRESETS } from './Pod/Interval/Interval.constants';
import IntervalUtils from './Pod/Interval/Interval.utils';
import { NOTE_PRESETS } from './Pod/Note/Note.constants';
import NoteUtils from './Pod/Note/Note.utils';
import { CHORD_PRESETS } from './PodList/Chord/Chord.constants';
import ChordUtils from './PodList/Chord/Chord.utils';
import { SCALE_PRESETS } from './PodList/Scale/Scale.constants';
import ScaleUtils from './PodList/Scale/Scale.utils';

export enum ModelId {
	// Group
	Group = 'group',
	// Pod
	Note = 'note',
	Interval = 'interval',
	// Pod[]
	Chord = 'chord',
	Scale = 'scale'
}

export interface IModelMap {
	name: string;
	modelId: ModelId;
	utils: any;
	presets: any[];
	validChildren: any[];
}

export const MODEL: { [x: string]: IModelMap } = {
	// Group
	[ModelId.Group]: {
		name: 'Group',
		modelId: ModelId.Group,
		utils: GroupUtils,
		presets: [],
		validChildren: [
			ModelId.Group,
			ModelId.Note,
			ModelId.Interval,
			ModelId.Chord,
			ModelId.Scale
		]
	},
	// Pod
	[ModelId.Note]: {
		name: 'Note',
		modelId: ModelId.Note,
		utils: NoteUtils,
		presets: NOTE_PRESETS,
		validChildren: []
	},
	[ModelId.Interval]: {
		name: 'Interval',
		modelId: ModelId.Interval,
		utils: IntervalUtils,
		presets: INTERVAL_PRESETS,
		validChildren: []
	},
	// Pod[]
	[ModelId.Chord]: {
		name: 'Chord',
		modelId: ModelId.Chord,
		utils: ChordUtils,
		presets: CHORD_PRESETS,
		validChildren: [ModelId.Interval]
	},
	[ModelId.Scale]: {
		name: 'Scale',
		modelId: ModelId.Scale,
		utils: ScaleUtils,
		presets: SCALE_PRESETS,
		validChildren: [ModelId.Interval]
	}
};

export const MODEL_VALUES = Object.values(MODEL);

export type IGroup<T> = T[];

export type IPod = [number, number];
export interface IProjection {
	podList: IPod[];
}

export interface IModelOptions {
	modelRoot?: IPod;
	name?: string;
	preview?: string;
	projection?: IProjection;
	viewerId?: string;
	viewerProps?: any;
	matchOctave?: boolean;
}

export interface IModelConfig {
	modelId: ModelId;
	modelValue: IPod | IPod[] | IModelConfig[];
	modelOptions?: IModelOptions
}

// @ts-ignore
export type IModelValue = IPod | IPod[] | IModelConfig[];

export interface IModelData {
	pathId: number;
	name: string;
	caption: string;
	preview: string;
	modelRoot: IPod;
	projection: IProjection;
}

export interface IModelDef {
	config: IModelConfig;
	data: IModelData;
}

export interface IModelNode extends IModelDef {
	metaChildren: IModelDef[];
}
export interface IModelPreset<T extends IModelValue> {
	id: string;
	name: string;
	value: T
}
