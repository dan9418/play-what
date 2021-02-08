import { atom } from "recoil";
import { TEST_SONG } from "./songs";

const SONG = TEST_SONG;

export const dataState = atom({
	key: 'dataState',
	default: SONG.data
});

export const pathState = atom({
	key: 'pathState',
	default: SONG.path
});

export const positionState = atom({
	key: 'positionState',
	default: [0, 0]
});
