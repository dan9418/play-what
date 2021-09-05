import { IPod, IPreset } from "../../Model.constants";

export enum NoteId {
	MiddleC = 'MiddleC',
	TuningRoot = 'TuningRoot',
	MidiRoot = 'MidiRoot'
}

const formatPreset = (id: NoteId, name: string, value: IPod, tags = []) => ({ id, name, value, tags });

export const NOTE_PRESET_MAP = new Map<NoteId, IPreset<IPod>>([
	[NoteId.MiddleC, formatPreset(NoteId.MiddleC, 'Middle C', [0, 0])],
	[NoteId.MidiRoot, formatPreset(NoteId.MidiRoot, 'MIDI Root', [4 * -12, 0])],
	[NoteId.TuningRoot, formatPreset(NoteId.TuningRoot, 'Tuning Root', [9, 5])]
]);

export const NOTE_PRESETS = Array.from(NOTE_PRESET_MAP).map(([k, v]) => v);

interface IAccidental {
	id: string;
	name: string;
	symbol: string;
	value: number;
}

export const ACCIDENTAL: { [x: string]: IAccidental } = {
	doubleFlat: {
		id: 'doubleFlat',
		name: 'Double Flat',
		symbol: 'bb',
		value: -2
	},
	flat: {
		id: 'flat',
		name: 'Flat',
		symbol: 'b',
		value: -1
	},
	natural: {
		id: 'natural',
		name: 'Natural',
		symbol: '♮',
		value: 0
	},
	sharp: {
		id: 'sharp',
		name: 'Sharp',
		symbol: '#',
		value: 1
	},
	doubleSharp: {
		id: 'doubleSharp',
		name: 'Double Sharp',
		symbol: '##',
		value: 2
	}
};

export const ACCIDENTAL_VALUES = Object.values(ACCIDENTAL);

export const DEFAULT_NOTE_OPTIONS = {
	displayName: 'note'
}
