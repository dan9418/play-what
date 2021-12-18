import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";
import Card, { StyledCard } from "../_shared/ui/Card";

const StyledHomePage = styled(StyledPageBody)`
	width: 100%;
    max-width: 1024px;
    margin: auto;
    
    ${StyledCard} {
        margin-top: 16px;
    }
`;

const IndexPage: React.FC<any> = () => {
    return (
        <StyledHomePage>
            <PageTitle title="Practice" />
            <Card title="CAGED" />
        </StyledHomePage>
    );
};

export default IndexPage;
