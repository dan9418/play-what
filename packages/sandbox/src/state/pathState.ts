import ModelUtils from "@pw/core/src/models/Model.utils";
import { atom, RecoilState, RecoilValue, RecoilValueReadOnly, selector } from "recoil";
import { IModelDef, IModelConfig, IModelData, IModelNode } from './../../../core/src/models/Model.constants';
import { dataState } from "./dataState";
import _ from 'lodash';

export const pathState: RecoilState<number[]> = atom({
	key: 'pathState',
	default: []
});

export const matchOctaveState: RecoilState<boolean> = atom({
	key: 'matchOctaveState',
	default: true
});

const getNodeFromConfig = (config, i = 0): IModelNode => {
	const data = ModelUtils.getData(config, i);
	const metaChildren = ModelUtils.getMetaChildren(config);

	const node = {
		config,
		data,
		metaChildren
	}

	return node;
};

export const fullPathState: RecoilValueReadOnly<IModelNode[]> = selector({
	key: 'fullPathState',
	get: ({ get }) => {
		const path: number[] = get(pathState);
		const lib: IModelConfig = get(dataState);

		const nodes = [getNodeFromConfig(lib)];

		for (let i = 0; i < path.length; i++) {
			const pathId = path[i];
			const head = nodes[i];
			const child = head.metaChildren[pathId];
			const node = getNodeFromConfig(child.config, pathId)
			nodes.push(node);
		}

		console.log('fullPathState', nodes);
		return nodes;
	}
});

export const pathHeadState: RecoilState<IModelNode> = selector({
	key: 'pathHeadState',
	get: ({ get }): IModelDef => {
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

interface ISiblingsState {
	prev: IModelDef | null,
	next: IModelDef | null,
	parent: IModelDef | null
}

export const siblingsState: RecoilValueReadOnly<ISiblingsState | null> = selector({
	key: 'siblingsState',
	get: ({ get }) => {
		const fullPath = get(fullPathState);

		if (fullPath.length < 2) return null;

		const head = fullPath[fullPath.length - 1];
		const parent = fullPath[fullPath.length - 2];

		const siblings = parent.metaChildren;

		const i = head.data.pathId;
		const isFirst = i === 0;
		// @ts-ignore
		const isLast = i === siblings.length - 1;

		// @ts-ignore
		const prev = isFirst ? siblings[siblings.length - 1] : siblings[i - 1];
		const next = isLast ? siblings[0] : siblings[i + 1];

		return {
			prev,
			next,
			parent
		};
	}
});
