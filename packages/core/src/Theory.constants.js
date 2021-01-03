import { INTERVAL, SCALE } from "./Pod.presets";

export const ACCIDENTAL = Object.freeze({
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
	}
});

export const ACCIDENTAL_VALUES = Object.values(ACCIDENTAL);

export const QUALITY = Object.freeze({
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
});

export const QUALITY_VALUES = Object.values(QUALITY);

export const CORE_INTERVALS = [
	[INTERVAL.P1],
	[INTERVAL.m2, INTERVAL.M2],
	[INTERVAL.m3, INTERVAL.M3],
	[INTERVAL.P4],
	[INTERVAL.P5],
	[INTERVAL.m6, INTERVAL.M6],
	[INTERVAL.m7, INTERVAL.M7]
];
