import { atom } from "recoil";
import { LIBRARY_PATH_ROOT } from "../data/songData";

export const dataState = atom({
	key: 'dataState',
	default: LIBRARY_PATH_ROOT
});
