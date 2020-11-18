import Fretboard from "./Fretboard/Fretboard";
import { FRETBOARD_TUNING_VALUES } from "./Fretboard/Fretboard.api";
import DEFAULT_FRETBOARD_INPUTS from "./Fretboard/Fretboard.defaults";
import FretboardPanel from "./Fretboard/FretboardPanel";
import Graph from "./Graph/Graph";
import Keyboard from "./Keyboard/Keyboard";
import DEFAULT_KEYBOARD_INPUTS from "./Keyboard/Keyboard.defaults";
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
		defaultInputs: DEFAULT_FRETBOARD_INPUTS
	},
	{
		id: 'keyboard',
		name: 'Keyboard',
		component: Keyboard,
		panelComponent: KeyboardPanel,
		defaultInputs: DEFAULT_KEYBOARD_INPUTS
	},
	{
		id: 'graph',
		name: 'Graph',
		component: Graph
	}
];
