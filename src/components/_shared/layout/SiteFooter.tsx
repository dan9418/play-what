import { Link } from 'gatsby';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import Icon from '../ui/Icon';

const StyledSiteFooter = styled.footer`
    height: 64px;
	width: 100%;
	font-size: 80%;
	white-space: nowrap;

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
		color: ${({ theme }) => theme.text.inverted};;
		margin: 4px 8px;
		text-decoration: none;

		display: flex;
		align-items: center;

		&:hover {
			color: ${({ theme }) => theme.text.secondary};
		}

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
				{/*<Link to='/about'>About</Link>
				<div className="separator" />*/}
				<Link to='/dev'>Developer Panel</Link>
				<div className="separator" />
				<a href="https://github.com/dan9418/play-what">
					{false && <Icon iconId="github" color={theme.text.inverted} size={14} />}
					GitHub
				</a>
				<div className="separator" />
				<a href="https://danbednarczyk.com">
					2022 Dan Bednarczyk
				</a>
			</div>
		</StyledSiteFooter>
	);
};

export default SiteFooter;
