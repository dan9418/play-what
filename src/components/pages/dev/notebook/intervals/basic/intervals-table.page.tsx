import React from "react";
import styled from 'styled-components';
import PageLayout from "../../../../../layout/PageLayout";
import Card from "../../../../../ui/Card";
import { IntervalsTable } from "../IntervalsTable";

const StyledExtensionsPage = styled(PageLayout)`

`;

const Page: React.FC<any> = () => {
    return (
        <StyledExtensionsPage title="Intervals Table">
            <Card>
                <IntervalsTable />
            </Card>
        </StyledExtensionsPage>
    )
};

export default Page;
