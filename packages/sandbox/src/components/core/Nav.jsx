
import React from 'react';
import 'react-hot-loader';
import styled from 'styled-components';

const LINKS = [
	{
		id: 'about',
		name: 'About',
		href: 'https://github.com/dan9418/play-what/'
	},
	{
		id: 'docs',
		name: 'Docs',
		href: 'https://github.com/dan9418/play-what/'
	},
	{
		id: 'source',
		name: 'Source',
		href: 'https://github.com/dan9418/play-what/'
	}
];

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

	.logo {
		font-size: 100%;
		text-transform: uppercase;
		letter-spacing: 8px;
		font-weight: 300;
		cursor: pointer;
		margin-right: 16px;
		white-space: nowrap;
	}
	
	.link-list {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;

		list-style-type: none;

		a {
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
		}
	}
`;

const Nav = () => {


	return (
		<StyledNav>
			<div className="logo" onClick={null}>Play What?</div>
			<ul className="link-list">
				{LINKS.map((l, i) => (
					<li key={i}>
						<a href={l.href}>{l.name}</a>
					</li>
				))}
			</ul>
		</StyledNav >
	);
};

export default Nav;
