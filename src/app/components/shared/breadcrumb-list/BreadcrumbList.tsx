import { Link } from "gatsby";
import React from 'react';
import styled from 'styled-components';

const StyledBreadcrumbList = styled.ul`
    display: flex;
    align-items: center;
    //justify-content: center;
    gap: 8px;
`

const BreadcrumbList = ({ path }) => {
    let pieces = path.split('/');
    pieces = pieces.slice(0, pieces.length - 1);
    const paths = [];
    pieces.reduce((prev, cur, i, arr) => {
        const val = prev ? `${prev}/${cur}` : cur;
        paths.push(<li><Link to={`/${val}`}>{cur}</Link></li>);
        return val;
    }, '');
    return <StyledBreadcrumbList>{paths}</StyledBreadcrumbList>;
}

export default BreadcrumbList;
