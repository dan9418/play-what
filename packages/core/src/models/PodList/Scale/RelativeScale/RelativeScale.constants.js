import { INTERVAL } from "../../../Pod/Interval/Interval.constants";

export const RELATIVE_SCALE = {
	Ionian: { id: 'Ionian', name: 'Ionian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.M7.value] },
	Dorian: { id: 'Dorian', name: 'Dorian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.m7.value] },
	Phrygian: { id: 'Phrygian', name: 'Phrygian', value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
	PhrygianDom: { id: 'PhrygianDom', name: 'Phrygian Dominant', value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
	Lydian: { id: 'Lydian', name: 'Lydian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.A4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.M7.value] },
	Mixolydian: { id: 'Mixolydian', name: 'Mixolydian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.m7.value] },
	Aeolian: { id: 'Aeolian', name: 'Aeolian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
	Locrian: { id: 'Locrian', name: 'Locrian', value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.d5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
	NaturalMinor: { id: 'NaturalMinor', name: 'Natural Minor', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
	HarmonicMinor: { id: 'HarmonicMinor', name: 'Harmonic Minor', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.M7.value] },
	MelodicMinor: { id: 'MelodicMinor', name: 'Melodic Minor', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.M7.value] },
	MajorPentatonic: { id: 'MajorPentatonic', name: 'Major Pentatonic', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M6.value] },
	MinorPentatonic: { id: 'MinorPentatonic', name: 'Minor Pentatonic', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m7.value] },
	MajorBlues: { id: 'MajorBlues', name: 'Major Blues', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.M3.value, INTERVAL.P5.value, INTERVAL.M6.value] },
	MinorBlues: { id: 'MinorBlues', name: 'Minor Blues', value: [INTERVAL.P1.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.d5.value, INTERVAL.P5.value, INTERVAL.m7.value] }
	//Chromatic: { id: 'Chromatic', name: 'Chromatic', value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.A4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.M6.value, INTERVAL.m7.value, INTERVAL.M7.value] }
};

export const RELATIVE_SCALE_VALUES = Object.values(RELATIVE_SCALE);

export const DEFAULT_RELATIVE_SCALE_OPTIONS = {
	displayName: 'scale',
	intervalDisplayName: 'interval'
};
