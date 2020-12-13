import { SCALE } from "@pw/core/src/Pod.presets";
import { VIEWER } from "@pw/react";
import { atom, selector } from "recoil";

export const inputListState = atom({
	key: 'inputListState',
	default: [
		{
			id: 'input1',
			name: 'Input 1',
			value: SCALE.Major.value
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

export const outputListState = selector({
	key: 'outputListState',
	get: ({ get }) => {
		const outputDefs = get(_outputListState);
		const inputs = get(inputListState);
		const outputList = outputDefs.map(out => {
			const input = inputs.find(i => i.id === out.value.inputId);
			return {
				component: VIEWER[out.value.viewerId].component,
				viewerProps: {
					...VIEWER[out.value.viewerId].defaultProps,
					pods: input.value
				}
			};
		});
		return outputList;
	}
});
