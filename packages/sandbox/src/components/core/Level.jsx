
import React, { createContext, useContext } from 'react';
import { useRecoilState } from 'recoil';
import SONGS from '../../state/songs';
import { dataState, pathState } from '../../state/state';
import Page from '../pages/Page';
import { LEVEL, TYPE, TYPE_ID } from '../pages/pages';
import BreadcrumbList from './BreadcrumbList';

const getDataAtPath = (chart, path) => {
	let node = chart;
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
			console.error('UNDEFINED NODE', pathHead, 'path', path, 'chart', chart);
	}
	return node;
};

const getLevelUtils = (path, setPath, chart) => {

	const pathHead = path[path.length - 1];
	const popAt = n => setPath(path.slice(0, n + 1));
	const push = p => setPath([...path, p]);
	const reset = () => setPath([]);
	const data = getDataAtPath(chart, path);
	const setData = () => console.log('not supported');

	return {
		// data
		chart,
		data,
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

const Level = () => {
	const [path, setPath] = useRecoilState(pathState);
	const [chart, setChart] = useRecoilState(dataState);

	const levelUtils = getLevelUtils(path, setPath, chart);

	console.log('PATH', path);
	console.log('LEVEL', levelUtils);

	return (
		<LevelContext.Provider value={levelUtils}>
			<BreadcrumbList />
			<Page />
		</LevelContext.Provider>
	);
};

export default Level;
