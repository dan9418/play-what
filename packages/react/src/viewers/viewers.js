import PodTable from "../tabs/explore/subpanels/pods/table/PodTable";
import Fretboard from "./Fretboard/Fretboard";
import DEFAULT_FRETBOARD_PROPS from "./Fretboard/Fretboard.defaults";
import FretboardPanel from "./Fretboard/FretboardPanel";
import Graph from "./Graph/Graph";
import Keyboard from "./Keyboard/Keyboard";
import DEFAULT_KEYBOARD_PROPS from "./Keyboard/Keyboard.defaults";
import KeyboardPanel from "./Keyboard/KeyboardPanel";
import Meter from "./Meter/Meter";
import React from 'react'

export const VIEWER = {
	table: {
		id: 'table',
		name: 'Table',
		component: PodTable,
		panelComponent: React.Fragment,
		defaultProps: {}
	},
	meter: {
		id: 'meter',
		name: 'Meter',
		component: Meter
	},
	fretboard: {
		id: 'fretboard',
		name: 'Fretboard',
		component: Fretboard,
		panelComponent: FretboardPanel,
		defaultProps: DEFAULT_FRETBOARD_PROPS
	},
	keyboard: {
		id: 'keyboard',
		name: 'Keyboard',
		component: Keyboard,
		panelComponent: KeyboardPanel,
		defaultProps: DEFAULT_KEYBOARD_PROPS
	},
	graph: {
		id: 'graph',
		name: 'Graph',
		component: Graph
	}
};

export const VIEWER_VALUES = Object.values(VIEWER);
