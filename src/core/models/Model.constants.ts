import { MAX_DEGREE, ROOT_DEGREE } from "../theory/Degree.constants";
import { MAX_PITCH, ROOT_PITCH } from "../theory/Pitch.constants";

export enum ModelId {
	Note = 'notes',
	Interval = 'intervals',
	Chord = 'chords',
	Scale = 'scales',
}

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

export enum IntervalId {
	P1 = 'unison',
	m2 = 'minor-second',
	M2 = 'major-second',
	A2 = 'augmented-second',
	d3 = 'diminished-third',
	m3 = 'minor-third',
	M3 = 'major-third',
	A3 = 'augmented-third',
	d4 = 'diminished-fourth',
	P4 = 'perfect-fourth',
	A4 = 'augmented-fourth',
	d5 = 'diminished-fifth',
	P5 = 'perfect-fifth',
	A5 = 'augmented-fifth',
	d6 = 'diminished-sixth',
	m6 = 'minor-sixth',
	M6 = 'major-sixth',
	A6 = 'augmented-sixth',
	d7 = 'diminished-seventh',
	m7 = 'minor-seventh',
	M7 = 'major-seventh',
	P8 = 'octave',
	b9 = 'flat-9',
	x9 = '9',
	s9 = 'sharp-9',
	b11 = 'flat-11',
	x11 = '11',
	s11 = 'sharp-11',
	b13 = 'flat-13',
	x13 = '13',
	s13 = 'sharp-13',
}

export enum ScaleId {
	Ionian = 'ionian',
	Dorian = 'dorian',
	Phrygian = 'phrygian',
	PhrygianDominant = 'phrygian-dominant',
	Lydian = 'lydian',
	Mixolydian = 'mixolydian',
	DominantBebop = 'dominant-bebop',
	MajorBebop = 'major-bebop',
	Aeolian = 'aeolian',
	Locrian = 'locrian',
	NaturalMinor = 'natural-minor',
	HarmonicMinor = 'harmonic-minor',
	MelodicMinor = 'melodic-minor',
	MajorPentatonic = 'major-pentatonic',
	MinorPentatonic = 'minor-pentatonic',
	MajorBlues = 'major-blues',
	MinorBlues = 'minor-blues',
	Chromatic = 'chromatic'
}

export enum ChordId {
	MajTriad = 'maj-triad',
	Maj6 = 'maj-6',
	Maj7 = 'maj-7',
	MinTriad = 'min-triad',
	Min6 = 'min-6',
	Min7 = 'min-7',
	MinMaj7 = 'min-maj-7',
	Dom7 = 'dom-7',
	Dom7b9 = 'dom-7-b9',
	AugTriad = 'aug-triad',
	Aug7 = 'aug-7',
	AugMaj7 = 'aug-maj-7',
	DimTriad = 'dim-triad',
	Dim7 = 'dim-7',
	HalfDim7 = 'half-dim-7',
	Sus2 = 'sus-2',
	Sus4 = 'sus-4',
}

export type PresetId = NoteId | IntervalId | ChordId | ScaleId;

export interface IModelConfig {
	modelId: ModelId;
	id: string;
	name: string;
	tags: Tag[]
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

export const MAX_POD: IPod = [MAX_PITCH, MAX_DEGREE];

export const DEFAULT_POD: IPod = [ROOT_PITCH, ROOT_DEGREE];

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


export interface IIntervalQuality {
	id: string;
	name: string;
	symbol: string;
	up?: string;
	down?: string;
}

export const INTERVAL_QUALITY: { [x: string]: IIntervalQuality } = {
	dim: {
		id: 'dim',
		name: 'Diminished',
		symbol: 'd',
		down: null,
		up: 'min'
	},
	min: {
		id: 'min',
		name: 'Minor',
		symbol: 'm',
		down: 'dim',
		up: 'maj'
	},
	perfect: {
		id: 'perfect',
		name: 'Perfect',
		symbol: 'P',
		down: 'dim',
		up: 'aug'
	},
	maj: {
		id: 'maj',
		name: 'Major',
		symbol: 'M',
		down: 'min',
		up: 'aug'
	},
	aug: {
		id: 'aug',
		name: 'Augmented',
		symbol: 'A',
		down: 'maj',
		up: null
	}
};

export const INTERVAL_QUALITY_VALUES = Object.values(INTERVAL_QUALITY);
