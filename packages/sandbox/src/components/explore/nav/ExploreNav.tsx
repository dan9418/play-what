import React from 'react';
import styled from 'styled-components';

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

	.import {
		button {
            margin-right: 16px;
            padding: 6p 16px;
            height: 100%;
            font-weight: bold;
			letter-spacing: 1px;
        }
	}
`;

const ExploreNav: React.FC<any> = ({ setExploreState }) => {
	return (
		<StyledExploreNav>
			<div className="main">
				{/*<div className="import">
						<ButtonInput>IMPORT PRESET</ButtonInput>
				</div>*/}
			</div>
		</StyledExploreNav>
	);
};

export default ExploreNav;
