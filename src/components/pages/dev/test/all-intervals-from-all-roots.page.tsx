import React from "react";
import styled from 'styled-components';
import PageTitle from "../../../layout/PageTitle";
import AllIntervalsFromAllRoots from "../../../tests/AllIntervalsFromAllRoots";

const StyledTestPage = styled(PageTitle)`

`;

export const Page: React.FC<any> = () => {
    return (
        <StyledTestPage title="All Intervals From All Roots" subtitle="Test" >
            <AllIntervalsFromAllRoots />
        </StyledTestPage>
    );
};
