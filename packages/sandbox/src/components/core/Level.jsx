
import React, { createContext, useContext } from 'react';
import { useRecoilState } from 'recoil';
import SONGS from '../../state/songs';
import { dataState, pathState } from '../../state/state';
import { PAGE } from '../pages/pages';
import BreadcrumbList from './BreadcrumbList';

const getDataAtPath = (chart, path) => {
	let node = SONGS;
	for (let i = 0; i < path.length; i++) {
		let head = path[i];
		if (head.levelId === 'chart') {
			node = node[head.pathId]
		}
		else if (head.levelId === 'section') {
			node = node.sections.find(s => s.pathId === head.pathId)
		}
		else if (head.levelId === 'block') {
			node = node.blocks[head.pathId]
		}
		else if (head.levelId === 'podList') {
			node = node[head.pathId]
		}
		else if (head.levelId === 'pod') {
			node = node[head.pathId]
		}
		else if (head.levelId === 'podIndex') {
			node = node[head.pathId]
		}
		if (typeof node === 'undefined')
			console.warn('head', head, 'path', path, 'chart', chart);
	}
	return node;
};

const getLevelUtils = (path, setPath, chart) => {

	const currentLevel = path[path.length - 1];
	const popAt = n => setPath(path.slice(0, n + 1));
	const push = p => setPath([...path, p]);
	const reset = () => setPath([]);
	const data = getDataAtPath(chart, path);
	const setData = () => console.log('not supported');

	console.log('path', path, data);

	return {
		// data
		chart,
		data,
		setData,
		// position
		path,
		currentLevel,
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

	const LevelComponent = PAGE[levelUtils.currentLevel.levelId].component;

	return (
		<LevelContext.Provider value={levelUtils}>
			<BreadcrumbList />
			<LevelComponent />
		</LevelContext.Provider>
	);
};

export default Level;
