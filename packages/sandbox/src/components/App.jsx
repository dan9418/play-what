
import React from 'react';
import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';
import styled, { ThemeProvider } from 'styled-components';
import THEME from '../styles/theme';
import ErrorBoundary from './core/ErrorBoundary';
import Level from './core/Level';
import Nav from './core/Nav';

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
					<Nav />
					<StyledMain>
						<Level />
					</StyledMain>
				</ErrorBoundary>
			</ThemeProvider>
		</RecoilRoot>
	);
};

export default hot(App);
