import { Link } from "gatsby";
import React from 'react';
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { historyState, useHistory } from "../../../state/state";
import Icon from "../ui/Icon";

const StyledBreadcrumbList = styled.ul`
    font-size: 110%;
    display: flex;
    align-items: center;
    //justify-content: center;
    gap: 8px;
    padding: 16px 0;
    svg {
        margin-right: 8px;
    }
`

const BreadcrumbList = ({ id, name, path }) => {

    const [history, popAt] = useHistory(id, name, path);

    const links = history.map((entry, i) => {
        return (
            <li key={entry.id}>
                {i > 0 && <Icon iconId="next" size={10} color="grey" />}
                <Link to={entry.path} onClick={() => popAt(i)}>{entry.name}</Link>
            </li>
        );
    });
    return <StyledBreadcrumbList>{links}</StyledBreadcrumbList>;
}

export default BreadcrumbList;
