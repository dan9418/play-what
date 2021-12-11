import { Link } from "gatsby";
import React, { useState } from "react";
import styled from 'styled-components';
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import FilterList from "../../_shared/inputs/FilterList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import Card from "../../_shared/ui/Card";
import SearchTable, { ISearchTableProps } from "./SearchTable";

const StyledSearchPage = styled(StyledPageBody)`
    width: 100%;
    max-width: 1024px;
    margin: auto;

    .grid {
        margin-top: 16px;
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media(min-width: 512px) {
            grid-template-columns: 3fr 2fr;
        }
    }
`;

interface ISearchPageProps extends ISearchTableProps {
    path?: string;
    tag: any;
    title: string;
    subtitle: string;
}

const SearchPage: React.FC<ISearchPageProps> = ({ path, tag, title, subtitle, rows, headers, getCols }) => {

    const [selectedTags, setSelectedTags] = useState([]);

    const tags = Object.values(tag)
    return (
        <StyledSearchPage>
            <BreadcrumbList id={title.toLowerCase()} name={title} path={path} />
            <PageTitle title={title} subtitle={subtitle} />
            <div className="grid">
                <div>
                    <Card >
                        <FilterList tags={tags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
                        <SearchTable headers={headers} rows={rows} getCols={getCols} selectedTags={selectedTags} />
                    </Card>
                </div>
                <div>
                    <Card title="Reference">
                        <Link to="">Example 1</Link>
                        <Link to="">Example 2</Link>
                        <Link to="">Example 3</Link>
                    </Card>
                </div>
            </div>
        </StyledSearchPage>
    );
};

export default SearchPage;
