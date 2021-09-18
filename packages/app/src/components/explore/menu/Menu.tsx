import React, { useState } from 'react';
import styled from 'styled-components';
import THEME from '../../../styles/theme';
import MasterPreview from './MasterPreview';
import MenuButton, { StyledMenuButton } from './MenuButton';
import { Menu } from './Menu';

const StyledMenu = styled.nav`
    position: fixed;
    top: 32px;
    left: 0;
    right: 0;
    z-index: 2000;
    height: 64px;
	@media(min-width: 1024px) {
		height: 128px;
	}

	display: flex;
	justify-content: center;

	& > div {
		width: 100%;
		max-width: 1024px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;

		padding: 0 16px;
		@media(min-width: 1024px) {
			padding: 0;
        }
	}
	
	// background: #F6F7EB;
	background: ${({ theme }) => theme.surface.gradient};
	border-bottom: 1px solid ${({ theme }) => theme.border};

	${StyledMenuButton} {
		position: absolute;
		right: 0;
		top: 0;
		border-left: 1px solid ${({ theme }) => theme.border};

		@media(min-width: 1024px) {
            display: none;
        }
	}

	.menu {
		position: fixed;
		top: 96px;
		right: 0;
		bottom: 0;
		width: 100%;

		background-color: ${THEME.surface.bg};
		width: 100%;
		box-shadow: 0px 0px 16px #aaa;
		overflow-y: auto;

		@media(min-width: 512px) {
			max-width: 384px;
		}
		@media(min-width: 1024px) {
			display: none;
		}
	}
`;

const Menu: React.FC<any> = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeMenu = () => setIsMenuOpen(false);
	return (
		<StyledMenu>
			<div>
				<MasterPreview />
				<Menu setIsMenuOpen={setIsMenuOpen} closeMenu={closeMenu} />
				<MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
				{isMenuOpen &&
					<div className="menu">
						<Menu setIsMenuOpen={setIsMenuOpen} closeMenu={closeMenu} isVertical />
					</div>
				}
			</div>
		</StyledMenu>
	);
};

export default Menu;
