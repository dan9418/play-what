
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import SONGS from '../../state/songs';
import { chartState, pathState } from '../../state/state';
import { PAGE } from '../pages/pages';
import BreadcrumbList from '../ui/BreadcrumbList';

const StyledLevel = styled.main`
	
`;

const getDataAtPath = (chart, path) => {
	let node = SONGS;
	for (let i = 0; i < path.length; i++) {
		let head = path[i];
		if (head.level === 'chart') {
			node = node[head.id]
		}
		else if (head.level === 'section') {
			node = node.sections.find(s => s.id === head.id)
		}
		else if (head.level === 'block') {
			node = node.blocks[head.id]
		}
		else if (head.level === 'podList') {
			node = node[head.id]
		}
		else if (head.level === 'pod') {
			node = node[head.id]
		}
		else if (head.level === 'podIndex') {
			node = node[head.id]
		}
	}
	return node;
};

const getPathUtilities = (path, setPath, chart) => {

	const currentLevel = path[path.length - 1];
	const popAt = n => setPath(path.slice(0, n + 1));
	const push = p => setPath([...path, p]);
	const reset = () => setPath([]);
	const data = getDataAtPath(chart, path);
	const setData = () => console.log('not supported');

	console.log('path', path, data);

	return {
		currentLevel,
		popAt,
		push,
		reset,
		data,
		setData
	}
}

const Level = () => {
	const [path, setPath] = useRecoilState(pathState);
	const [chart, setChart] = useRecoilState(chartState);

	const { currentLevel, data, setData, popAt } = getPathUtilities(path, setPath, chart);

	const LevelComponent = PAGE[currentLevel.level].component;

	return (
		<>
			<BreadcrumbList path={path} currentLevel={currentLevel} popAt={popAt} />
			<LevelComponent data={data} />
		</>
	);
};

export default Level;
