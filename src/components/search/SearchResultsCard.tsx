import { Link, navigate } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Card from "../_shared/ui/Card";
import { ALL_RESULTS } from "./SearchResults";

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

const SearchResultsCard: React.FC<any> = ({ resultsRef, query }) => {

    const filteredResults = ALL_RESULTS.filter(r => {
        if (!query && !r.isCommon) return false;
        return r.text.match(new RegExp(query as string, 'gi'));
    });

    return (
        <Card title={!query ? 'Popular Pages' : 'Results'}>
            <StyledSearchResultsList>
                {filteredResults.map((r, i) => <li key={r.to}>
                    <Link
                        id={`search-result=${i}`}
                        to={r.to}
                        ref={i === 0 ? resultsRef : undefined}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                navigate(r.to);
                            }
                            if (e.key === 'ArrowDown') {
                                const next = document.getElementById(`search-result=${i + 1}`);
                                if (next) next.focus();
                            }
                            if (e.key === 'ArrowUp') {
                                const prev = document.getElementById(`search-result=${i - 1}`);
                                if (prev) prev.focus();
                            }
                        }}
                    >
                        {r.text}
                    </Link>
                </li>)}
            </StyledSearchResultsList>
        </Card>
    );
};

export default SearchResultsCard;
