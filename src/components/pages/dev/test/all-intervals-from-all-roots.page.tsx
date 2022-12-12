import React from "react";
import styled from 'styled-components';
import PageLayout from "../../../layout/PageLayout";
import AllIntervalsFromAllRoots from "../../../tests/AllIntervalsFromAllRoots";

const StyledTestPage = styled(PageLayout)`

`;

const Page: React.FC<any> = () => {
    return (
        <StyledTestPage title="All Intervals From All Roots" subtitle="Test" >
            <AllIntervalsFromAllRoots />
        </StyledTestPage>
    );
};

export default Page;
