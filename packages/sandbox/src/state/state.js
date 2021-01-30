import { atom } from "recoil";
import { TEST_SONG } from "./songs";

export const chartState = atom({
	key: 'chartState',
	default: TEST_SONG
});

export const positionState = atom({
	key: 'positionState',
	default: [0, 0]
});

export const levelState = atom({
	key: 'levelState',
	default: 'chart'
});
