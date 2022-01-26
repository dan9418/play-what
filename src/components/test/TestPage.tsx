import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";
import AllIntervalsFromAllRoots from "./AllIntervalsFromAllRoots";

const StyledTestPage = styled(StyledPageBody)`

`;

const TestPage: React.FC<any> = () => {

    return (
        <StyledTestPage>
            <PageTitle title="All Intervals From All Roots" subtitle="Test" />
            <AllIntervalsFromAllRoots />
        </StyledTestPage>
    );
};

export default TestPage;
