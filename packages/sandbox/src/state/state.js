import { atom } from "recoil";
import { OUT_OF_NOWHERE, TEST_SONG } from "./songs";

export const dataState = atom({
	key: 'dataState',
	default: OUT_OF_NOWHERE
});

export const pathState = atom({
	key: 'pathState',
	default: [
		{
			id: 'outOfNowhere',
			level: 'chart'
		}
		/*{
			id: 'A',
			level: 'section'
		},
		{
			id: 0,
			level: 'block'
		},
		{
			id: 'intervals',
			level: 'podList'
		},
		{
			id: 0,
			level: 'pod'
		},
		{
			id: 0,
			level: 'podIndex'
		}*/
	]
});

export const positionState = atom({
	key: 'positionState',
	default: [0, 0]
});
