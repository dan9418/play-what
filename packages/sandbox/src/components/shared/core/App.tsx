
import React from "react";
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { ModalContextProvider } from '../../../contexts/ModalContext';
import { RouteContextProvider } from '../../../contexts/_RouteContext';
import THEME from '../../../styles/theme';
import Main from './Main';
import Nav from './Nav';
import ErrorBoundary from '../utils/ErrorBoundary';

const App = () => {
	return (
		<RecoilRoot>
			<ThemeProvider theme={THEME}>
				{/* @ts-ignore */}
				<ErrorBoundary>
					<ModalContextProvider>
						<RouteContextProvider>
							<Nav />
							<Main />
						</RouteContextProvider>
					</ModalContextProvider>
				</ErrorBoundary>
			</ThemeProvider>
		</RecoilRoot>
	);
};

export default hot(App);
