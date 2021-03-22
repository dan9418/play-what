import ModelUtils from "@pw/core/src/models/Model.utils";
import { atom, selector } from "recoil";
import { IModelConfig, IModelData } from './../../../core/src/models/Model.constants';
import { dataState } from "./dataState";

export const pathState = atom({
	key: 'pathState',
	default: []
});

export interface IPathNode {
	config: IModelConfig;
	data: IModelData;
};

export const fullPathState = selector({
	key: 'fullPathState',
	get: ({ get }) => {
		const path: number[] = get(pathState);
		const _data: IModelConfig = get(dataState);

		// Get head	
		let config: IModelConfig = _data;
		let data = ModelUtils.getData(config);
		let nodes = [{ config, data }];

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
	set: ({ get, set }, newValue) => {
		/*const path = get(pathState);
		const data = get(dataState);

		const parentIds = path.slice(0, path.length - 1);
		const newData = JSON.parse(JSON.stringify(data));*/

		console.log('set pathHead', newValue);
		// set(dataState, newData);
	}
});

export const pathParentState = selector({
	key: 'pathParentState',
	get: ({ get }) => {
		return null;
		const path = get(pathState);
		const data = get(dataState);

		if (!path.length) return null;

		let node = data;
		for (let i = 0; i < path.length - 1; i++) {
			const pathId = path[i];
			const { modelId, modelValue, modelOptions } = node;
			const metaChildren = ModelUtils.getData(node);
			node = metaChildren[pathId];
		}

		console.log('pathParent', node);
		return node;
	}
});

export const siblingsState = selector({
	key: 'siblingsState',
	get: ({ get }) => {
		/*const path = get(pathState);
		const pathHead: any = get(pathHeadState);
		const pathParent: any = get(pathParentState);

		if (!pathParent || path.length < 2) return null;

		const siblings = ModelUtils.getData(pathParent);

		const i = pathHead.pathId;
		const isFirst = i === 0;
		const isLast = i === siblings.length - 1;

		const prev = isFirst ? siblings[siblings.length - 1] : siblings[i - 1];
		const next = isLast ? siblings[0] : siblings[i + 1];

		return {
			prev,
			next,
			parent: pathParent
		};*/

		return {
			parent: null
		}
	}
});
