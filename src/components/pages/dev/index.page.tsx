import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../../layout/PageBody";
import PageTitle from "../../layout/PageTitle";
import Card, { StyledCard } from "../../ui/Card";

const StyledDevPage = styled(StyledPageBody)`
	
    ${StyledCard} {
        margin-top: 16px;
         li {
            padding: 8px;
            font-size: 120%;
        }
    }
`;

export const Page: React.FC<any> = () => {
    return (
        <StyledDevPage>
            <PageTitle title="Developer Panel" subtitle="Advanced Users Only" />
            <Card title="Tests" >
                <ul>
                    <li>
                        <Link to='/dev/test/all-intervals-from-all-roots'>All Intervals From All Roots</Link>
                    </li>
                </ul>
            </Card>
            <Card title="Experimental Features" >
                <ul>
                    <li>
                        <Link to='/dev/notebook'>Notebook</Link>
                    </li>
                    <li>
                        <Link to='/dev/experimental/theme'>Edit Theme</Link>
                    </li>
                </ul>
            </Card>
        </StyledDevPage >
    )
};
