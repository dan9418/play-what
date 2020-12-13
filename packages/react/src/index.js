import Meter from './Meter/Meter';
import Fretboard from './Fretboard/Fretboard';
import Keyboard from './Keyboard/Keyboard';
import Graph from './Graph/Graph';
import _ButtonInput from './ui/ButtonInput/ButtonInput';
import _DropdownInput from './ui/DropdownInput/DropdownInput';
import _NumericInput from './ui/NumericInput/NumericInput';
import _SwitchInput from './ui/SwitchInput/SwitchInput';
import DEFAULT_FRETBOARD_PROPS from './Fretboard/Fretboard.defaults';
import DEFAULT_KEYBOARD_PROPS from './Keyboard/Keyboard.defaults';
import DEFAULT_GRAPH_PROPS from './Graph/Graph.defaults';
import DEFAULT_METER_PROPS from './Meter/Meter.defaults';

export const VIEWER = {
	meter: {
		id: 'meter',
		name: 'Meter',
		component: Meter,
		defaulProps: DEFAULT_METER_PROPS
	},
	fretboard: {
		id: 'fretboard',
		name: 'Fretboard',
		component: Fretboard,
		defaultProps: DEFAULT_FRETBOARD_PROPS
	},
	keyboard: {
		id: 'keyboard',
		name: 'Keyboard',
		component: Keyboard,
		defaultProps: DEFAULT_KEYBOARD_PROPS
	},
	graph: {
		id: 'graph',
		name: 'Graph',
		component: Graph,
		defaultProps: DEFAULT_GRAPH_PROPS
	}
};

export const VIEWER_VALUES = Object.values(VIEWER);

export const ButtonInput = _ButtonInput;
export const DropdownInput = _DropdownInput;
export const NumericInput = _NumericInput;
export const SwitchInput = _SwitchInput;
