
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { pathState } from '../../state/state';
import { PAGE } from '../pages/pages';
import BreadcrumbList from '../ui/BreadcrumbList';

const StyledLevel = styled.main`
	
`;


const getPathUtilities = (path, setPath) => {

	const currentLevel = path[path.length - 1];
	const popAt = n => setPath(breadcrumbs.slice(0, n + 1));
	const push = p => setPath([...breadcrumbs, p]);
	const reset = () => setPath([]);

	return {
		currentLevel,
		popAt,
		push,
		reset
	}
}

const Level = () => {
	const [path, setPath] = useRecoilState(pathState);

	const { currentLevel } = getPathUtilities(path, setPath);

	const LevelComponent = PAGE[currentLevel.level].component;

	return (
		<>
			<BreadcrumbList path={path} currentLevel={currentLevel} />
			<LevelComponent />
		</>
	);
};

export default Level;
