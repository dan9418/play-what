import { SCALE } from "@pw/core/src/Pod.presets";
import PodUtils from "@pw/core/src/Pod.utils";
import { VIEWER } from "@pw/react";
import { atom, selector } from "recoil";

const DEFAULT_INPUT = {
	keyCenter: null,
	intervals: null,
	notes: []
};

export const _inputListState = atom({
	key: '_inputListState',
	default: [
		{
			id: 'input1',
			name: 'Input 1',
			// IRelativeInputConfig
			modelId: 'relative',
			keyCenter: [0, 0],
			intervals: SCALE.Major.value
		},
		{
			id: 'input2',
			name: 'Input 2',
			// IAbsoluteInputConfig
			modelId: 'absolute',
			notes: SCALE.Major.value
		}
	]
});

export const _outputListState = atom({
	key: '_outputListState',
	default: [{
		id: 'output1',
		name: 'Output 1',
		inputId: 'input1',
		viewerId: 'fretboard',
		component: null,
		viewerProps: {}
	}]
});

export const inputListState = selector({
	key: 'inputListState',
	get: ({ get }) => {
		const inputDefs = get(_inputListState);
		const inputs = inputDefs.map(input => {
			const { id, name, keyCenter, intervals, notes, modelId } = input;

			let calcNotes = null;
			if (keyCenter) {
				calcNotes = PodUtils.addPodList(keyCenter, intervals);
			}
			return {
				id,
				name,
				...DEFAULT_INPUT,
				modelId,
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
				id,
				name,
				viewerId,
				inputId,
				component: VIEWER[viewerId].component,
				viewerProps: {
					...VIEWER[viewerId].defaultProps,
					...viewerProps,
					pods: input.notes
				}
			};
		});
		return outputList;
	},
	set: ({ set }, newValue) => set(_outputListState, newValue)
});
