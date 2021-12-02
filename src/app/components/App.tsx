
import React from "react";
import { ThemeProvider } from 'styled-components';
import { ModalContextProvider } from "../contexts/ModalContext";
import { RouteContextProvider } from "../contexts/RouteContext";
import THEME from "../styles/theme";
import Main from './Main';
import ErrorBoundary from "./shared/ErrorBoundary";
import PageNav from "./shared/PageNav";
import SiteHeader from './shared/SiteHeader';

const App: React.FC = () => {
	return (
		<ErrorBoundary>
			<ThemeProvider theme={THEME}>
				<ModalContextProvider>
					<SiteHeader />
					<RouteContextProvider>
						<PageNav />
						<Main />
					</RouteContextProvider>
				</ModalContextProvider>
			</ThemeProvider>
		</ErrorBoundary>
	);
};

export default App;
