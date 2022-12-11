import React from "react";
import styled from 'styled-components';
import PageLayout from "../../../layout/PageLayout";
import Card, { StyledCard } from "../../../ui/Card";
import { List } from "../../../ui/List";
import { LINK_PREFIX, LISTS } from "./notebook.data";

const StyledNotebookPage = styled(PageLayout)`
    ${StyledCard} {
        margin-top: 16px;
        font-size: 120%;
    }
`;

export const Page: React.FC = () => {
    return (
        <StyledNotebookPage title="Music Notebook" subtitle="A work in progress" >
            <Card title="Pages" >
                <List lists={LISTS} prefix={LINK_PREFIX} level={1} />
            </Card>
        </StyledNotebookPage >
    );
};
