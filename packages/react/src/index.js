import Fretboard from './Fretboard/Fretboard';
import FretboardPanel from './Fretboard/FretboardPanel';
import DEFAULT_FRETBOARD_PROPS from './Fretboard/Fretboard.defaults';
/*
import Meter from './Meter/Meter';
import DEFAULT_METER_PROPS from './Meter/Meter.defaults';

import Keyboard from './Keyboard/Keyboard';
import KeyboardPanel from './Keyboard/KeyboardPanel';
import DEFAULT_KEYBOARD_PROPS from './Keyboard/Keyboard.defaults';

import Graph from './Graph/Graph';
import DEFAULT_GRAPH_PROPS from './Graph/Graph.defaults';
*/
import _ButtonInput from './ui/ButtonInput/ButtonInput';
import _DropdownInput from './ui/DropdownInput/DropdownInput';
import _NumericInput from './ui/NumericInput/NumericInput';
import _SwitchInput from './ui/SwitchInput/SwitchInput';

export const VIEWER = {
	/*meter: {
		id: 'meter',
		name: 'Meter',
		component: Meter,
		presets: [
			{
				id: 'default',
				name: 'Default',
				value: DEFAULT_METER_PROPS
			}
		]
	},*/
	fretboard: {
		id: 'fretboard',
		name: 'Fretboard',
		component: Fretboard,
		panelComponent: FretboardPanel,
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
	/*keyboard: {
		id: 'keyboard',
		name: 'Keyboard',
		component: Keyboard,
		panelComponent: KeyboardPanel,
		presets: [
			{
				id: 'default',
				name: 'Default',
				value: DEFAULT_KEYBOARD_PROPS
			}
		]
	},
	graph: {
		id: 'graph',
		name: 'Graph',
		component: Graph,
		presets: [
			{
				id: 'default',
				name: 'Default',
				value: DEFAULT_GRAPH_PROPS
			}
		]
	}*/
};

export const VIEWER_VALUES = Object.values(VIEWER);

export const ButtonInput = _ButtonInput;
export const DropdownInput = _DropdownInput;
export const NumericInput = _NumericInput;
export const SwitchInput = _SwitchInput;
