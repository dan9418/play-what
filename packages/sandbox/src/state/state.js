import { atom } from "recoil";
import { MODEL_ID } from "../components/core/MODEL";
import { OUT_OF_NOWHERE } from "./songs";

export const dataState = atom({
	key: 'dataState',
	default: OUT_OF_NOWHERE
});

export const pathState = atom({
	key: 'pathState',
	default: [
		{
			name: 'Out of Nowhere',
			pathId: 'outOfNowhere',
			modelId: MODEL_ID.Chart
		}
	]
});

export const positionState = atom({
	key: 'positionState',
	default: [0, 0]
});
