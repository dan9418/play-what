
import React, { useState } from 'react';
import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import About from '../../../react/src/tabs/about/About';
import Docs from '../../../react/src/tabs/docs/DocsTab';
import Explore from '../../../react/src/tabs/explore/ExploreTab';
import Main from './Main';
import './Main.css';
import Nav from './Nav';
import Timeline from './Timeline';

const TABS = [
	{
		id: 'about',
		name: 'About',
		component: <About />
	},
	{
		id: 'explore',
		name: 'Explore',
		component: <Explore />
	},
	{
		id: 'docs',
		name: 'Docs',
		component: <Docs />
	}
];

const Stage = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const tab = TABS[tabIndex];
	return (
		<>
			<Nav tabs={TABS} tabIndex={tabIndex} setTabIndex={setTabIndex} />
			<Main>
				{tab.component}
			</Main>
			<Timeline />
		</>
	);
};

export default hot(Stage);
