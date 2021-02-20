import { atom } from "recoil";
import LIBRARY_PATH_ROOT from "../data/songData";

export const pathState = atom({
	key: 'pathState',
	default: [LIBRARY_PATH_ROOT]
});
