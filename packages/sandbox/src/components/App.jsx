
import React from 'react';
import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';
import styled, { ThemeProvider } from 'styled-components';
import useRouteContext, { RouteContextConsumer, RouteContextProvider } from '../contexts/RouteContext';
import THEME from '../styles/theme';
import ErrorBoundary from './core/ErrorBoundary';
import Nav from './core/Nav';

const StyledMain = styled.main`
	padding: 63px 0;
	width: 100%;
	margin: auto;
`;

const App = () => {
	return (
		<RecoilRoot>
			<ThemeProvider theme={THEME}>
				<ErrorBoundary>
					<RouteContextProvider>
						<Nav />
						<StyledMain>
							<RouteContextConsumer>
								{routeContext => routeContext.currentPage.component}
							</RouteContextConsumer>
						</StyledMain>
					</RouteContextProvider>
				</ErrorBoundary>
			</ThemeProvider>
		</RecoilRoot>
	);
};

export default hot(App);
