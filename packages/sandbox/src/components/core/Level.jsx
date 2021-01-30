
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
	for(let i = 0; i < path.length; i++) {
		let head = path[i];
		node = node[head.id]
	}
	return node;
};

const getPathUtilities = (path, setPath, chart) => {

	const currentLevel = path[path.length - 1];
	const popAt = n => setPath(breadcrumbs.slice(0, n + 1));
	const push = p => setPath([...breadcrumbs, p]);
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

	const { currentLevel, data, setData } = getPathUtilities(path, setPath, chart);

	const LevelComponent = PAGE[currentLevel.level].component;

	return (
		<>
			<BreadcrumbList path={path} currentLevel={currentLevel} />
			<LevelComponent data={data} />
		</>
	);
};

export default Level;
