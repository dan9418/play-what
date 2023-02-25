import React from "react";
import styled from 'styled-components';
import PageLayout from "../../../layout/PageLayout";
import Card, { StyledCard } from "../../../ui/Card";
import { List } from "../../../ui/List";
import { LIST_STYLES_1 } from "../../../ui/List.styles";
import { LINK_PREFIX, LISTS } from "./notebook.data";

const StyledNotebookPage = styled(PageLayout)``;

const Page: React.FC = () => {
    return (
        <StyledNotebookPage title="Music Notebook" subtitle="Table of Contents" >
            <Card>
                <List lists={LISTS} prefix={LINK_PREFIX} styles={LIST_STYLES_1} />
            </Card>
        </StyledNotebookPage >
    );
};

export default Page;
