import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../../../layout/PageBody";
import PageTitle from "../../../layout/PageTitle";
import AllIntervalsFromAllRoots from "../../../tests/AllIntervalsFromAllRoots";

const StyledTestPage = styled(StyledPageBody)`

`;

export const Page: React.FC<any> = () => {
    return (
        <StyledTestPage>
            <PageTitle title="All Intervals From All Roots" subtitle="Test" />
            <AllIntervalsFromAllRoots />
        </StyledTestPage>
    );
};
