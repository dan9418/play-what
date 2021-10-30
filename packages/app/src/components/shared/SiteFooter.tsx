import React from 'react';
import styled from 'styled-components';

const StyledSiteFooter = styled.div`
    height: 126px;
	padding: 16px;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2000;

	color: white;
	background-color: ${({ theme }) => theme.surface.nav};
    box-shadow: 0 2px 10px rgba(0, 0, 0, .3);
`;

const SiteFooter: React.FC = () => {
	return (
		<StyledSiteFooter>
			<div>
				GitHub
			</div>
			<div>
				Personal Website
			</div>
			<div>
				Creative Portfolio
			</div>
			<div>
				Instagram
			</div>
		</StyledSiteFooter>
	);
};

export default SiteFooter;
