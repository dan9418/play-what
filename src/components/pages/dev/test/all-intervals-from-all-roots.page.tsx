import React from "react";
import styled from 'styled-components';
import PageLayout from "../../../layout/PageLayout";
import AllIntervalsFromAllRoots from "../../../tests/AllIntervalsFromAllRoots";
import Card from "../../../ui/Card";

const StyledTestPage = styled(PageLayout)``;

const Page: React.FC = () => {
    return (
        <StyledTestPage title="All Intervals From All Roots" maxWidth="1920px">
            <Card>
                <AllIntervalsFromAllRoots />
            </Card>
        </StyledTestPage>
    );
};

export default Page;
