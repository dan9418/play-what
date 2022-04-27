import { Link } from 'gatsby';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled, { useTheme } from 'styled-components';
import { themeState } from '../../state/state';
import THEME, { DARK_THEME } from '../../styles/theme';
import SwitchInput from '../inputs/SwitchInput';
import Icon from '../ui/Icon';

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

		padding: 0 8px;

		&:hover {
			background-color: rgba(255,255,255,0.1);
			color: white;
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

	.night-mode {
		display: flex;
		align-items: center;
	}

	.right {
		display: flex;
		align-items; center;
		gap: 8px;
	}

	.search {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

/// const getLinkProps = id => ({ to: `/${id}`, className: typeof window !== 'undefined' && window.location.pathname.includes(id) ? 'active' : undefined })

const SiteHeader: React.FC = () => {
	const theme = useTheme();
	const setTheme = useSetRecoilState(themeState);
	const [isNightMode, setIsNightMode] = useState(false);

	const onThemeToggle = v => {
		setTheme(isNightMode ? THEME : DARK_THEME);
		setIsNightMode(v);
	}

	return (
		<StyledSiteHeader>
			<div className="width-cap">
				<Link to="/" className="logo">
					Play <em><b>What?</b></em>
				</Link>
				<div className="right">
					<Link to="/search" className="search">
						<Icon iconId='search' />
					</Link>
					<div className="night-mode">
						<SwitchInput value={isNightMode} setValue={onThemeToggle} />
					</div>
				</div>
			</div>
		</StyledSiteHeader>
	);
};

export default SiteHeader;