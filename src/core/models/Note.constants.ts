import { IPod } from "./Model.constants";
import { IModelConfig, ModelId } from './Model.constants';

export enum NoteId {
	C = 'c',
	Cs = 'c-sharp',
	Db = 'd-flat',
	D = 'd',
	Ds = 'd-sharp',
	Eb = 'e-flat',
	E = 'e',
	Es = 'e-sharp',
	Fb = 'f-flat',
	F = 'f',
	Fs = 'f-sharp',
	Gb = 'g-flat',
	G = 'g',
	Gs = 'g-sharp',
	Ab = 'a-flat',
	A = 'a',
	As = 'a-sharp',
	Bb = 'b-flat',
	B = 'b',
	Bs = 'b-sharp',
	Cb = 'c-flat'
}

const formatPreset = (id: NoteId, name: string, value: IPod, tags = []): IModelConfig =>
	({ id, name, value, tags, modelId: ModelId.Note });

export const NOTE_PRESET_MAP = new Map<NoteId, IModelConfig>([
	[NoteId.C, formatPreset(NoteId.C, 'C', [0, 0])],
	[NoteId.Cs, formatPreset(NoteId.Cs, 'C#', [1, 0])],
	[NoteId.Db, formatPreset(NoteId.Db, 'Db', [1, 1])],
	[NoteId.D, formatPreset(NoteId.D, 'D', [2, 1])],
	[NoteId.Ds, formatPreset(NoteId.Ds, 'D#', [3, 1])],
	[NoteId.Eb, formatPreset(NoteId.Eb, 'Eb', [3, 2])],
	[NoteId.E, formatPreset(NoteId.E, 'E', [4, 2])],
	[NoteId.Es, formatPreset(NoteId.Es, 'E#', [5, 2])],
	[NoteId.Fb, formatPreset(NoteId.Fb, 'Fb', [4, 3])],
	[NoteId.F, formatPreset(NoteId.F, 'F', [5, 3])],
	[NoteId.Fs, formatPreset(NoteId.Fs, 'F#', [6, 3])],
	[NoteId.Gb, formatPreset(NoteId.Gb, 'Gb', [6, 4])],
	[NoteId.G, formatPreset(NoteId.G, 'G', [7, 4])],
	[NoteId.Gs, formatPreset(NoteId.Gs, 'G#', [8, 4])],
	[NoteId.Ab, formatPreset(NoteId.Ab, 'Ab', [8, 5])],
	[NoteId.A, formatPreset(NoteId.A, 'A', [9, 5])],
	[NoteId.As, formatPreset(NoteId.As, 'A#', [10, 5])],
	[NoteId.Bb, formatPreset(NoteId.Bb, 'Bb', [10, 6])],
	[NoteId.B, formatPreset(NoteId.B, 'B', [11, 6])],
	[NoteId.Bs, formatPreset(NoteId.Bs, 'B#', [0, 6])],
	[NoteId.Cb, formatPreset(NoteId.Cb, 'Cb', [11, 0])]
]);

export const NOTE_PRESETS = Array.from(NOTE_PRESET_MAP).map(([k, v]) => v);

console.log('dpb preset', NOTE_PRESETS);

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
