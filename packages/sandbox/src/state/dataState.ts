import { atom } from "recoil";
import LIBRARY_PATH_ROOT from "../data/library";

export const dataState = atom({
	key: 'dataState',
	default: LIBRARY_PATH_ROOT
});

export const modalState = atom({
	key: 'modalState',
	default: null
});
