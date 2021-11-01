
import React from "react";
import { RecoilRoot } from 'recoil';
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
			<RecoilRoot>
				<ThemeProvider theme={THEME}>
					<ModalContextProvider>
						<SiteHeader />
						<RouteContextProvider>
							<PageNav />
							<Main />
						</RouteContextProvider>
					</ModalContextProvider>
				</ThemeProvider>
			</RecoilRoot>
		</ErrorBoundary>
	);
};

export default App;
