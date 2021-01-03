import PodUtils from "./Pod.utils";

export const LABEL_FN_NOTE = {
	none: {
		id: 'none',
		name: 'None',
		value: () => ''
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
	note: {
		id: 'note',
		name: 'Note',
		value: pod => pod ? PodUtils.getName(pod, { podType: 'note' }) : null
	}
};

export const LABEL_FN_NOTE_VALUES = Object.values(LABEL_FN_NOTE);

export const LABEL_FN_INTERVAL = {
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
	interval: {
		id: 'interval',
		name: 'Interval',
		value: pod => pod ? PodUtils.getName(pod, { podType: 'interval' }) : null
	}
};

export const LABEL_FN_INTERVAL_VALUES = Object.values(LABEL_FN_INTERVAL);
