import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Card from "../_shared/ui/Card";

const StyledSearchResultsList = styled.ul` 
    font-size: 110%;
    li a {
        padding: 4px 0;
        display: block;

        &:focus, &:hover {
            padding: 8px;
            background-color: ${props => props.theme.action.interactive};
            color: white;
            border-radius: 8px;
        }
    }
`;

const SearchResultsCard: React.FC<any> = ({ resultsRef, resultsData, isDefault }) => {
    return (
        <Card title={isDefault ? 'Popular Pages' : 'Results'}>
            <StyledSearchResultsList>
                {resultsData.map((r, i) => <li key={r.to}>
                    <Link to={r.to}
                        ref={i === 0 ? resultsRef : undefined}
                    >{r.text}</Link>
                </li>)}
            </StyledSearchResultsList>
        </Card>
    );
};

export default SearchResultsCard;
