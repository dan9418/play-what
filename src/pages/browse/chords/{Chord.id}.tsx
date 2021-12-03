import { Link } from "gatsby";
import React from 'react';
import styled from 'styled-components';
import { CHORD_PRESETS } from "../../../core/models/PodList/Chord/Chord.constants";

const StyledBreadcrumbList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
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

const Page = props => {
    console.log(props);
    console.log(props.params.id);

    const chord = CHORD_PRESETS.find(c => c.id.toLowerCase() === props.params.id)

    return <>
        <h1>{chord.name}</h1>
        <BreadcrumbList path={props.path} />
    </>;
}

export default Page;
