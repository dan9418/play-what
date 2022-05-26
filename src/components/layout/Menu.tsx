import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
    width: 360px;
    height: 100%;
    background-color:  ${({ theme }) => theme.surface.card};
    border-right: 1px solid ${({ theme }) => theme.utils.border};
    
    position: fixed;
    top: 48px;
    bottom: 0;
    left: 0;
    z-index: 3001;

    padding: 16px 0;

    a {
        font-size: 120%;
        display: block;
        padding: 8px 16px;
    }
`

const StyledOverlay = styled.div`
    //width: 100vw;
    //height: 100vw;
    opacity: 0.3;
    background-color: black;
    position: fixed;
    top: 48px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3000;
`

const Menu: React.FC<any> = ({ isOpen, setIsOpen, children }) => {
    if (!isOpen) return null;

    return (
        <>
            <StyledOverlay onClick={() => setIsOpen(false)} />
            <StyledMenu>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/browse'>Browse</Link>
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                    <li>
                        <Link to='/view'>Instruments</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/dev'>Developer Panel</Link>
                    </li>
                </ul>
                {children}
            </StyledMenu>
        </>
    );
};

export default Menu;
