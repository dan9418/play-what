import { IModelConfig } from './../../../core/src/models/Model.constants';
import { IModalAction } from '@pw/sandbox/src/components/ui/layout/Modal';
import { atom, RecoilState } from "recoil";
import LIBRARY_PATH_ROOT from "../data/library";

export const dataState: RecoilState<IModelConfig> = atom({
	key: 'dataState',
	default: LIBRARY_PATH_ROOT
});

export const modalState: RecoilState<IModalAction | null> = atom({
	key: 'modalState',
	default: null
});
