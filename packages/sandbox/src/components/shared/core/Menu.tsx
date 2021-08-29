import React from 'react';
import styled from 'styled-components';
import THEME from '../../../styles/theme';
import { QuickLinksList } from '../../explore/nav/QuickLink.helpers';

export const StyledMenu = styled.div`
    background-color: ${THEME.card};
    width: 100%;
    box-shadow: 0px 0px 16px #aaa;
    overflow-y: auto;

    @media(min-width: 1024px) {
        display: none;
    }
`;

const Menu: React.FC<any> = ({ closeMenu }) => {

    return (
        <StyledMenu className="menu">

            <QuickLinksList isVertical />
        </StyledMenu>
    );
};

export default Menu;
