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

export const pathHeadState = selector({
	key: 'pathHeadState',
	get: ({ get }): IPathNode => {
		const path: number[] = get(pathState);
		const data: IModelConfig = get(dataState);

		// Get head
		let config: IModelConfig = data;
		let pathId: number = 0;
		for (let i = 0; i < path.length; i++) {
			const { modelId, modelValue, modelOptions } = config;
			const metaChildren = ModelUtils.getMetaChildren(modelId, modelValue, modelOptions);

			const oldOptions = config.modelOptions;

			pathId = path[i];
			config = metaChildren[pathId];
			config.modelOptions = { ...oldOptions, ...config.modelOptions }
		}

		// Compute data
		const { modelId, modelValue, modelOptions } = config;
		const metaChildren = ModelUtils.getMetaChildren(modelId, modelValue, modelOptions);

		const name = ModelUtils.getName(modelId, modelValue, modelOptions);
		const preview = ModelUtils.getPreview(modelId, modelValue, modelOptions);

		const modelData: IModelData = {
			pathId,
			name,
			preview,
			metaChildren,
			modelRoot: modelOptions.modelRoot,
			superset: modelOptions.superset
		};

		const pathHead = {
			config,
			data: modelData
		}

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
			const metaChildren = ModelUtils.getMetaChildren(modelId, modelValue, modelOptions);
			node = metaChildren[pathId];
		}

		console.log('pathParent', node);
		return node;
	}
});

export const siblingsState = selector({
	key: 'siblingsState',
	get: ({ get }) => {
		const path = get(pathState);
		const pathHead: any = get(pathHeadState);
		const pathParent: any = get(pathParentState);

		if (!pathParent || path.length < 2) return null;

		const siblings = ModelUtils.getMetaChildren(pathParent.modelId, pathParent.modelValue, pathParent.modelOptions);

		const i = pathHead.pathId;
		const isFirst = i === 0;
		const isLast = i === siblings.length - 1;

		const prev = isFirst ? siblings[siblings.length - 1] : siblings[i - 1];
		const next = isLast ? siblings[0] : siblings[i + 1];

		return {
			prev,
			next,
			parent: pathParent
		};
	}
});
