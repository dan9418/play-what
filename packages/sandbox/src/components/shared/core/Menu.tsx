import React from 'react';
import styled from 'styled-components';
import { PageId, useRouteContext } from '../../../contexts/RouteContext';
import THEME from '../../../styles/theme';
import Icon from '../ui/Icon';

const StyledMenu = styled.div`
    width: 100%;
    max-width: 256px;

    position: fixed;
    z-index: 1999;
    top: 0;
    bottom: 0;
    right: 0;

    background-color: ${THEME.card};
    box-shadow: 0px 0px 16px #aaa;
`;

const Menu: React.FC = () => {

	return (
		<StyledMenu>
			<div>
				<ul className="">
					<li>test</li>
				</ul>

			</div>
		</StyledMenu>
	);
};

export default Menu;
