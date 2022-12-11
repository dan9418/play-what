import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { useQueryParam } from "use-query-params";
import PageLayout from "../layout/PageLayout";
import SearchBar from "../search/SearchBar";
import SearchResultsCard from "../search/SearchResultsCard";
import { StyledCard } from "../ui/Card";

const StyledSearchPage = styled(PageLayout)`
    ${StyledCard} {
        max-width: 768px;
        margin: auto;
    }

    .search-bar {
        margin: 32px auto;
    }
`;

export const Page: React.FC<any> = () => {

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
        <StyledSearchPage title="Search" >
            <SearchBar searchRef={searchRef} query={query} setQuery={setQuery} />
            <SearchResultsCard resultsRef={resultsRef} query={query} />
        </StyledSearchPage>
    );
};
