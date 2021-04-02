import ViewerTypeAction from './ViewerTypeAction';
import Fretboard from '../../../../../../../viewers/src/Fretboard/Fretboard';
import Keyboard from '../../../../../../../viewers/src/Keyboard/Keyboard';

enum VIEWER_ID {
	Fretboard = 'fretboard',
	Keyboard = 'keyboard'
}

export const VIEWER = {
	[VIEWER_ID.Fretboard]: {
		id: VIEWER_ID.Fretboard,
		name: 'Fretboard',
		component: Fretboard,
		options: [
			{
				name: 'Fret Range',
				component: null
			},
			{
				name: 'Tuning',
				component: null
			}
		]
	},
	[VIEWER_ID.Keyboard]: {
		id: VIEWER_ID.Keyboard,
		name: 'Keyboard',
		component: Keyboard,
		options: [
			{
				name: 'Key Range',
				component: null
			}
		]
	}
};

export const VIEWER_OPTIONS = Object.values(VIEWER);

const VIEWER_ACTIONS = [
	{
		name: 'Change Viewer',
		description: 'Set the viewer type',
		component: ViewerTypeAction
	}
];

export default VIEWER_ACTIONS;
