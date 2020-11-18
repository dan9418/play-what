import Fretboard from "./Fretboard/Fretboard";
import { FRETBOARD_TUNING_VALUES } from "./Fretboard/Fretboard.api";
import DEFAULT_FRETBOARD_INPUTS from "./Fretboard/Fretboard.defaults";
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
		defaultInputs: DEFAULT_FRETBOARD_INPUTS,
		props: [
			{
				id: 'fretLow',
				name: 'Low Fret',
				inputId: 'numeric',
				inputProps: {
					min: 0,
					max: 24
				}
			},
			{
				id: 'fretHigh',
				name: 'High Fret',
				inputId: 'numeric',
				inputProps: {
					min: 0,
					max: 24
				}
			},
			{
				id: 'tuning',
				name: 'Tuning',
				inputId: 'dropdown',
				inputProps: {
					options: FRETBOARD_TUNING_VALUES
				}
			}
		]
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
