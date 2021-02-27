import { MODEL, MODEL_ID } from "@pw/core/src/models/helpers/Model.constants";
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
		return path[path.length - 1];
	}
});

export const siblingsState = selector({
	key: 'siblingsState',
	get: ({ get }) => {
		const path = get(pathState);

		if(path.length < 2) return null;

		const pathHead = path[path.length - 1];
		const parent = path[path.length - 2];

		if(parent.modelId !== MODEL_ID.Group) return null;

		const siblings = MODEL[MODEL_ID.Group].utils.getMetaChildren(parent.modelData);

		const i = pathHead.groupIndex;
		const isFirst = i === 0;
		const isLast = i === siblings.length -1;

		const prev = isFirst ? null : siblings[i - 1];
		const next = isLast ? null : siblings[i + 1];

		return {
			prev,
			next
		};
	}
});
