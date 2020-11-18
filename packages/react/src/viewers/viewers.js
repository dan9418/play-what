import Fretboard from "./Fretboard/Fretboard";
import { FRETBOARD_TUNING_VALUES } from "./Fretboard/Fretboard.api";
import DEFAULT_FRETBOARD_INPUTS from "./Fretboard/Fretboard.defaults";
import FretboardPanel from "./Fretboard/FretboardPanel";
import Graph from "./Graph/Graph";
import Keyboard from "./Keyboard/Keyboard";
import DEFAULT_KEYBOARD_INPUTS from "./Keyboard/Keyboard.defaults";
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
		defaultInputs: DEFAULT_KEYBOARD_INPUTS,
		props: [
			{
				id: 'keyLow',
				name: 'Low Key',
				inputId: 'numeric',
				inputProps: {
					min: -48,
					max: 48
				}
			},
			{
				id: 'keyHigh',
				name: 'High Key',
				inputId: 'numeric',
				inputProps: {
					min: -48,
					max: 48
				}
			}
		]
	},
	{
		id: 'graph',
		name: 'Graph',
		component: Graph
	}
];
