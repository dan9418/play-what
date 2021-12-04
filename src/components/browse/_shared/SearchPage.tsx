import React from "react";
import styled from 'styled-components';
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import FilterList from "../../_shared/inputs/FilterList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import SearchTable, { ISearchTableProps } from "./SearchTable";

const StyledSearchPage = styled(StyledPageBody)`
    
`;

interface ISearchPageProps extends ISearchTableProps {
    path?: string;
    tag: any;
    title: string;
    subtitle: string;
}

const SearchPage: React.FC<ISearchPageProps> = ({ path, tag, title, subtitle, rows, headers, getCols }) => {
    return (
        <StyledSearchPage>
            <BreadcrumbList path={path} />
            <PageTitle title={title} subtitle={subtitle} />

            <FilterList tag={tag} />
            <SearchTable headers={headers} rows={rows} getCols={getCols} />
        </StyledSearchPage>
    );
};

export default SearchPage;
