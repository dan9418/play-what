import { MODEL } from "@pw/core/src/models/Model.constants";
import { atom, selector } from "recoil";
import { dataState } from "./dataState";

export const pathState = atom({
	key: 'pathState',
	default: [null]
});

export const pathHeadState = selector({
	key: 'pathHeadState',
	get: ({ get, set }) => {
		const path = get(pathState);
		const data = get(dataState);

		let node = data;
		for (let i = 0; i < path.length; i++) {

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

export const siblingsState = selector({
	key: 'siblingsState',
	get: ({ get }) => {
		const path = get(pathState);

		if (path.length < 2) return null;

		const pathHead = path[path.length - 1];
		const parent = path[path.length - 2];

		const parentModel = MODEL[parent.modelId];

		const siblings = parentModel.utils.getMetaChildren(parent.modelValue, parent.modelRoot);

		const i = pathHead.childIndex;
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
