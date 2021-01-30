
import React from 'react';
import 'react-hot-loader';
import styled from 'styled-components';
import useRouteContext from '../../contexts/RouteContext';

const StyledLevel = styled.main`
	
`;

const Level = () => {
	const routeContext = useRouteContext();
	const LevelComponent = routeContext.currentPage.component;
	return (
		<LevelComponent />
	);
};

export default Level;
