import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../_shared/layout/PageBody";
import AllIntervalsFromAllRoots from "./AllIntervalsFromAllRoots";

const StyledTestPage = styled(StyledPageBody)`
    max-width: unset;
    margin: auto;

    h1, h2 {
        margin: 16px 0;
    }
`;

const TestPage: React.FC<any> = () => {

    return (
        <StyledTestPage>
            <h1>Tests</h1>
            <h2>All Intervals From All Roots</h2>
            <AllIntervalsFromAllRoots />
        </StyledTestPage>
    );
};

export default TestPage;
