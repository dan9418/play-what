import React from 'react';
import styled from 'styled-components';

const StyledSiteHeader = styled.div`
    height: 32px;
	padding: 0 16px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;

	color: white;
	background-color: ${({ theme }) => theme.surface.nav};
    box-shadow: 0 2px 10px rgba(0, 0, 0, .3);
	
	> div {
		height: 100%;
		width: 100%;
		max-width: 1024px;
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
			height: 100%;
			white-space: nowrap;
		}
	}
`;

const SiteHeader: React.FC = () => {
	return (
		<StyledSiteHeader>
			<div>
				<button type="button" className="logo">
					Play <em><b>What?</b></em>
				</button>
			</div>
		</StyledSiteHeader>
	);
};

export default SiteHeader;
