import { SCALE } from "@pw/core/src/Pod.presets";
import { atom, selector } from "recoil";
import Fretboard from "../../../react/src/viewers/Fretboard/Fretboard";

export const inputListState = atom({
	key: 'inputListState',
	default: [
		SCALE.Major
	]
});

export const outputListState = atom({
	key: 'outputListState',
	default: [{
		id: 'output1',
		name: 'Output 1',
		value: {
			defaultProps: {},
			component: Fretboard
		}
	}]
});
