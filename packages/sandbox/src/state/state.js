import { CHORD, NOTE } from "@pw/core/src/Pod.presets";
import PodUtils from "@pw/core/src/Pod.utils";
import PodListUtils from "@pw/core/src/PodList.utils";
import { VIEWER } from "@pw/react";
import { atom, selector } from "recoil";
import { OUT_OF_NOWHERE, TEST_SONG } from "./songs";

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

export const _chartState = atom({
	key: '_chartState',
	default: TEST_SONG
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

export const positionState = atom({
	key: 'positionState',
	default: [0, 0]
});

export const inputState = selector({
	key: 'inputState',
	get: ({ get }) => {
		const chartDef = get(_chartState);
		const position = get(positionState);
		const inputDef = chartDef.sections[position[0]].concepts[position[1]];
		const { keyCenter, intervals } = inputDef;

		const keyCenterPreset = PodUtils.findPreset(keyCenter, { podType: 'note' }) || { name: '?' };
		const intervalsPreset = PodListUtils.findPreset(intervals, { podType: 'chord' }) || { name: '?' };

		const notes = PodUtils.addPodList(keyCenter, intervals);

		return {
			name: `${keyCenterPreset.id} ${intervalsPreset.id}`,
			keyCenter,
			intervals,
			notes
		};
	},
	set: ({ set, get }, newValue) => {
		const chartDef = get(_chartState);
		const [s, c] = get(positionState);
		const newChart = { ...chartDef };
		newChart.sections = [...chartDef.sections];
		newChart.sections[s] = { ...chartDef.sections[s] };
		newChart.sections[s].concepts = [...chartDef.sections[s].concepts];
		newChart.sections[s].concepts[c] = newValue;

		set(_chartState, newChart)
	}
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
