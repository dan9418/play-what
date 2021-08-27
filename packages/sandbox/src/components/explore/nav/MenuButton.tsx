import React from 'react';
import styled, { css } from 'styled-components';
import THEME from '../../../styles/theme';
import Icon from '../../shared/ui/Icon';

export const StyledMenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    cursor: pointer;

    height: 64px;
    width: 64px;

    background-color: ${props => props.$isMenuOpen ? '#f5f5f5' : 'rgba(0,0,0,0.05)'};
    :hover {
        background-color: ${THEME.accent};
        svg, svg * {
            fill: white;
        }
    }

    svg {
        transition: transform .5s;
    }
`

const MenuButton: React.FC<any> = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <StyledMenuButton
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            $isMenuOpen={isMenuOpen}
        >
            <Icon
                iconId={isMenuOpen ? "close" : "menu"}
                color={isMenuOpen ? THEME.accent : THEME.primary}
                size={24}
            />
        </StyledMenuButton >
    );
};

export default MenuButton;
