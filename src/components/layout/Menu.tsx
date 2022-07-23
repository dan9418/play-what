import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { usePageProps } from '../../contexts/PagePropsContext';

const StyledMenu = styled.div`
    width: 100%;
    @media(min-width: 512px) {
        width: 360px;
    }

    height: 100%;
    background-color:  ${({ theme }) => theme.surface.card};
    border-right: 1px solid ${({ theme }) => theme.utils.border};
    
    position: fixed;
    top: 48px;
    bottom: 0;
    left: 0;
    z-index: 3001;
    padding: 16px 0;

    .active {
        font-weight: bold;
    }

    ul > ul {
        padding-left: 16px;
        font-size: 80%;
    }

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

const getLinkProps = (to: string, currentPath: string) => {
    return {
        to,
        className: to === currentPath ? 'active' : undefined
    }
}

interface ILink {
    path: string;
    name: string;
    children?: ILink[]
}

const LINKS: ILink[] = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/browse',
        name: 'Browse',
        children: [
            {
                path: '/chords',
                name: 'Chords'
            },
            {
                path: '/scales',
                name: 'Scales'
            }
        ]
    },
    {
        path: '/view',
        name: 'Instruments',
        children: [
            {
                path: '/fretboard',
                name: 'Fretboard'
            },
            {
                path: '/keyboard',
                name: 'Keyboard'
            }
        ]
    },
    {
        path: '/search',
        name: 'Search'
    },
    {
        path: '/coming-soon',
        name: 'Coming Soon'
    },
    {
        path: '/about',
        name: 'About'
    }
]

const getMenuItem = (link: ILink, currentPath: string, basePath = '') => {
    const { name, path, children } = link;
    const fullPath = `${basePath}${path}`;
    return (
        <>
            <li key={name}>
                <Link {...getLinkProps(fullPath, currentPath)}>{name}</Link>
            </li>
            {
                children && <ul key={`${name}-children`}>{children.map(c => getMenuItem(c, currentPath, fullPath))}</ul>
            }
        </>
    );
}

const Menu: React.FC<any> = ({ isOpen, setIsOpen, children }) => {
    const { path } = usePageProps();

    if (!isOpen) return null;

    console.log('dpb', path);

    return (
        <>
            <StyledOverlay onClick={() => setIsOpen(false)} />
            <StyledMenu>
                <ul>
                    {
                        LINKS.map(l => getMenuItem(l, path))
                    }
                </ul>
                {children}
            </StyledMenu>
        </>
    );
};

export default Menu;
