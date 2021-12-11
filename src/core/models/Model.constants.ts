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
	m2 = 'minor-2nd',
	M2 = 'major-2nd',
	A2 = 'augmented-2nd',
	d3 = 'diminished-3rd',
	m3 = 'minor-3rd',
	M3 = 'major-3rd',
	A3 = 'augmented-3rd',
	d4 = 'diminished-4th',
	P4 = 'perfect-4th',
	A4 = 'augmented-4th',
	d5 = 'diminished-5th',
	P5 = 'perfect-5th',
	A5 = 'augmented-5th',
	d6 = 'diminished-6th',
	m6 = 'minor-6th',
	M6 = 'major-6th',
	A6 = 'augmented-6th',
	d7 = 'diminished-7th',
	m7 = 'minor-7th',
	M7 = 'major-7th',
	P8 = 'octave',
	b9 = 'flat-9th',
	x9 = '9th',
	s9 = 'sharp-9th',
	b11 = 'flat-11th',
	x11 = '11th',
	s11 = 'sharp-11th',
	b13 = 'flat-13th',
	x13 = '13th',
	s13 = 'sharp-13th',
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
	MajTriad = 'major-triad',
	Maj6 = 'major-6th',
	Maj7 = 'major-7th',
	MinTriad = 'minor-triad',
	Min6 = 'minor-6th',
	Min7 = 'minor-7th',
	MinMaj7 = 'minor-major-7th',
	Dom7 = 'dom-7th',
	Dom7b9 = 'dom-7th-b9',
	AugTriad = 'augmented-triad',
	Aug7 = 'augmented-7th',
	AugMaj7 = 'augmented-major-7th',
	DimTriad = 'diminished-triad',
	Dim7 = 'diminished-7th',
	HalfDim7 = 'half-diminished-7th',
	Sus2 = 'suspended-2nd',
	Sus4 = 'suspended-4th',
}

export type PresetId = NoteId | IntervalId | ChordId | ScaleId;

export interface IModelConfig {
	modelId: ModelId;
	id: string;
	name: string;
	tags: Tag[];
	value: any;
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
	Sixth = '6th',
	Seventh = '7th',
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
	Second = '2nd',
	Third = '3rd',
	Fourth = '4th',
	Fifth = '5th',
	Sixth = '6th',
	Seventh = '7th',
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
