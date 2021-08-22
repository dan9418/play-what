
export enum PodType {
	Note = 'note',
	Interval = 'interval'
}

export enum PresetTag {
	Interval = 'interval',
	Chord = 'chord',
	Scale = 'scale',
	Pentatonic = 'pentatonic',
	Heptatonic = 'heptatonic',
	Diatonic = 'diatonic',
	Chromatic = 'chromatic',
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
