
const React = require("react");
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { RouteContextProvider } from '../contexts/RouteContext';
import THEME from '../styles/theme';
import ErrorBoundary from './core/ErrorBoundary';
import Main from './core/Main';
import Nav from './core/Nav';

const App = () => {
	return (
		<RecoilRoot>
			<ThemeProvider theme={THEME}>
				{/* @ts-ignore */}
				<ErrorBoundary>
					<RouteContextProvider>
						<Nav />
						<Main />
					</RouteContextProvider>
				</ErrorBoundary>
			</ThemeProvider>
		</RecoilRoot>
	);
};

export default hot(App);
