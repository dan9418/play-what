import { CHORD, NOTE } from "@pw/core/src/Pod.presets";
import PodUtils from "@pw/core/src/Pod.utils";
import { VIEWER } from "@pw/react";
import { atom, selector } from "recoil";

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

const _inputListState = atom({
	key: '_inputListState',
	default: [
		{
			keyCenter: NOTE.C.value,
			intervals: CHORD.Maj.value
		}
	]
});

const _outputListState = atom({
	key: '_outputListState',
	default: [
		{
			inputId: 'input1',
			viewerId: 'fretboard',
			viewerProps: null
		}
	]
});

// PUBLIC

export const inputListState = selector({
	key: 'inputListState',
	get: ({ get }) => {
		const inputDefs = get(_inputListState);
		const inputs = inputDefs.map((input, i) => {

			const { keyCenter, intervals } = input;
			const notes = PodUtils.addPodList(keyCenter, intervals);

			return {
				id: i,
				name: `Input ${i + 1}`,
				keyCenter,
				intervals,
				notes
			};
		});
		return inputs;
	},
	set: ({ set }, newValue) => set(_inputListState, newValue)
});

export const outputListState = selector({
	key: 'outputListState',
	get: ({ get }) => {
		const outputDefs = get(_outputListState);
		const inputs = get(inputListState);

		const outputs = outputDefs.map((out, i) => {
			const { inputId, viewerId, viewerProps } = out;
			const input = inputs.find(i => i.id === inputId) || inputs[0];
			const { keyCenter, intervals, notes } = input;

			const propsFromInput = input ? { keyCenter, intervals, notes } : {};

			return {
				id: i,
				name: `Output ${i + 1}`,
				viewerId,
				inputId,
				viewerProps: {
					...VIEWER[viewerId].presets[0].value,
					...viewerProps,
					...propsFromInput
				}
			};
		});
		return outputs;
	},
	set: ({ set }, newValue) => set(_outputListState, newValue)
});
