import { Link } from 'gatsby';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import Icon from '../ui/Icon';

const StyledSiteHeader = styled.div`
    height: 64px;
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
		max-width: 1920px;
		margin: auto;
	}
	
	a {
		color: ${({ theme }) => theme.text.inverted};
		text-decoration: none;
		white-space: nowrap;
		height: 64px;
		line-height: 64px;

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
		font-size: 32px;
		text-transform: uppercase;
		letter-spacing: 4px;
		font-weight: 300;
	}

	.links-container {
		display: flex;

		.separator {
			height: 48px;
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
						<Link {...getLinkProps('theme')}>Theme</Link>
						<Link {...getLinkProps('practice')}>Practice</Link>
						{/*<Link {...getLinkProps('docs')}>Docs</Link>
						<Link {...getLinkProps('test')}>Test</Link>*/}
					</div>
					<div className="separator" />
					<div className="icon-links">
						<a href=""><Icon iconId="github" color={theme.text.inverted} size={32} /></a>
					</div>
				</div>
			</div>
		</StyledSiteHeader>
	);
};

export default SiteHeader;
