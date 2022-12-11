import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { usePageProps } from "../../contexts/PagePropsContext";
import Icon from "../ui/Icon";

const StyledBreadcrumbList = styled.ul`
    font-size: 80%;
    padding: 8px;
    @media(min-width: 512px) {
        font-size: 110%;
        padding: 16px;
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

    span {
        color: ${props => props.theme.text.secondary};
    }
`

const BreadcrumbList = () => {
    const { path } = usePageProps();
    let pieces = path.split('/');
    const paths: any[] = [];
    pieces.reduce((prev, cur, i, arr) => {
        const path = `${prev}/${cur}`.replace('//', '/') || '/';
        const isLink = !['root', 'test', 'experimental'].includes(cur);
        const text = i === 0 ? 'Home' : cur.replaceAll('-', ' ').replace(' sharp', '#').replace(' flat', 'b');

        const Tag = isLink ? Link : 'span';
        const to: any = isLink ? path : undefined;

        paths.push(
            <li key={i}>
                {i > 0 && <Icon iconId="next" size={10} color="grey" />}
                <Tag to={to}>{text}</Tag>
            </li>
        );
        return path;
    }, '/');
    return <StyledBreadcrumbList>{paths.slice(0, paths.length - 1)}</StyledBreadcrumbList>;
}

export default BreadcrumbList;
