import { IModalAction } from '@pw/sandbox/src/components/ui/layout/Modal';
import { atom, RecoilState } from "recoil";
import { IModelConfig } from './../../../core/src/models/Model.constants';

export const dataState: RecoilState<IModelConfig> = atom({
	key: 'dataState',
	default: null
});

export const modalState: RecoilState<IModalAction | null> = atom({
	key: 'modalState',
	default: null
});

export const fullScreenState: RecoilState<any> = atom({
	key: 'fullScreenState',
	default: null
});

export const hoveredIndexState: RecoilState<number | null> = atom({
	key: 'hoveredIndexState',
	default: null
});
