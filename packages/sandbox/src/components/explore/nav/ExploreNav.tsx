import React from 'react';
import styled from 'styled-components';
import ButtonInput from '../../shared/inputs/ButtonInput';
import ActionBox from './ActionBox';
import { StyledSeparator } from './ExploreNav.shared';
import MenuButton, { StyledMenuButton } from './MenuButton';
import PresetButton, { StyledPresetButton } from './PresetButton';
import { IntervalsQuickLink, NotesQuickLink, RootQuickLink, ViewerQuickLink } from './QuickLink.helpers';

const StyledExploreNav = styled.nav`
    position: fixed;
    top: 32px;
    left: 0;
    right: 0;
    z-index: 2000;
    height: 64px;

	background: linear-gradient(180deg, rgba(229,232,232,1) 0%, rgba(239,242,242,1) 31%, rgba(229,232,232,1) 100%);	
	border-bottom: 1px solid ${({ theme }) => theme.border};

	display: flex;
	align-items: center;
	justify-content: flex-start;

	${StyledMenuButton} {
		position: absolute;
		right: 0;
		top: 0;
		border-left: 1px solid ${({ theme }) => theme.border};
	}
`;

const ExploreNav: React.FC<any> = ({ isMenuOpen, setIsMenuOpen }) => {
	return (
		<StyledExploreNav>
			<RootQuickLink />
			<StyledSeparator />
			<IntervalsQuickLink />
			<StyledSeparator />
			<ViewerQuickLink />
			<StyledSeparator />
			<ActionBox />

			<MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
		</StyledExploreNav>
	);
};

export default ExploreNav;
