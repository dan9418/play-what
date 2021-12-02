import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../shared/PageBody";
import PageTitle from "../shared/PageTitle";

const StyledDocsPage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

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
