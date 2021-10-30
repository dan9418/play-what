
import React from "react";
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { ModalContextProvider } from "../contexts/ModalContext";
import { RouteContextProvider } from "../contexts/_RouteContext";
import THEME from "../styles/theme";
import Main from './Main';
import ErrorBoundary from "./shared/ErrorBoundary";
import PageNav from "./shared/PageNav";
import SiteFooter from "./shared/SiteFooter";
import SiteHeader from './shared/SiteHeader';

const App = () => {
	return (
		<RecoilRoot>
			<ThemeProvider theme={THEME}>
				{/* @ts-ignore */}
				<ErrorBoundary>
					<ModalContextProvider>
						<SiteHeader />
						<RouteContextProvider>
							<PageNav />
							<Main />
						</RouteContextProvider>
						<SiteFooter />
					</ModalContextProvider>
				</ErrorBoundary>
			</ThemeProvider>
		</RecoilRoot>
	);
};

export default App;
