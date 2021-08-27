import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import Icon from '../../shared/ui/Icon';

export const StyledMenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    cursor: pointer;

    height: 64px;
    width: 64px;

    background-color: ${({ theme }) => theme.accent};
    :hover {
        background-color: ${({ theme }) => theme.active};
    }

    svg {
        transition: transform .5s;
    }
`

const MenuButton: React.FC<any> = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <StyledMenuButton type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} >
            <Icon iconId="menu" color="white" size={32} rotate={isMenuOpen ? 90 : 0} />
        </StyledMenuButton >
    );
};

export default MenuButton;
