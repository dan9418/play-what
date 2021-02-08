import { atom } from "recoil";
import { TEST_SONG } from "./songs";

const SONG = TEST_SONG;

export const dataState = atom({
	key: 'dataState',
	default: SONG.modelConfig
});

export const pathState = atom({
	key: 'pathState',
	default: [{
		pathId: null,
		modelId: SONG.modelId,
		name: SONG.name || 'Untitled'
	}]
});

export const positionState = atom({
	key: 'positionState',
	default: [0, 0]
});
