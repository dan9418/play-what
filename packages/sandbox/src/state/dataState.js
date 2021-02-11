import { atom } from "recoil";
import SONG from "../data/songData";

export const dataState = atom({
	key: 'dataState',
	default: SONG.modelConfig
});
