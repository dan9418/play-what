import React from 'react';
import * as Icons from '../Common/Icons';
import './NavBar.css';

const NavBar = () => {
	const menuTab = null;
	return (
		<nav className="top-nav pw-primary">
			<div className="logo nav-link">Play What??</div>
			<div className="spacer" />
			<div className="right-nav">
				<a className="icon" href="https://github.com/dan9418/play-what-sandbox" target="_blank"><Icons.GitHub /></a>
				<div className={`meatball ${menuTab ? 'pw-accent' : 'pw-primary'} pw-hov`} onClick={() => null}>
					<Icons.Menu />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
