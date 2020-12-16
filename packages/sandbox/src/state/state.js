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
			value: {
				modelId: 'relative',
				keyCenter: [0, 0],
				intervals: SCALE.Major.value
			}
		},
		{
			id: 'input2',
			name: 'Input 2',
			// IAbsoluteInputConfig
			value: {
				modelId: 'absolute',
				notes: SCALE.Major.value
			}
		}
	]
});

export const _outputListState = atom({
	key: '_outputListState',
	default: [{
		id: 'output1',
		name: 'Output 1',
		value: {
			inputId: 'input1',
			viewerId: 'fretboard'
		}
	}]
});

export const inputListState = selector({
	key: 'inputListState',
	get: ({ get }) => {
		const inputDefs = get(_inputListState);
		const inputs = inputDefs.map(input => {
			const { id, name, value } = input;
			const { keyCenter, intervals } = value;

			let notes = [];
			if (keyCenter) {
				notes = PodUtils.addPodList(keyCenter, intervals);
			}
			return {
				id,
				name,
				...DEFAULT_INPUT,
				notes,
				...input.value
			};
		});
		return inputs;
	}
});

export const outputListState = selector({
	key: 'outputListState',
	get: ({ get }) => {
		const outputDefs = get(_outputListState);
		const inputs = get(inputListState);
		const outputList = outputDefs.map(out => {
			const { id, name } = out;
			const input = inputs.find(i => i.id === out.value.inputId);
			return {
				id,
				name,
				component: VIEWER[out.value.viewerId].component,
				viewerProps: {
					...VIEWER[out.value.viewerId].defaultProps,
					pods: input.notes
				}
			};
		});
		return outputList;
	}
});
