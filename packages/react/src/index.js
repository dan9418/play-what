import Meter from './Meter/Meter';
import Fretboard from './Fretboard/Fretboard';
import Keyboard from './Keyboard/Keyboard';
import Graph from './Graph/Graph';
import ButtonInput from './ui/ButtonInput/ButtonInput';
import DropdownInput from './ui/DropdownInput/DropdownInput';
import NumericInput from './ui/NumericInput/NumericInput';
import SwitchInput from './ui/SwitchInput/SwitchInput';
import DEFAULT_FRETBOARD_PROPS from './Fretboard/Fretboard.defaults';
import DEFAULT_KEYBOARD_PROPS from './Keyboard/Keyboard.defaults';
import DEFAULT_GRAPH_PROPS from './Graph/Graph.defaults';
import DEFAULT_METER_PROPS from './Meter/Meter.defaults';

const VIEWER = {
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

const VIEWER_VALUES = Object.values(VIEWER);

const UI = {
	ButtonInput,
	DropdownInput,
	NumericInput,
	SwitchInput
}

export default {
	VIEWER,
	VIEWER_VALUES,
	...VIEWER,
	...UI
}
