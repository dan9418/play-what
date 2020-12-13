import { SCALE } from "@pw/core/src/Pod.presets";
import Fretboard from "@pw/react/src/Fretboard/Fretboard";
import { atom, selector } from "recoil";

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
