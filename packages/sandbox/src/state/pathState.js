import { atom, selector } from "recoil";
import LIBRARY_PATH_ROOT from "../data/songData";

export const pathState = atom({
	key: 'pathState',
	default: [LIBRARY_PATH_ROOT]
});

export const pathHeadState = selector({
	key: 'pathHeadState',
	get: ({ get }) => {
		const path = get(pathState);
		return path[path.length - 1];
	}
});
