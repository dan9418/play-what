
import React from 'react';
import 'react-hot-loader';
import styled from 'styled-components';
import { GitHub } from '../../img/Icons';

const StyledNav = styled.nav`
	color: white;
	background-color: ${({ theme }) => theme.primary};
    height: 48px;
    line-height: 48px;
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

	& .link {
		cursor: pointer;
		display: flex;
		align-items: center;
		color: white;
		text-decoration: none;
		padding: 0 8px;
		background-color: transparent;
		outline: none;
		border: none;
		font-size: 80%;
		font-weight: normal;
		margin-left: 8px;

		&:hover {
			color: ${({ theme }) => theme.active};
		}

		& svg {
			margin-right: 8px;
			width: 24px;
			height: 24px;
		}

		& svg, & svg * {
			fill: #fff;
		}
		&:hover {
			& svg, & svg * {
				fill: ${({ theme }) => theme.active};
			}
		}
	}

	& .logo {
		font-size: 100%;
		text-transform: uppercase;
		letter-spacing: 8px;
		font-weight: 300;
		cursor: pointer;
		margin-right: 16px;
	}

	& .right-nav {
		position: absolute;
		right: 0;
		display: flex;
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

const Nav = ({ tabs, links, tabIndex, setTabIndex }) => (
	<StyledNav>
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
			{links.map((l, i) => (
				<button
					key={i}
					className="link"
					type="button"
					onClick={() => setTabIndex(tabs.length + i)}
				>
					<GitHub />
					{l.name}
				</button>
			))}
		</div>
	</StyledNav >
);

export default Nav;
