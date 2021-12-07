
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
