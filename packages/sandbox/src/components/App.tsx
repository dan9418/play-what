
import React from "react";
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { RouteContextProvider } from '../contexts/RouteContext';
import THEME from '../styles/theme';
import ErrorBoundary from './utils/ErrorBoundary';
import Main from './pages/Main';
import Nav from './pages/Nav';
import ModalManager from "./pages/ModalManager";

const App = () => {
	return (
		<RecoilRoot>
			<ThemeProvider theme={THEME}>
				{/* @ts-ignore */}
				<ErrorBoundary>
					<RouteContextProvider>
						<Nav />
						<Main />
						<ModalManager />
					</RouteContextProvider>
				</ErrorBoundary>
			</ThemeProvider>
		</RecoilRoot>
	);
};

export default hot(App);
