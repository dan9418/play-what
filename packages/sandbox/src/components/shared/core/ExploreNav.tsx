import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../ui/Icon';
import ButtonInput from '../ui/inputs/buttons/ButtonInput';
import Menu from './Menu';
import Model from './Model';

const StyledSeparator = styled.div`
    margin: 0 16px;
	height: 48px;
	width: 1px;
	background-color: ${({ theme }) => theme.border};
`

const StyledExploreNav = styled.nav`
    height: 64px;

    position: fixed;
    top: 32px;
    left: 0;
    right: 0;
    z-index: 2000;

	//background-color: ${({ theme }) => theme.primaryLight};
	background: linear-gradient(180deg, rgba(229,232,232,1) 0%, rgba(239,242,242,1) 31%, rgba(229,232,232,1) 100%);	
	border-bottom: 1px solid ${({ theme }) => theme.border};

	display: flex;
	align-items: center;
	justify-content: space-between;

	.menu {
		svg, svg * {
			fill: black;
		}
		color: black;
		appearance: none;
		background-color: transparent;
		border: none;
		cursor: pointer;
		height: 100%;
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
			fill: white;
		}
		background-color: ${({ theme }) => theme.accent};
	}

	.main {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.quick-links {
		display: flex;
		align-items: center;

		.quick-link {
			appearance: none;
			background-color: transparent;
			border: none;
			cursor: pointer;
			height: 100%;
			padding: 0 8px;

			&:not(:last-child) {
				border-right: 1px solid ${({ theme }) => theme.border};
				margin-right: 16px;
			}
		}
	}

	.import-export {
        display: grid;
        grid-template-columns: 64px;
		//margin-right: 16px;
		padding-right: 16px;
		border-right: 1px solid ${({ theme }) => theme.border};
        button {
            margin: 2px 0;
            padding: 0 4px;
            height: 20px;
            font-weight: bold;
            font-size: 70%;
        }
    }

`;

const ExploreNav: React.FC<any> = ({ setExploreState }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<StyledExploreNav>
				<div className="main">
					<Model />
					<div className="import-export">
						<ButtonInput>IMPORT</ButtonInput>
						<ButtonInput>EXPORT</ButtonInput>
					</div>
				</div>
				<button type="button" className={`menu ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<Icon iconId="menu" size={32} />
				</button>
			</StyledExploreNav>
			{isMenuOpen && <Menu closeMenu={() => setIsMenuOpen(false)} setExploreState={setExploreState} />}
		</>
	);
};

export default ExploreNav;
