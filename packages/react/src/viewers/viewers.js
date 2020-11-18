import Fretboard from "./Fretboard/Fretboard";
import { FRETBOARD_TUNING_VALUES } from "./Fretboard/Fretboard.api";
import DEFAULT_FRETBOARD_PROPS from "./Fretboard/Fretboard.defaults";
import FretboardPanel from "./Fretboard/FretboardPanel";
import Graph from "./Graph/Graph";
import Keyboard from "./Keyboard/Keyboard";
import DEFAULT_KEYBOARD_PROPS from "./Keyboard/Keyboard.defaults";
import KeyboardPanel from "./Keyboard/KeyboardPanel";
import Meter from "./Meter/Meter";

export const VIEWERS = [
	{
		id: 'meter',
		name: 'Meter',
		component: Meter
	},
	{
		id: 'fretboard',
		name: 'Fretboard',
		component: Fretboard,
		panelComponent: FretboardPanel,
		defaultProps: DEFAULT_FRETBOARD_PROPS
	},
	{
		id: 'keyboard',
		name: 'Keyboard',
		component: Keyboard,
		panelComponent: KeyboardPanel,
		defaultProps: DEFAULT_KEYBOARD_PROPS
	},
	{
		id: 'graph',
		name: 'Graph',
		component: Graph
	}
];
