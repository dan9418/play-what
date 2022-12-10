import { Link } from "gatsby";
import React, { ReactNode } from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../../../layout/PageBody";
import PageTitle from "../../../layout/PageTitle";
import Card, { CardHeader, StyledCard } from "../../../ui/Card";
import { List } from "../../../ui/List";
import { LINK_PREFIX, LISTS } from "./notebook.data";

const StyledNotebookPage = styled(StyledPageBody)`
    ${StyledCard} {
        margin-top: 16px;
        font-size: 120%;
    }
`;

export const Page : React.FC = () => {
    return (
        <StyledNotebookPage>
            <PageTitle title="Music Notebook" subtitle="A work in progress" />
            <Card title="Pages" >
                <List lists={LISTS} prefix={LINK_PREFIX} level={1} />
            </Card>
        </StyledNotebookPage >
    );
};
