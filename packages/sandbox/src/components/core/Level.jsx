
import React from 'react';
import styled from 'styled-components';
import useRouteContext from '../../contexts/RouteContext';
import { PAGE } from '../pages/pages';

const StyledLevel = styled.main`
	
`;

const Level = () => {
	const routeContext = useRouteContext();
	const level = routeContext.currentPage.level;
	const LevelComponent = PAGE[level].component;
	return (
		<LevelComponent />
	);
};

export default Level;
