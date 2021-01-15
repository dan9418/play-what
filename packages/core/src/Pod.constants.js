export const NOTE_PROPERTIES = [
	{
		id: 'name',
		name: 'Name'
	},
	{
		id: 'octave',
		name: 'Octave'
	},
	{
		id: 'pitch',
		name: 'Pitch'
	},
	{
		id: 'pitchClass',
		name: 'Pitch Class'
	}
];

export const INTERVAL_PROPERTIES = [
	{
		id: 'name',
		name: 'Name'
	},
	{
		id: 'degree',
		name: 'Degree'
	}
];

export const SOURCES = [
	{
		id: 'keyCenter',
		name: 'Key Center',
		properties: NOTE_PROPERTIES
	},
	{
		id: 'notes',
		name: 'Notes',
		properties: NOTE_PROPERTIES
	},
	{
		id: 'intervals',
		name: 'Intervals',
		properties: INTERVAL_PROPERTIES
	}
];
