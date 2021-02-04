
import React, { createContext, useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LEVEL, TYPE_ID } from '../components/core/config';
import { dataState, pathState } from '../state/state';

const getDataAtPath = (data, path) => {
	let node = data;
	for (let i = 0; i < path.length - 1; i++) {
		const pathHead = path[i];
		const target = path[i + 1];
		const { levelId, pathId } = pathHead;
		const { pathId: targetId } = target;
		const levelTypeId = LEVEL[levelId].typeId;

		if (levelTypeId === TYPE_ID.Native) {
			// not used - should only be leaf
		}
		else if (levelTypeId === TYPE_ID.Object || levelTypeId === TYPE_ID.List) {
			node = node[targetId];
		}
		else if (levelTypeId === TYPE_ID.NamedList) {
			node = node.data[targetId];
		}
		else if (levelTypeId === TYPE_ID.NamedKeyedList) {
			node = node.data.find(s => s.id === targetId);
		}
		else {
			console.error('UNKNOWN DATA TYPE', levelTypeId);
		}

		if (!node)
			console.error('UNDEFINED NODE', 'path', path, 'data', data, pathHead);
	}
	return node;
};

const getDataUtils = (path, data, setData) => {

	const levelData = getDataAtPath(data, path);
	const setLevelData = () => console.log('not supported');

	return {
		data,
		setData,
		levelData,
		setLevelData
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
