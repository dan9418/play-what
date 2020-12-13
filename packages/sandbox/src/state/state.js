import { SCALE } from "@pw/core/src/Pod.presets";
import { atom, selector } from "recoil";
import Fretboard from "../../../react/src/viewers/Fretboard/Fretboard";

export const inputListState = atom({
	key: 'inputListState',
	default: [{
		id: 'input1',
		name: 'Input 1',
		value: SCALE.Major.value
	}]
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
