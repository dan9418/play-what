import { INTERVAL_PRESETS } from './Pod/Interval/Interval.constants';
import { NOTE_PRESETS } from './Pod/Note/Note.constants';
import { CHORD_PRESETS } from './PodList/Chord/Chord.constants';
import { SCALE_PRESETS } from './PodList/Scale/Scale.constants';

export enum ModelId {
	Note = 'note',
	Interval = 'interval',
	Chord = 'chord',
	Scale = 'scale',
	Chart = 'scale'
}

export type PodType = ModelId.Note | ModelId.Interval;
export type PodListType = ModelId.Chord | ModelId.Scale;

export interface IModelAttrs {
	name: string;
	modelId: ModelId;
	presets: any[];
	validChildren: any[];
	isCompound: boolean;
}

export const MODEL_MAP = new Map<ModelId, IModelAttrs>([
	[ModelId.Note, {
		name: 'Note',
		modelId: ModelId.Note,
		isCompound: false,
		presets: NOTE_PRESETS,
		validChildren: []
	}],
	[ModelId.Interval, {
		name: 'Interval',
		modelId: ModelId.Interval,
		isCompound: false,
		presets: INTERVAL_PRESETS,
		validChildren: []
	}],
	[ModelId.Chord, {
		name: 'Chord',
		modelId: ModelId.Chord,
		isCompound: true,
		presets: CHORD_PRESETS,
		validChildren: [ModelId.Interval]
	}],
	[ModelId.Scale, {
		name: 'Scale',
		modelId: ModelId.Scale,
		isCompound: true,
		presets: SCALE_PRESETS,
		validChildren: [ModelId.Interval]
	}]
]);

export const MODEL_VALUES = Array.from(MODEL_MAP, ([k, v]) => v);

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
	t?: number;
}

export interface IModelConfig {
	modelId: ModelId;
	modelValue: IPod | IPod[] | IModelConfig[];
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
	t?: number;
}

export interface IModelDef {
	config: IModelConfig;
	data: IModelData;
}

export interface IModelNode extends IModelDef {
	metaChildren: IModelDef[];
}

export interface IPreset<T> {
	id: string;
	name: string;
	value: T
}
export interface IModelPreset<T extends IModelValue> {
	id: string;
	name: string;
	value: T
}
