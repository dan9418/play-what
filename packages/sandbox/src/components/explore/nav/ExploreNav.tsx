import React from 'react';
import styled from 'styled-components';
import ActionBox from './ActionBox';
import { StyledSeparator } from './ExploreNav.shared';
import MasterPreview from './MasterPreview';

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
	justify-content: space-between;

	padding: 8px 8px;
`;

const ExploreNav: React.FC<any> = ({ setExploreState }) => {
	return (
		<StyledExploreNav>
			<MasterPreview />
			<ActionBox />
			<StyledSeparator />
			{/*<QuickLinkContainer />*/}
			{/*<div className="import">
						<ButtonInput>IMPORT PRESET</ButtonInput>
				</div>*/}
		</StyledExploreNav>
	);
};

export default ExploreNav;
