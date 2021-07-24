import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { intervalsDetailsState, notesDetailsState, rootDetailsState } from '../../../state/state';
import QuickLink from '../../explore/panels/QuickLink';
import Icon from '../ui/Icon';
import Menu from './Menu';
import Model from './Model';

const StyledSeparator = styled.div`
	height: 8px;
	width: 8px;
	border-radius: 8px;
	margin: 0 16px;
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

	.quick-links {
		display: flex;
		align-items: center;
		width: 100%;

		.quick-link {
			appearance: none;
			background-color: transparent;
			border: none;
			cursor: pointer;
			height: 100%;
			padding: 0 16px;

			&:not(:last-child) {
				border-right: 1px solid ${({ theme }) => theme.border};
				margin-right: 16px;
			}
		}
	}

`;

const ExploreNav: React.FC<any> = ({ setExploreState }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// @ts-ignore
	const [rootDetails] = useRecoilState(rootDetailsState);
	// @ts-ignore
	const [intervalsDetails] = useRecoilState(intervalsDetailsState);
	// @ts-ignore
	const [notesDetails] = useRecoilState(notesDetailsState);

	console.log(rootDetails, intervalsDetails, notesDetails);

	return (
		<>
			<StyledExploreNav>
				<div className="quick-links">
					<Model />
					<QuickLink name="Root" preview={rootDetails.name} modal={null} />
					<QuickLink name="Intervals" preview={intervalsDetails.preview} modal={null} />
					<QuickLink name="Viewer" preview={notesDetails.preview} modal={null} />
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
