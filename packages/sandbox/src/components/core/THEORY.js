export const THEORY_ID = {
	Pitch: 0,
	Degree: 1,
	Note: 2,
	Interval: 3,
	Chord: 4,
	Scale: 5
};

export const THEORY = {
	[THEORY_ID.Pitch]: {
		theoryId: THEORY_ID.Pitch,
		name: 'Pitch'
	},
	[THEORY_ID.Degree]: {
		theoryId: THEORY_ID.Degree,
		name: 'Degree'
	},
	[THEORY_ID.Note]: {
		theoryId: THEORY_ID.Note,
		name: 'Note'
	},
	[THEORY_ID.Interval]: {
		theoryId: THEORY_ID.Interval,
		name: 'Interval'
	},
	[THEORY_ID.Chord]: {
		theoryId: THEORY_ID.Chord,
		name: 'Chord'
	},
	[THEORY_ID.Scale]: {
		theoryId: THEORY_ID.Scale,
		name: 'Scale'
	}
};
