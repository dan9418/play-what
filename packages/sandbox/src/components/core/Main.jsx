
import React from 'react';
import styled from 'styled-components';
import { DataContextProvider } from '../../contexts/DataContext';
import { PathContextProvider } from '../../contexts/PathContext';
import { RouteContextConsumer } from '../../contexts/RouteContext';

const StyledMain = styled.main`
	padding: 48px 8px 0;
	margin: auto;
	width: 100%;
	max-width: 1024px;
	min-height: 100%;
`;

const Main = () => {
	return (
		<StyledMain>
			<PathContextProvider>
				<DataContextProvider>
					<RouteContextConsumer>
						{({Component}) => <Component />}
					</RouteContextConsumer>
				</DataContextProvider>
			</PathContextProvider>
		</StyledMain>
	);
};

export default Main;
