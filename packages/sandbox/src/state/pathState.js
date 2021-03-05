import { MODEL, MODEL_ID } from "@pw/core/src/models/Model.constants";
import { atom, selector } from "recoil";
import LIBRARY_PATH_ROOT from "../data/songData";

export const pathState = atom({
	key: 'pathState',
	default: [LIBRARY_PATH_ROOT]
});

export const pathHeadState = selector({
	key: 'pathHeadState',
	get: ({ get }) => {
		const path = get(pathState);
		const pathHead = path[path.length - 1];
		console.log('pathHead', pathHead);
		return pathHead;
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
			next
		};
	}
});
