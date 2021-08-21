
import React from "react";
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { ModalContextProvider } from '../../../contexts/ModalContext';
import THEME from '../../../styles/theme';
import ErrorBoundary from '../utils/ErrorBoundary';
//import Main from './Main';
//import Nav from './Nav';

const App = () => {
	return (
		<RecoilRoot>
			<ThemeProvider theme={THEME}>
				{/* @ts-ignore */}
				<ErrorBoundary>
					<ModalContextProvider>
						test
						{/*<Nav />
						<Main />*/}
					</ModalContextProvider>
				</ErrorBoundary>
			</ThemeProvider>
		</RecoilRoot>
	);
};

export default hot(App);
