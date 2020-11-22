
import React, { useState } from 'react';
import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import About from '../../../react/src/tabs/about/About';
import Docs from '../../../react/src/tabs/docs/DocsTab';
import Explore from '../../../react/src/tabs/explore/ExploreTab';
import * as Icons from '../img/Icons';
import './NavBar.css';
import './Stage.css';

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

const Main = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const tab = TABS[tabIndex];
	return (
		<>
			<nav className="top-nav pw-primary">
				<div className="logo">Play What?</div>
				{TABS.map((t, i) => (
					<div
						className={`tab ${tabIndex === i ? 'active' : ''}`}
						key={t.id}
						onClick={() => setTabIndex(i)}
					>{t.name}</div>
				))}
				<div className="spacer" />
				<div className="right-nav">
					<a className="icon" href="https://github.com/dan9418/play-what-sandbox" target="_blank"><Icons.GitHub /></a>
					<div className={`meatball pw-hov`} onClick={() => null}>
						<Icons.Menu />
					</div>
				</div>
			</nav>
			<div className="stage">
				<div className="stage-content">
					{tab.component}
				</div>
			</div>
		</>
	);
};

export default hot(Main);
