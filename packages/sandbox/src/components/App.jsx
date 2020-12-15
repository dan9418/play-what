
import React, { useState } from 'react';
import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';
import styled, { ThemeProvider } from 'styled-components';
import THEME from '../styles/theme';
import ErrorBoundary from './ErrorBoundary';
import Nav from './Nav/Nav';
import About from './pages/About/About';
import Docs from './pages/Docs/Docs';
import Explore from './pages/Explore/Explore';

const TABS = [
	{
		id: 'io',
		name: 'In/Out',
		component: <Explore />
	},
	{
		id: 'chart',
		name: 'Chart',
		component: <Explore />
	}
];

const LINKS = [
	{
		id: 'about',
		name: 'About',
		component: <About />
	},
	{
		id: 'docs',
		name: 'Docs',
		component: <Docs />
	}
];

const StyledMain = styled.main`
	padding: 63px 0;
	width: 100%;
	margin: auto;
`;

const App = () => {
	const [tabIndex, setTabIndex] = useState(1);
	const tab = [...TABS, ...LINKS][tabIndex];
	return (
		<RecoilRoot>
			<ThemeProvider theme={THEME}>
				<ErrorBoundary>
					<Nav tabs={TABS} links={LINKS} tabIndex={tabIndex} setTabIndex={setTabIndex} />
					<StyledMain>
						{tab.component}
					</StyledMain>
				</ErrorBoundary>
			</ThemeProvider>
		</RecoilRoot>
	);
};

export default hot(App);
