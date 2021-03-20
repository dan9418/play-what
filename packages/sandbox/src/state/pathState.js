import { MODEL } from "@pw/core/src/models/Model.constants";
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

		/*
			name
			preview
			modelId
			modelRoot
			modelValue
		*/

		let node = data;
		for (let i = 0; i < path.length; i++) {
			node = node.modelValue[path[i]]
		}

		console.log('pathHead', node);
		return node;
	},
	set: ({ get, set }, newValue) => {
		const path = get(pathState);
		const pathHead = path[path.length - 1];
		const parents = path.slice(0, path.length - 1);
		console.log('set pathHead', newValue);
		set(pathState, [...parents, {
			...pathHead,
			...newValue
		}])
	}
});

export const pathParentState = selector({
	key: 'pathParentState',
	get: ({ get }) => {
		const path = get(pathState);
		const data = get(dataState);

		let node = data;
		for (let i = 0; i < path.length; i++) {
			node = node.modelValue[path[i]]
		}

		console.log('pathParent', node);
		return node;
	}
});

export const siblingsState = selector({
	key: 'siblingsState',
	get: ({ get }) => {
		const path = get(pathState);
		const pathHead = get(pathHeadState);
		const pathParent = get(pathParentState);

		if (path.length < 2) return null;

		const parentModel = MODEL[pathParent.modelId];

		const siblings = parentModel.utils.getMetaChildren(pathParent.modelValue, pathParent.modelRoot);

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
