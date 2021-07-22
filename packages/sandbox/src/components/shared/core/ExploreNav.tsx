import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../ui/Icon';
import Menu from './Menu';


const StyledExploreNav = styled.nav`
    height: 32px;
	padding: 0 16px;

    position: fixed;
    top: 32px;
    left: 0;
    right: 0;
    z-index: 2000;

	color: white;
	background-color: ${({ theme }) => theme.medium};

	display: flex;
	align-items: center;
	justify-content: space-between;

	.menu {
		svg, svg * {
			fill: white;
		}
		color: white;
		appearance: none;
		background-color: transparent;
		border: none;
		cursor: pointer;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 8px;

		&:hover {
			background-color: rgba(255, 255, 255, .25);
		}
	}

`;

const ExploreNav: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<StyledExploreNav>
				Explore
				<button type="button" className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<Icon iconId="menu" />
				</button>
			</StyledExploreNav>
			{isMenuOpen && <Menu />}
		</>
	);
};

export default ExploreNav;
