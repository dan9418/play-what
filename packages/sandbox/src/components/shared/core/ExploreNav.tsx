import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../ui/Icon';
import Menu from './Menu';


const StyledExploreNav = styled.nav`
    height: 64px;

    position: fixed;
    top: 32px;
    left: 0;
    right: 0;
    z-index: 2000;

	color: white;
	background-color: ${({ theme }) => theme.primaryLight};

	display: flex;
	align-items: center;
	justify-content: flex-end;

	.menu {
		svg, svg * {
			fill: white;
		}
		color: white;
		appearance: none;
		background-color: transparent;
		border: none;
		cursor: pointer;
		height: 64px;
		width: 64px;

		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 8px;

		&:hover {
			background-color: rgba(255, 255, 255, .25);
		}
	}

	.menu.open {
		svg, svg * {
			fill: black;
		}
		background-color: ${({ theme }) => theme.card};
		&:hover {
			background-color: rgba(255, 255, 255, .25);
		}
	}

`;

const ExploreNav: React.FC<any> = ({ setExploreState }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<StyledExploreNav>
				<button type="button" className={`menu ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<Icon iconId="menu" size={32} />
				</button>
			</StyledExploreNav>
			{isMenuOpen && <Menu closeMenu={() => setIsMenuOpen(false)} setExploreState={setExploreState} />}
		</>
	);
};

export default ExploreNav;
