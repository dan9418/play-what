import ModelUtils from "@pw/core/src/models/Model.utils";
import { atom, selector } from "recoil";
import { IModelConfig, IModelData } from './../../../core/src/models/Model.constants';
import { dataState } from "./dataState";
import _ from 'lodash';

export const pathState = atom({
	key: 'pathState',
	default: []
});

export interface IPathNode {
	config: IModelConfig;
	data: IModelData;
}

export const fullPathState = selector({
	key: 'fullPathState',
	get: ({ get }) => {
		const path: number[] = get(pathState);
		const _data: IModelConfig = get(dataState);

		// Get head
		const config: IModelConfig = _data;
		const data = ModelUtils.getData(config);
		const nodes = [{ config, data }];

		for (let i = 0; i < path.length; i++) {
			const head = nodes[i];
			const pathId = path[i];

			const child = head.data.metaChildren[pathId];

			nodes.push(child);
		}

		console.log('fullPathState', nodes);
		return nodes;
	}
});

export const pathHeadState = selector({
	key: 'pathHeadState',
	get: ({ get }): IPathNode => {
		const nodes: any[] = get(fullPathState);

		const pathHead = nodes[nodes.length - 1];
		console.log('pathHead', pathHead);
		return pathHead;
	},
	set: ({ get, set }, newValue: any) => {
		const path = get(pathState);
		const data = get(dataState);

		const copy = _.cloneDeep(data);

		const pathStr = `modelValue.${path.join('.modelValue.')}`;
		const oldValue = _.get(copy, pathStr);

		console.log('SET', '\nold:\n', oldValue, '\nnew:\n', newValue, '\ncopy:\n', copy, '\npath:\n', pathStr);

		const merged = { ...oldValue, ...newValue };
		_.set(copy, pathStr, merged);

		console.log('set pathHead', pathStr, copy);
		set(dataState, copy);
	}
});

export const siblingsState = selector({
	key: 'siblingsState',
	get: ({ get }) => {
		const fullPath = get(fullPathState);

		if (fullPath.length < 2) return null;

		const head = fullPath[fullPath.length - 1];
		const parent = fullPath[fullPath.length - 2];

		const siblings = parent.data.metaChildren;

		const i = head.data.pathId;
		const isFirst = i === 0;
		const isLast = i === siblings.length - 1;

		const prev = isFirst ? siblings[siblings.length - 1] : siblings[i - 1];
		const next = isLast ? siblings[0] : siblings[i + 1];

		return {
			prev,
			next,
			parent
		};
	}
});
