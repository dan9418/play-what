export const INTERVAL = {
	P1: {
		id: 'P1',
		name: 'Perfect Unison',
		value: {
			d: 0,
			p: 0
		}
	},
	m2: {
		id: 'm2',
		name: 'Minor 2nd',
		value: {
			d: 1,
			p: 1
		}
	},
	M2: {
		id: 'M2',
		name: 'Major 2nd',
		value: {
			d: 1,
			p: 2
		}
	},
	A2: {
		id: 'A2',
		name: 'Augmented 2nd',
		value: {
			d: 1,
			p: 3
		}
	},
	d3: {
		id: 'd3',
		name: 'Diminished 3rd',
		value: {
			d: 2,
			p: 2
		}
	},
	m3: {
		id: 'm3',
		name: 'Minor 3rd',
		value: {
			d: 2,
			p: 3
		}
	},
	M3: {
		id: 'M3',
		name: 'Major 3rd',
		value: {
			d: 2,
			p: 4
		}
	},
	A3: {
		id: 'A3',
		name: 'Augmented 3rd',
		value: {
			d: 2,
			p: 5
		}
	},
	d4: {
		id: 'd4',
		name: 'Diminished 4th',
		value: {
			d: 3,
			p: 4
		}
	},
	P4: {
		id: 'P4',
		name: 'Perfect 4th',
		value: {
			d: 3,
			p: 5
		}
	},
	A4: {
		id: 'A4',
		name: 'Augmented 4th',
		value: {
			d: 3,
			p: 6
		}
	},
	d5: {
		id: 'd5',
		name: 'Diminished 5th',
		value: {
			d: 4,
			p: 6
		}
	},
	P5: {
		id: 'P5',
		name: 'Perfect 5th',
		value: {
			d: 4,
			p: 7
		}
	},
	A5: {
		id: 'A5',
		name: 'Augmented 5th',
		value: {
			d: 4,
			p: 8
		}
	},
	d6: {
		id: 'd6',
		name: 'Diminished 6th',
		value: {
			d: 5,
			p: 7
		}
	},
	m6: {
		id: 'm6',
		name: 'Minor 6th',
		value: {
			d: 5,
			p: 8
		}
	},
	M6: {
		id: 'M6',
		name: 'Major 6th',
		value: {
			d: 5,
			p: 9
		}
	},
	A6: {
		id: 'A6',
		name: 'Augmented 6th',
		value: {
			d: 5,
			p: 10
		}
	},
	d7: {
		id: 'd7',
		name: 'Diminished 7th',
		value: {
			d: 6,
			p: 9
		}
	},
	m7: {
		id: 'm7',
		name: 'Minor 7th',
		value: {
			d: 6,
			p: 10
		}
	},
	M7: {
		id: 'M7',
		name: 'Major 7th',
		value: {
			d: 6,
			p: 11
		}
	},
	P8: {
		id: 'P8',
		name: 'Octave',
		value: {
			d: 7,
			p: 12
		}
	}
};

export const NOTE = {
	NA: { id: 'NA', name: 'N/A', value: { p: 0, d: -1 } },
	Ab: { id: 'Ab', name: 'Ab', value: { p: 8, d: 0 } },
	A: { id: 'A', name: 'A', value: { p: 9, d: 0 } },
	'A#': { id: 'A#', name: 'A#', value: { p: 10, d: 0 } },
	Bb: { id: 'Bb', name: 'Bb', value: { p: 10, d: 1 } },
	B: { id: 'B', name: 'B', value: { p: 11, d: 1 } },
	'B#': { id: 'B#', name: 'B#', value: { p: 0, d: 1 } },
	Cb: { id: 'Cb', name: 'Cb', value: { p: 11, d: 2 } },
	C: { id: 'C', name: 'C', value: { p: 0, d: 2 } },
	'C#': { id: 'C#', name: 'C#', value: { p: 1, d: 2 } },
	Db: { id: 'Db', name: 'Db', value: { p: 1, d: 3 } },
	D: { id: 'D', name: 'D', value: { p: 2, d: 3 } },
	'D#': { id: 'D#', name: 'D#', value: { p: 3, d: 3 } },
	Eb: { id: 'Eb', name: 'Eb', value: { p: 3, d: 4 } },
	E: { id: 'E', name: 'E', value: { p: 4, d: 4 } },
	'E#': { id: 'E#', name: 'E#', value: { p: 5, d: 4 } },
	Fb: { id: 'Fb', name: 'Fb', value: { p: 4, d: 5 } },
	F: { id: 'F', name: 'F', value: { p: 5, d: 5 } },
	'F#': { id: 'F#', name: 'F#', value: { p: 6, d: 5 } },
	Gb: { id: 'Gb', name: 'Gb', value: { p: 6, d: 6 } },
	G: { id: 'G', name: 'G', value: { p: 7, d: 6 } },
	'G#': { id: 'G#', name: 'G#', value: { p: 8, d: 6 } }
};

export default {
	interval: INTERVAL,
	note: NOTE
}
