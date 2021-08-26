
export enum PodType {
	Note,
	Interval
}

export enum ModelPart {
	Root,
	Intervals,
	Notes
}

export enum DisplayType {
	Pitch,
	Degree
}

export enum PresetTag {
	Interval = 'interval',
	Chord = 'chord',
	Scale = 'scale',
	Pentatonic = 'pentatonic',
	Hexatonic = 'hexatonic',
	Heptatonic = 'heptatonic',
	Octatonic = 'octatonic',
	Diatonic = 'diatonic',
	Chromatic = 'chromatic',
	Blues = 'blues',
	Bebop = 'bebop',
	Major = 'major',
	Minor = 'minor',
	Diminished = 'diminished',
	Augmented = 'augmented',
	Perfect = 'perfect',
	Triad = 'triad',
	Sixth = 'sixth',
	Seventh = 'seventh',
	Suspended = 'suspended',
	Dominant = 'dominant',
	Extended = 'extended',
	Altered = 'altered'
}

interface IPresetType {
	id: PresetTag,
	name: string;
}

export const PRESET_TYPES: IPresetType[] = [
	{
		id: PresetTag.Interval,
		name: 'Interval'
	},
	{
		id: PresetTag.Chord,
		name: 'Chord'
	},
	{
		id: PresetTag.Scale,
		name: 'Scale'
	}
]

export type IPod = [number, number];

export interface IPreset<T> {
	id: string;
	name: string;
	tags: PresetTag[],
	value: T
}

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
