import { Link } from 'gatsby';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import Icon from '../ui/Icon';

const StyledSiteFooter = styled.footer`
    min-height: 256px;
	width: 100%;
	white-space: nowrap;
	padding: 32px 16px;
	
	font-size: 70%;
	@media(min-width: 512px) {
		font-size: 80%;
	}

	color: ${({ theme }) => theme.text.inverted};
	background-color: ${({ theme }) => theme.surface.nav};
    box-shadow: 0 2px 10px rgba(0, 0, 0, .3);

	h3 {
		text-transform: uppercase;
		padding-bottom: 8px;
		margin-bottom: 8px;
		//border-bottom: 1px solid ${({ theme }) => theme.utils.border};
	}

	a {
		display: block;
		padding: 8px 0;
		color: ${({ theme }) => theme.text.inverted};

		&.name {
			margin: 32px 0;
			font-size: 120%;
			text-align: center;
		}
	}

	section {
		width: 100%;
		max-width: 160px;
	}

	.nav-links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16px;
		flex-direction: column;
		text-align: center;
		@media(min-width: 512px) {
			align-items: flex-start;
			flex-direction: row;
		}
	}
`;

const SiteFooter: React.FC = () => {
	const theme = useTheme();
	return (
		<StyledSiteFooter className="footer">
			<div className="nav-links">
				<section>
					<h3>Site</h3>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/view'>View</Link>
						</li>
						<li>
							<Link to='/browse'>Browse</Link>
						</li>
						<li>
							<Link to='/search'>Search</Link>
						</li>
					</ul>
				</section>
				<section>
					<h3>Resources</h3>
					<ul>
						<li>
							<Link to='/help'>Help</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/coming-soon'>Coming Soon</Link>
						</li>
						{/*<li>
							<Link to='/coming-soon'>Submit Feedback</Link>
						</li>*/}
						<li>
							<Link to='/dev'>Developer Panel</Link>
						</li>
					</ul>
				</section>
				<section>
					<h3>Contact</h3>
					<ul>
						<li>
							<a href='https://github.com/dan9418/play-what'>
								{false && <Icon iconId="github" color={theme.text.inverted} size={14} />}
								GitHub</a>
						</li>
						<li>
							<a href='https://www.instagram.com/dan.bednarczyk/'>
								{false && <Icon iconId="github" color={theme.text.inverted} size={14} />}
								Instagram</a>
						</li>
						<li>
							<a href='https://danbednarczyk.com'>
								{false && <Icon iconId="github" color={theme.text.inverted} size={14} />}
								Author Website</a>
						</li>
					</ul>
				</section>
			</div>
			<a href="https://danbednarczyk.com" className="name">
				2022 Dan Bednarczyk
			</a>
		</StyledSiteFooter>
	);
};

export default SiteFooter;
