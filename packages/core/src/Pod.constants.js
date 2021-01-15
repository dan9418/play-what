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
		id: 'note',
		name: 'Note',
		properties: NOTE_PROPERTIES
	},
	{
		id: 'interval',
		name: 'Interval',
		properties: INTERVAL_PROPERTIES
	}
];
