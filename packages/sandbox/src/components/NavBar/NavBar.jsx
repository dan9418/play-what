import React from 'react';
import * as Icons from '../../img/Icons';
import './NavBar.css';

const NavBar = () => {
	return (
		<nav className="top-nav pw-primary">
			<div className="logo nav-link">Play What?</div>
			<div className="spacer" />
			<div className="right-nav">
				<a className="icon" href="https://github.com/dan9418/play-what-sandbox" target="_blank"><Icons.GitHub /></a>
				<div className={`meatball pw-hov`} onClick={() => null}>
					<Icons.Menu />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
