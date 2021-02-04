
import React, { createContext, useContext } from 'react';
import { useRecoilState } from 'recoil';
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

const getLevelUtils = (path, setPath, data) => {

	const pathHead = path[path.length - 1];
	const popAt = n => setPath(path.slice(0, n + 1));
	const push = p => setPath([...path, p]);
	const reset = () => setPath([]);
	const levelData = getDataAtPath(data, path);
	const setData = () => console.log('not supported');

	return {
		// data
		data: levelData,
		setData,
		// position
		path,
		pathHead,
		popAt,
		push,
		reset
	}
}

const LevelContext = createContext(null);

export const useLevelContext = () => useContext(LevelContext);

export const LevelContextProvider = ({ children }) => {
	const [path, setPath] = useRecoilState(pathState);
	const [data, setData] = useRecoilState(dataState);

	const levelUtils = getLevelUtils(path, setPath, data);

	console.log('PATH', path);
	console.log('LEVEL', levelUtils);

	return (
		<LevelContext.Provider value={levelUtils}>
			{children}
		</LevelContext.Provider>
	);
};
