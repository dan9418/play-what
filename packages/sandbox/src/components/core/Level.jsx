
import React, { createContext, useContext } from 'react';
import { useRecoilState } from 'recoil';
import SONGS from '../../state/songs';
import { dataState, pathState } from '../../state/state';
import { PAGE } from '../pages/pages';
import BreadcrumbList from './BreadcrumbList';

const getDataAtPath = (chart, path) => {
	let node = SONGS;
	for (let i = 0; i < path.length; i++) {
		let pathHead = path[i];
		if (pathHead.levelId === 'chart') {
			node = node[pathHead.pathId]
		}
		else if (pathHead.levelId === 'section') {
			node = node.sections.find(s => s.id === pathHead.pathId)
		}
		else if (pathHead.levelId === 'block') {
			node = node.blocks[pathHead.pathId]
		}
		else if (pathHead.levelId === 'podList') {
			node = node[pathHead.pathId]
		}
		else if (pathHead.levelId === 'pod') {
			node = node[pathHead.pathId]
		}
		else if (pathHead.levelId === 'podIndex') {
			node = node[pathHead.pathId]
		}
		if (typeof node === 'undefined')
			console.warn('pathHead', pathHead, 'path', path, 'chart', chart);
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

	console.log('path', path, data);

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

	const LevelComponent = PAGE[levelUtils.pathHead.levelId].component;

	return (
		<LevelContext.Provider value={levelUtils}>
			<BreadcrumbList />
			<LevelComponent />
		</LevelContext.Provider>
	);
};

export default Level;
