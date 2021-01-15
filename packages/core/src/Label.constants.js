import PodUtils from "./Pod.utils";

export const LABEL_SOURCES = [
	{
		id: 'none',
		name: 'None',
		properties: []
	},
	{
		id: 'keyCenter',
		name: 'Key Center',
		properties: [
			{
				id: 'pitchClass',
				name: 'Pitch Class'
			}
		]
	},
	{
		id: 'note',
		name: 'Note',
		properties: [
			{
				id: 'pitchClass',
				name: 'Pitch Class'
			}
		]
	},
	{
		id: 'interval',
		name: 'Interval',
		properties: [
			{
				id: 'degree',
				name: 'Degree'
			}
		]
	}
];
