import React from "react";
import styled from 'styled-components';
import PageTitle from "../../../../../layout/PageTitle";
import Card from "../../../../../ui/Card";
import { IntervalsTable } from "../IntervalsTable";

const StyledExtensionsPage = styled(PageTitle)`

`;

export const Page: React.FC<any> = () => {
    return (
        <StyledExtensionsPage title="Intervals Table">
            <Card>
                <IntervalsTable />
            </Card>
        </StyledExtensionsPage>
    )
};
