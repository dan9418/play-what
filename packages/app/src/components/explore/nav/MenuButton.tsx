import React from 'react';
import styled from 'styled-components';
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
    z-index: 1;

    background-color: ${props => props.$isMenuOpen ? props.theme.surface.bg : props.theme.surface.highlight};
    border-bottom: ${props => props.$isMenuOpen ? 0 : `1px solid ${props.theme.border};`};
    :hover {
        background-color: ${THEME.clickable};
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
                color={isMenuOpen ? THEME.clickable : THEME.text.medium}
                size={24}
            />
        </StyledMenuButton >
    );
};

export default MenuButton;
