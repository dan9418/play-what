import { Link } from 'gatsby';
import React from 'react';
import styled, { useTheme } from 'styled-components';

const StyledSiteHeader = styled.div`
    height: 32px;
	padding: 0 16px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;

	background-color: ${({ theme }) => theme.surface.nav};
    box-shadow: 0 2px 10px rgba(0, 0, 0, .3);

	.width-cap {
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 1024px;
		margin: auto;
	}
	
	a {
		color: ${({ theme }) => theme.text.inverted};
		text-decoration: none;
		white-space: nowrap;
		height: 32px;
		line-height: 32px;

		//display: flex;
		//align-items: center;

		padding: 0 8px;

		&:hover {
			background-color: ${({ theme }) => theme.utils.hoverLight};
		}

		&.active {
			border-bottom: 2px solid ${props => props.theme.action.active};
		}
	}

	.logo {
		font-size: 16px;
		text-transform: uppercase;
		letter-spacing: 4px;
		font-weight: 300;
	}

	.links-container {
		display: flex;

		.separator {
			height: 24px;
			width: 1px;
			background-color: ${({ theme }) => theme.text.secondary};
			margin: 8px;
		}
	}

	.nav-links {
		display: flex;
		align-items: center;
	}

	.icon-links {
		display: flex;
		align-items: center;

		a {
			display: flex;
			align-items: center;
		}
	}
`;

const getLinkProps = id => ({ to: `/${id}`, className: typeof window !== 'undefined' && window.location.pathname.includes(id) ? 'active' : undefined })

const SiteHeader: React.FC = () => {
	const theme = useTheme();
	return (
		<StyledSiteHeader>
			<div className="width-cap">
				<Link to="/" className="logo">
					Play <em><b>What?</b></em>
				</Link>
				<div className="links-container">
					<div className="nav-links">
						<Link {...getLinkProps('browse')}>Browse</Link>
					</div>
				</div>
			</div>
		</StyledSiteHeader>
	);
};

export default SiteHeader;
