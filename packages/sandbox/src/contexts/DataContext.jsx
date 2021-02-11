
import { MODEL } from '@pw/core/src/models/helpers/Model.constants';
import { STRUCT_ID } from '@pw/core/src/models/helpers/Struct.constants';
import React, { createContext, useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataState, pathState } from '../state/state';

const getDataAtPath = (data, path) => {
	let node = data;
	for (let i = 0; i < path.length - 1; i++) {
		const pathHead = path[i];

		const target = path[i + 1];
		const { pathId: targetId } = target;

		const { modelId } = pathHead;
		const model = MODEL[modelId];
		const modelStructId = model.structId;

		if (modelStructId === STRUCT_ID.Native) {
			// not used - should only be leaf
		}
		else if (modelStructId === STRUCT_ID.Group) {
			node = node[targetId].modelConfig;
		}
		else if (modelStructId === STRUCT_ID.Object || modelStructId === STRUCT_ID.List || modelStructId === STRUCT_ID.LabeledList) {
			node = node[targetId];
		}
		else if (modelStructId === STRUCT_ID.NamedList) {
			node = node.items[targetId];
		}
		else if (modelStructId === STRUCT_ID.KeyedList) {
			node = node.find(s => s.id === targetId);
		}
		else if (modelStructId === STRUCT_ID.NamedKeyedList) {
			node = node.items.find(s => s.id === targetId);
		}
		else {
			console.error('UNKNOWN STRUCT_ID', modelStructId);
		}

		if (typeof node === undefined || node === null)
			console.error('UNDEFINED NODE', 'path', path, 'data', data, pathHead);
	}
	return node;
};

const getDataUtils = (path, data, setData) => {

	const modelData = getDataAtPath(data, path);
	const setModelData = () => console.log('not supported');

	return {
		data,
		setData,
		modelData,
		setModelData
	}
}

const DataContext = createContext(null);

export const useDataContext = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
	const path = useRecoilValue(pathState);
	const [data, setData] = useRecoilState(dataState);

	const dataContext = getDataUtils(path, data, setData);

	console.log('dataContext', dataContext);

	return (
		<DataContext.Provider value={dataContext}>
			{children}
		</DataContext.Provider>
	);
};
