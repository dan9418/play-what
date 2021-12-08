import { MAX_DEGREE, ROOT_DEGREE } from "../theory/Degree.constants";
import { MAX_PITCH, ROOT_PITCH } from "../theory/Pitch.constants";
import { CHORD_PRESETS } from "./Chord/Chord.constants";
import { INTERVAL_PRESETS } from "./Interval/Interval.constants";
import { SCALE_PRESETS } from "./Scale/Scale.constants";

export enum ModelId {
	Note = 'notes',
	Interval = 'intervals',
	Chord = 'chords',
	Scale = 'scales',
}

export interface IModelConfig {
	id: string;
	modelId: ModelId;
	name: string;
	value: any,
	tags: Tag[],
	voicings?: any[]
	type?: ModelId
}

export enum InputId {
	Numeric,
	Dropdown,
	Switch,
	Range,
	ButtonRow,
	Degree,
	Accidental,
	Intervals
}

export interface IInputProps {
	value: any;
	setValue: Function
}

export enum ScaleTag {
	Pentatonic = 'pentatonic',
	Hexatonic = 'hexatonic',
	Heptatonic = 'heptatonic',
	Octatonic = 'octatonic',
	Diatonic = 'diatonic',
	Chromatic = 'chromatic',
	Dominant = 'dominant',
	Blues = 'blues',
	Bebop = 'bebop',
	Major = 'major',
	Minor = 'minor',
}

export enum ChordTag {
	Major = 'major',
	Minor = 'minor',
	Diminished = 'diminished',
	Augmented = 'augmented',
	Triad = 'triad',
	Sixth = 'sixth',
	Seventh = 'seventh',
	Suspended = 'suspended',
	Dominant = 'dominant',
	Extended = 'extended',
	Altered = 'altered',
	Diatonic = 'diatonic'
}

export enum IntervalTag {
	Major = 'major',
	Minor = 'minor',
	Diminished = 'diminished',
	Augmented = 'augmented',
	Perfect = 'perfect',
	Second = 'second',
	Third = 'third',
	Fourth = 'fourth',
	Fifth = 'fifth',
	Sixth = 'sixth',
	Seventh = 'seventh',
	Extended = 'extended',
}

export type Tag = IntervalTag | ScaleTag | ChordTag;

export type IPod = [number, number];

export interface IModelDetails {
	name: string;
	preview: string;
	value: IPod | IPod[];
	formattedName?: string;
}

export interface ICompleteModelDetails {
	root: IModelDetails;
	intervals: IModelDetails;
	notes: IModelDetails;
}

const podToPodList = (podPresets: IModelConfig[]): IModelConfig[] =>
	podPresets.map(preset => ({ ...preset, value: [preset.value] as any }))

export const MASTER_PRESETS: IModelConfig[] = [
	...podToPodList(INTERVAL_PRESETS),
	...CHORD_PRESETS,
	...SCALE_PRESETS
];

export const MAX_POD: IPod = [MAX_PITCH, MAX_DEGREE];

export const DEFAULT_POD: IPod = [ROOT_PITCH, ROOT_DEGREE];
