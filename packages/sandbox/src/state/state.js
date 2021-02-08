import { atom } from "recoil";
import { MODEL_ID } from "../components/core/MODEL";
import { OUT_OF_NOWHERE, TEST_SONG } from "./songs";

export const dataState = atom({
	key: 'dataState',
	default: TEST_SONG
});

export const pathState = atom({
	key: 'pathState',
	default: [
		{
			name: 'Test',
			pathId: 'test',
			modelId: MODEL_ID.Block
		}
		/*{
			name: 'Out of Nowhere',
			pathId: 'outOfNowhere',
			modelId: MODEL_ID.Chart
		}*/
	]
});

export const positionState = atom({
	key: 'positionState',
	default: [0, 0]
});
