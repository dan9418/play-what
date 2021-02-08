import { atom } from "recoil";
import { OUT_OF_NOWHERE, TEST_SONG } from "./songs";

const SONG = OUT_OF_NOWHERE;

export const dataState = atom({
	key: 'dataState',
	default: SONG.modelConfig
});

export const pathState = atom({
	key: 'pathState',
	default: [{
		pathId: SONG.id || null,
		modelId: SONG.modelId,
		name: SONG.name || 'Untitled'
	}]
});

export const positionState = atom({
	key: 'positionState',
	default: [0, 0]
});
