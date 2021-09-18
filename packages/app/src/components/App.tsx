
import React from "react";
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { ModalContextProvider } from "../contexts/ModalContext";
import THEME from "../styles/theme";
import Main from './Main';
import ErrorBoundary from "./shared/ErrorBoundary";
import Nav from './shared/Nav';

const App = () => {
	return (
		<RecoilRoot>
			<ThemeProvider theme={THEME}>
				{/* @ts-ignore */}
				<ErrorBoundary>
					<ModalContextProvider>
						<Nav />
						<Main />
					</ModalContextProvider>
				</ErrorBoundary>
			</ThemeProvider>
		</RecoilRoot>
	);
};

export default hot(App);
