
import React from 'react';
import 'react-hot-loader';
import * as Icons from '../img/Icons';
import styled from 'styled-components';

const StyledNav = styled.nav`
	color: white;
	background-color: ${({ theme }) => theme.primary};
    height: 64px;
    line-height: 64px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .3);
    padding: 0 16px;
    font-weight: bold;
    font-size: 120%;

	& svg, & svg * {
		width: 100%;
		height: 100%;
		fill: #fff;
	}

	& .icon {
		height: 50px;
		width: 50px;
		cursor: pointer;
		padding: 10px;
		box-sizing: border-box;
	}

	& .spacer {
		width: 20px;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
	}

	& .logo {
		font-size: 120%;
		text-transform: uppercase;
		letter-spacing: 5px;
		font-weight: bolder;
		cursor: pointer;
		margin-right: 16px;
	}

	& .right-nav {
		position: absolute;
		right: 0;
		display: flex;
	}

	& .meatball {
		height: 50px;
		width: 50px;
		cursor: pointer;
		padding: 10px;
		box-sizing: border-box;
	}

	& .tab {
		padding: 0 16px;
		cursor: pointer;
		&:hover {
			color: ${({ theme }) => theme.active};
		}
		&.active {
			border-bottom: 4px solid ${({ theme }) => theme.active};
		}
	}
`;

const Nav = ({ tabs, tabIndex, setTabIndex }) => (
	<StyledNav className="top-nav">
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
	</StyledNav>
);

export default Nav;
