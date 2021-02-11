import Fretboard from './Fretboard/Fretboard';
import DEFAULT_FRETBOARD_PROPS from './Fretboard/Fretboard.defaults';

export const VIEWER = {
	fretboard: {
		id: 'fretboard',
		name: 'Fretboard',
		component: Fretboard,
		panelComponent: null,
		presets: [
			{
				id: 'default',
				name: 'Guitar',
				value: DEFAULT_FRETBOARD_PROPS
			},
			{
				id: 'bass',
				name: 'Bass',
				value: {
					...DEFAULT_FRETBOARD_PROPS,
					tuning: DEFAULT_FRETBOARD_PROPS.tuning.slice(0, 4)
				}
			}
		]
	}
};

export const VIEWER_VALUES = Object.values(VIEWER);
