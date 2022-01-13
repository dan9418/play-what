import { Link } from "gatsby";
import React from 'react';
import styled from 'styled-components';
import Icon from "../ui/Icon";

const StyledBreadcrumbList = styled.ul`
    font-size: 80%;
    padding: 0 0 8px 0;
    @media(min-width: 512px) {
        font-size: 110%;
        padding: 0 0 16px 0;
    }

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    text-transform: capitalize;
    svg {
        margin-right: 8px;
    }
`

const BreadcrumbList = ({ path }) => {
    let pieces = path.split('/');
    pieces = pieces.slice(0, pieces.length - 1).filter(p => !['root'].includes(p));
    const paths = [];
    pieces.reduce((prev, cur, i, arr) => {
        const path = `${prev}/${cur}`.replace('//', '/');
        paths.push(
            <li key={i}>
                {i > 0 && <Icon iconId="next" size={10} color="grey" />}
                <Link to={path || '/'}>{i === 0 ? 'Home' : cur.replaceAll('-', ' ')}</Link>
            </li>
        );
        return path;
    }, '/');
    return <StyledBreadcrumbList>{paths}</StyledBreadcrumbList>;
}

export default BreadcrumbList;
