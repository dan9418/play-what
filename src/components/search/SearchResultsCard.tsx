import { Link, navigate } from "gatsby";
import React, { useState } from "react";
import styled, { css } from 'styled-components';
import ArrayUtils from "../../core/general/Array.utils";
import ButtonInput from "../_shared/inputs/ButtonInput";
import FilterList from "../_shared/inputs/FilterList";
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

const doTagsMatch = (selectedTags, r) => {
    if (!selectedTags.length) return true;

    return !selectedTags.some(t => {
        return !r.tags.includes(t);
    });
}

const doesQueryMatch = (query = '', r) => {
    return r.text.match(new RegExp(query, 'gi'));
    const pieces = query.split(' ');
    return pieces.some(p => r.text.match(new RegExp(p, 'gi')));
}

const SearchResultsCard: React.FC<any> = ({ resultsRef, query }) => {

    const [isFiltering, setIsFiltering] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);

    const action = <ButtonInput
        className={`filter ${isFiltering ? 'active' : ''}`}
        onClick={() => setIsFiltering(!isFiltering)}
        css={css`
            color: ${props => props.theme.action.interactive};
            background-color: transparent;
            text-decoration: underline;
            &.active {
                color: white;
                background-color: ${props => props.theme.action.interactive};
            }
        `}
    >
        Filter
    </ButtonInput>;

    let filteredResults = query ?
        ALL_RESULTS.filter(r => {
            return doesQueryMatch(query, r) && doTagsMatch(selectedTags, r);
        })
        :
        ALL_RESULTS.filter(r => {
            return r.isCommon && doTagsMatch(selectedTags, r);
        });

    const tagSet = new Set();
    filteredResults.forEach(r => {
        console.log('dpb', r.tags);
        r.tags.forEach(t => tagSet.add(t));
    });
    const tags = ArrayUtils.setToArray(tagSet) || [];
    console.log('dpb', tagSet, tags);

    return (
        <Card title={!query ? 'Popular Pages' : 'Results'} action={action}>
            {isFiltering && <FilterList
                tags={tags}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
            />}
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
