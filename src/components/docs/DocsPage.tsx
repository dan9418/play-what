import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";

const StyledDocsPage = styled(StyledPageBody)`
    p {
        padding: 32px 16px;
    }
`;

const DocsPage: React.FC<any> = () => {
    return (
        <StyledDocsPage>
            <PageTitle title="Documentation" />
            <p>
                <em>Coming soon!</em>
            </p>
        </StyledDocsPage>
    )
};

export default DocsPage;
