import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { useQueryParam } from "use-query-params";
import PageLayout from "../../components/layout/PageLayout";
import SearchBar from "./SearchBar";
import SearchResultsCard from "./SearchResultsCard";

const StyledSearchPage = styled(PageLayout)`
    .search-bar {
        margin: 32px auto;
    }
`;

const Page: React.FC<any> = () => {

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

export default Page;
