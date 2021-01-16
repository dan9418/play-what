import { CHORD, NOTE } from "@pw/core/src/Pod.presets";
import PodUtils from "@pw/core/src/Pod.utils";
import { VIEWER } from "@pw/react";
import { atom, selector } from "recoil";
import { OUT_OF_NOWHERE } from "./songs";

const DEFAULT_INPUT_CONFIG = {
	keyCenter: [0, 0],
	intervals: []
};

const DEFAULT_OUTPUT_CONFIG = {
	inputId: null,
	viewerId: 'fretboard',
	viewerProps: {}
};

// PRIVATE

const _inputState = atom({
	key: '_inputState',
	default: {
		keyCenter: NOTE.C.value,
		intervals: CHORD.Maj.value
	}

});

const _outputState = atom({
	key: '_outputState',
	default: {
		inputId: 'input1',
		viewerId: 'fretboard',
		viewerProps: null
	}
});

// PUBLIC

export const inputState = selector({
	key: 'inputState',
	get: ({ get }) => {
		const inputDef = get(_inputState);
		const { keyCenter, intervals } = inputDef;
		const notes = PodUtils.addPodList(keyCenter, intervals);

		return {
			name: `Input`,
			keyCenter,
			intervals,
			notes
		};
	},
	set: ({ set }, newValue) => set(_inputState, newValue)
});

export const outputState = selector({
	key: 'outputState',
	get: ({ get }) => {
		const outputDef = get(_outputState);
		const input = get(inputState);

		const { viewerId, viewerProps } = outputDef;
		const { keyCenter, intervals, notes } = input;

		const propsFromInput = { keyCenter, intervals, notes };

		return {
			name: `Output`,
			viewerId,
			viewerProps: {
				...VIEWER[viewerId].presets[0].value,
				...viewerProps,
				...propsFromInput
			}
		};
	},
	set: ({ set }, newValue) => set(_outputState, newValue)
});
