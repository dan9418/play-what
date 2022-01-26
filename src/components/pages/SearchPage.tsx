import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { useQueryParam } from "use-query-params";
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";
import { StyledCard } from "../_shared/ui/Card";
import SearchBar from "../search/SearchBar";
import SearchResultsCard from "../search/SearchResultsCard";

const StyledSearchPage = styled(StyledPageBody)`
    ${StyledCard} {
        max-width: 768px;
        margin: auto;
    }

    .search-bar {
        margin: 32px auto;
    }
`;

const SearchPage: React.FC<any> = () => {

    const [qp] = useQueryParam('query');

    const [query, setQuery] = useState(qp || '');
    const searchRef = useRef();
    const resultsRef = useRef();

    useEffect(() => {
        const ref = qp ? resultsRef : searchRef;
        const cur = ref.current as any;
        cur && cur.focus();
    }, []);

    return (
        <StyledSearchPage>
            <PageTitle title="Search" />
            <SearchBar searchRef={searchRef} query={query} setQuery={setQuery} />
            <SearchResultsCard resultsRef={resultsRef} query={query} />
        </StyledSearchPage>
    );
};

export default SearchPage;
