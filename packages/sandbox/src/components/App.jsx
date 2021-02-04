
import React from 'react';
import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';
import styled, { ThemeProvider } from 'styled-components';
import THEME from '../styles/theme';
import ErrorBoundary from './core/ErrorBoundary';
import { LevelContextProvider } from '../contexts/LevelContext';
import Nav from './core/Nav';
import Explorer from './pages/Explorer';
import { RouteContextConsumer, RouteContextProvider } from '../contexts/RouteContext';

const StyledMain = styled.main`
	padding: 64px 16px 16px 16px;
	margin: auto;
	width: 100%;
	max-width: 1024px;
	min-height: 100%;
`;

const App = () => {
	return (
		<RecoilRoot>
			<ThemeProvider theme={THEME}>
				<ErrorBoundary>
					<RouteContextProvider>
						<Nav />
						<StyledMain>
							<LevelContextProvider>
								<RouteContextConsumer>
									{({Component}) => <Component />}
								</RouteContextConsumer>
							</LevelContextProvider>
						</StyledMain>
					</RouteContextProvider>
				</ErrorBoundary>
			</ThemeProvider>
		</RecoilRoot>
	);
};

export default hot(App);
