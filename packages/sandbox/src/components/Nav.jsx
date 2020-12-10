
import React from 'react';
import 'react-hot-loader';
import * as Icons from '../img/Icons';
import './Nav.css';

const Nav = ({ tabs, tabIndex, setTabIndex }) => (
	<nav className="top-nav">
		<div className="logo">Play What?</div>
		{tabs.map((t, i) => (
			<div
				className={`tab ${tabIndex === i ? 'active' : ''}`}
				key={t.id}
				onClick={() => setTabIndex(i)}
			>{t.name}</div>
		))}
		<div className="spacer" />
		<div className="right-nav">
			<a className="icon" href="https://github.com/dan9418/play-what-sandbox" target="_blank"><Icons.GitHub /></a>
			<div className={`meatball`} onClick={() => null}>
				<Icons.Menu />
			</div>
		</div>
	</nav>
);

export default Nav;
