import { Link } from 'gatsby';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import Icon from '../ui/Icon';

const StyledSiteFooter = styled.footer`
    height: 64px;
	width: 100%;
	padding: 0 16px;

	color: ${({ theme }) => theme.text.inverted};
	background-color: ${({ theme }) => theme.surface.nav};
    box-shadow: 0 2px 10px rgba(0, 0, 0, .3);

	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	.nav-links {
		display: flex;
		align-items: center;
	}

	.separator {
		height: 16px;
		width: 1px;
		background-color: ${({ theme }) => theme.text.secondary};
		margin: 8px;
	}
	
	& > div {
		padding: 8px;
	}

	a {
		color: white;
		margin: 4px 8px;
		text-decoration: none;

		svg {
			margin-right: 4px;
		}
	}

`;

const SiteFooter: React.FC = () => {
	const theme = useTheme();
	return (
		<StyledSiteFooter className="footer">
			<div className="nav-links">
				<Link to='/about'>About</Link>
				<Link to='/docs'>Docs</Link>
				<Link to='/theme'>Theme</Link>
				<Link to='/practice'>Practice</Link>
				<div className="separator" />
				<a href="https://github.com/dan9418/play-what">
					<Icon iconId="github" color={theme.text.inverted} size={14} />
					GitHub
				</a>
				<a href="https://danbednarczyk.com">
					Personal Site
				</a>
			</div>
		</StyledSiteFooter>
	);
};

export default SiteFooter;
