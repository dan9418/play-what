import { Link } from "gatsby";
import React from 'react';
import styled from 'styled-components';
import Icon from "../ui/Icon";

const StyledBreadcrumbList = styled.ul`
    font-size: 110%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    padding: 16px 0;
    white-space: nowrap;
    text-transform: uppercase;
    svg {
        margin-right: 8px;
    }
`

const BreadcrumbList = ({ id, name, path }) => {
    let pieces = path.split('/');
    pieces = pieces.slice(0, pieces.length - 1);
    const paths = [
        <li key="0">
            <Link to={`/`}>Home</Link>
        </li>
    ];
    pieces.reduce((prev, cur, i, arr) => {
        const val = prev ? `${prev}/${cur}` : cur;
        paths.push(
            <li key={i}>
                {i > 0 && <Icon iconId="next" size={10} color="grey" />}
                <Link to={`/${val}`}>{cur}</Link>
            </li>
        );
        return val;
    }, '');
    return <StyledBreadcrumbList>{paths}</StyledBreadcrumbList>;
}

export default BreadcrumbList;
