import ModelUtils from "@pw/core/src/models/Model.utils";
import { atom, selector } from "recoil";
import { dataState } from "./dataState";

export const pathState = atom({
	key: 'pathState',
	default: []
});

export const pathHeadState = selector({
	key: 'pathHeadState',
	get: ({ get }) => {
		const path = get(pathState);
		const data = get(dataState);

		let node  = data;
		for (let i = 0; i < path.length; i++) {
			const pathId = path[i];
			const { modelId, modelValue, modelOptions } = node;
			const metaChildren = ModelUtils.getMetaChildren(modelId, modelValue, modelOptions);
			node = metaChildren[pathId];
		}

		console.log('pathHead', node);
		return node;
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

export const metaChildrenState = selector({
	key: 'metaChildrenState',
	get: ({ get }) => {
		const pathHead: any = get(pathHeadState);

		const { modelId, modelValue, modelOptions } = pathHead;
		const metaChildren = ModelUtils.getMetaChildren(modelId, modelValue, modelOptions);

		console.log('metaChildren', metaChildren);
		return metaChildren;
	}
});

export const siblingsState = selector({
	key: 'siblingsState',
	get: ({ get }) => {
		const path = get(pathState);
		const pathHead: any = get(pathHeadState);
		const pathParent: any = get(pathParentState);

		if (path.length < 2) return null;

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
