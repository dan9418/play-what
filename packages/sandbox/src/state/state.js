import { CHORD, SCALE } from "@pw/core/src/Pod.presets";
import PodUtils from "@pw/core/src/Pod.utils";
import { VIEWER } from "@pw/react";
import { atom, selector } from "recoil";

const DEFAULT_INPUT = {
	id: 'default',
	name: 'Default Input',
	keyCenter: [0, 0],
	intervals: [],
	notes: []
};

const DEFAULT_OUTPUT = {
	id: 'default',
	name: 'Default Output',
	inputId: null,
	viewerId: 'fretboard',
	viewerProps: {}
};

// PRIVATE

const _inputListState = atom({
	key: '_inputListState',
	default: [
		{
			id: 'input1',
			name: 'Input 1',
			podType: 'interval',
			keyCenter: [0, 0],
			intervals: CHORD.Maj.value,
			notes: null
		},
		{
			id: 'input2',
			name: 'Input 2',
			podType: 'note',
			keyCenter: null,
			intervals: null,
			notes: CHORD.Dom7.value
		}
	]
});

const _outputListState = atom({
	key: '_outputListState',
	default: [{
		id: 'output1',
		name: 'Output 1',
		inputId: 'input1',
		viewerId: 'fretboard',
		viewerProps: {}
	}]
});

// PUBLIC

export const inputListState = selector({
	key: 'inputListState',
	get: ({ get }) => {
		const inputDefs = get(_inputListState);
		const inputs = inputDefs.map(input => {
			const { id, name, podType, keyCenter, intervals, notes } = input;

			let calcNotes = null;
			if (podType === 'interval') {
				calcNotes = PodUtils.addPodList(keyCenter, intervals);
			}
			return {
				id: id || DEFAULT_INPUT.id,
				name: name || DEFAULT_INPUT.name,
				keyCenter: keyCenter || DEFAULT_INPUT.keyCenter,
				intervals: intervals || DEFAULT_INPUT.intervals,
				notes: calcNotes ? calcNotes : notes
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
		const outputList = outputDefs.map(out => {
			const { id, name, viewerId, inputId, viewerProps } = out;
			const input = inputs.find(i => i.id === inputId);
			return {
				id: id || DEFAULT_OUTPUT.id,
				name: name || DEFAULT_OUTPUT.name,
				viewerId: viewerId || DEFAULT_OUTPUT.viewerId,
				inputId: inputId || DEFAULT_OUTPUT.inputId,
				viewerProps: {
					...viewerProps,
					pods: input ? input.notes : []
				}
			};
		});
		return outputList;
	},
	set: ({ set }, newValue) => set(_outputListState, newValue)
});
