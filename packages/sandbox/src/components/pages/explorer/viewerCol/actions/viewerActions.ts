import { IModalAction } from '@pw/sandbox/src/components/ui/layout/Modal';
import Fretboard from '../../../../../../../viewers/src/Fretboard/Fretboard';
import Keyboard from '../../../../../../../viewers/src/Keyboard/Keyboard';
import ViewerTypeAction from './ViewerTypeAction';

enum VIEWER_ID {
	Fretboard = 'fretboard',
	Keyboard = 'keyboard'
}


interface IOption {
	name: string;
	component: any;
}
export interface IViewer {
	id: string;
	name: string;
	component: any;
	options: IOption[];
}

export const VIEWER: { [x: string]: IViewer } = {
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

const VIEWER_ACTIONS: IModalAction[] = [
	{
		name: 'Change Viewer',
		description: 'Set the viewer type',
		component: ViewerTypeAction
	}
];

export default VIEWER_ACTIONS;
