
import React, { createContext, useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MODEL } from '../components/core/MODEL';
import { TYPE_ID } from '../components/core/TYPE';
import { dataState, pathState } from '../state/state';

const getDataAtPath = (data, path) => {
	let node = data;
	for (let i = 0; i < path.length - 1; i++) {
		const pathHead = path[i];
		const target = path[i + 1];
		const { modelId, pathId } = pathHead;
		const { pathId: targetId } = target;
		const modelTypeId = MODEL[modelId].typeId;

		if (modelTypeId === TYPE_ID.Native) {
			// not used - should only be leaf
		}
		else if (modelTypeId === TYPE_ID.Object || modelTypeId === TYPE_ID.List || modelTypeId === TYPE_ID.LabeledList) {
			node = node[targetId];
		}
		else if (modelTypeId === TYPE_ID.NamedList) {
			node = node.items[targetId];
		}
		else if (modelTypeId === TYPE_ID.NamedKeyedList) {
			node = node.items.find(s => s.id === targetId);
		}
		else {
			console.error('UNKNOWN DATA TYPE', modelTypeId);
		}

		if (!node)
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
