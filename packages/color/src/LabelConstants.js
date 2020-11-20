import PodUtils from "@pw/core/src/PodUtils";
import Utils from "@pw/core/src/Utils";

export const LABEL_SCHEME = {
	none: {
		id: 'none',
		name: 'None',
		value: () => ''
	},
	degree: {
		id: 'degree',
		name: 'Degree',
		value: pod => pod ? pod[1] : null
	},
	pitch: {
		id: 'pitch',
		name: 'Pitch',
		value: pod => pod ? pod[0] : null
	},
	pitchClass: {
		id: 'pitchClass',
		name: 'Pitch Class',
		value: pod => pod ? PodUtils.getPitchClass(pod) : null
	},
	octave: {
		id: 'octave',
		name: 'Octave',
		value: pod => pod ? PodUtils.getOctave(pod) : null
	},
	interval: {
		id: 'interval',
		name: 'Interval',
		value: pod => pod ? PodUtils.getName(pod, { podType: 'interval' }) : null
	},
	note: {
		id: 'note',
		name: 'Note',
		value: pod => pod ? PodUtils.getName(pod, { podType: 'note' }) : null
	}
};

export const LABEL_SCHEME_VALUES = Object.values(LABEL_SCHEME);
