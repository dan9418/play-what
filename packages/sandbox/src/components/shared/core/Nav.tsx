import React from 'react';
import styled from 'styled-components';

interface INavLink {
	text: string;
	href: string;
}

const NAV_LINKS: INavLink[] = [
	{
		text: 'Home',
		href: '/'
	},
	{
		text: 'Docs',
		href: 'https://github.com/dan9418/play-what/blob/master/README.md'
	},
	{
		text: 'Code',
		href: 'https://github.com/dan9418/play-what/'
	}
];

const StyledNav = styled.nav`
    height: 32px;
	padding: 0 16px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;

	color: white;
	background-color: ${({ theme }) => theme.primary};
    box-shadow: 0 2px 10px rgba(0, 0, 0, .3);
	
	> div {
		height: 100%;
		width: 100%;
		// max-width: 1024px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.logo {
			color: white;
			appearance: none;
			background-color: transparent;
			border: none;
			font-size: 90%;
			text-transform: uppercase;
			letter-spacing: 4px;
			font-weight: 300;
			cursor: pointer;
			height: 100%;
			white-space: nowrap;

			&:hover {
				color: ${({ theme }) => theme.active};
			}
		}
		
		.link-list {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			height: 100%;
			width: 100%;

			list-style-type: none;

			> li > a, button {
				display: inline-block;
				height: 100%;
				cursor: pointer;
				display: flex;
				align-items: center;
				color: white;
				text-decoration: none;
				padding: 0 8px;
				background-color: transparent;
				border: none;
				font-size: 80%;
				font-weight: normal;

				&:hover {
					color: ${({ theme }) => theme.active};
				}
			}
		}
	}
`;

const Nav: React.FC = () => {
	return (
		<StyledNav>
			<div>
				<button type="button" className="logo">
					Play <em><b>What?</b></em>
				</button>
				<ul className="link-list">
					{NAV_LINKS.map((l, i) => (
						<li key={i}>
							{
								l.href ?
									<a href={l.href} target="_blank" rel="noreferrer">{l.text}</a>
									:
									<button type="button">{l.text}</button>
							}
						</li>
					))}
				</ul>
			</div>
		</StyledNav>
	);
};

export default Nav;
