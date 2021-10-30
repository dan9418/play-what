import React from "react";
import styled from 'styled-components';
import { IPageProps, useRouteContext } from '../../contexts/RouteContext';

const StyledDocsPage = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

    p {
        padding: 32px 16px;
    }
`;

const DocsPage: React.FC<IPageProps> = () => {
    const routeContext = useRouteContext();
    return (
        <StyledDocsPage>
            <p>
                <em>Coming soon!</em>
            </p>
        </StyledDocsPage>
    )
};

export default DocsPage;
