
export enum PodType {
	Note = 'note',
	Interval = 'interval'
}

export type IPod = [number, number];

export interface IPreset<T> {
	id: string;
	name: string;
	value: T
}
