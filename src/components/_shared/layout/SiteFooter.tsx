import React from 'react';
import styled from 'styled-components';

const StyledSiteFooter = styled.div`
    height: 64px;
	width: 100%;
	padding: 0 16px;

	color: ${({ theme }) => theme.white};
	background-color: ${({ theme }) => theme.brand.dark};
    box-shadow: 0 2px 10px rgba(0, 0, 0, .3);

	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	
	& > div {
		padding: 8px;
	}

`;

const SiteFooter: React.FC = () => {
	return (
		<StyledSiteFooter className="footer">
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
