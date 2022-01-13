import { navigate } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { useQueryParam } from "use-query-params";
import { StyledPageBody } from "../_shared/layout/PageBody";
import { StyledCard } from "../_shared/ui/Card";
import SearchBar from "./SearchBar";
import { ALL_RESULTS } from "./SearchResults";
import SearchResultsCard from "./SearchResultsCard";

const StyledSearchPage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
	align-items: center;
	//justify-content: center;

    ${StyledCard} {
        max-width: 768px;
    }
`;

const SearchPage: React.FC<any> = () => {

    const [qp] = useQueryParam('query');

    const [query, setQuery] = useState(qp || '');
    const searchRef = useRef();
    const resultsRef = useRef();

    useEffect(() => {
        const ref = qp ? resultsRef : searchRef;
        ref.current && ref.current.focus();
    }, []);

    const onSubmit = e => {
        if (e.preventDefault) e.preventDefault();
        navigate(`/search?query=${e.target.value}`);
        return false;
    }

    const filteredResults = ALL_RESULTS.filter(r => {
        if (!query && !r.isCommon) return false;
        return r.text.match(new RegExp(query as string, 'gi'));
    });

    return (
        <StyledSearchPage>
            <SearchBar searchRef={searchRef} onSubmit={onSubmit} query={query} setQuery={setQuery} />
            <SearchResultsCard resultsRef={resultsRef} resultsData={filteredResults} />
        </StyledSearchPage>
    );
};

export default SearchPage;
