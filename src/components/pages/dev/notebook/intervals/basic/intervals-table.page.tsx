import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../../../../../layout/PageBody";
import PageTitle from "../../../../../layout/PageTitle";
import Card from "../../../../../ui/Card";
import { IntervalsTable } from "../IntervalsTable";

const StyledExtensionsPage = styled(StyledPageBody)`

`;

export const Page: React.FC<any> = () => {
    return (
        <StyledExtensionsPage>
            <PageTitle title="Intervals Table" />
            <Card>
                <IntervalsTable />
            </Card>
        </StyledExtensionsPage>
    )
};
