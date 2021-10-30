import React from 'react';
import styled from 'styled-components';
import { PAGE_CONFIGS, useRouteContext } from '../../contexts/_RouteContext';
import TabList from './tab-list/TabList';

const StyledPageNav = styled.nav`
    height: 48px;
    position: fixed;
    top: 32px;
    left: 0;
    right: 0;
    z-index: 2001;
	background: ${({ theme }) => theme.surface.gradient};
	border-bottom: 1px solid ${({ theme }) => theme.border};

	> ul {
		height: 100%;
		width: 100%;
		max-width: 1024px;
		margin: auto;

		display: flex;
		align-items: center;
	}
`

const PageNav: React.FC = () => {
	const routeContext = useRouteContext();
	return (
		<StyledPageNav>
			<TabList options={
				routeContext ?
					PAGE_CONFIGS.map(config => (
						{
							text: config.name,
							isActive: config.pageId === routeContext.pageId,
							onClick: () => routeContext.setPage(config.pageId)
						}
					))
					: []
			} />
		</StyledPageNav>
	);
};

export default PageNav;
