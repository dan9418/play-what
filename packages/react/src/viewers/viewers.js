import Fretboard from "./Fretboard/Fretboard";
import Graph from "./Graph/Graph";
import Keyboard from "./Keyboard/Keyboard";
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
		component: Fretboard
	},
	{
		id: 'keyboard',
		name: 'Keyboard',
		component: Keyboard
	},
	{
		id: 'graph',
		name: 'Graph',
		component: Graph
	}
];
