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
		name: SONG.name || 'Untitled',
		pathId: SONG.id || null,
		modelId: SONG.modelId
	}]
});

export const positionState = atom({
	key: 'positionState',
	default: [0, 0]
});
