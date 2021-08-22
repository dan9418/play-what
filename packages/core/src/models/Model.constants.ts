
export enum PodType {
	Note = 'note',
	Interval = 'interval'
}

export enum PresetTag {
	Interval,
	Chord,
	Scale,
	Pentatonic,
	Heptatonic,
	Diatonic,
	Chromatic,
	Major,
	Minor,
	Triad,
	Seventh,
	Extended,
	Altered
}

export type IPod = [number, number];

export interface IPreset<T> {
	id: string;
	name: string;
	tags: PresetTag[],
	value: T
}
