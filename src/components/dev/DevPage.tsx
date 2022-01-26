import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";
import Card, { StyledCard } from "../_shared/ui/Card";

const StyledDevPage = styled(StyledPageBody)`
	
    ${StyledCard} {
        margin-top: 16px;
    }

    li {
        padding: 8px;
        font-size: 120%;
    }
`;

const DevPage: React.FC<any> = () => {
    return (
        <StyledDevPage>
            <PageTitle title="Developer Panel" />
            <Card title="Tests" >
                <ul>
                    <li>
                        <Link to='/test'>All Intervals From All Roots</Link>
                    </li>
                </ul>
            </Card>
            <Card title="Experimental Features" >
                <ul>
                    <li>
                        <Link to='/charts'>Chord Charts</Link>
                    </li>
                    <li>
                        <Link to='/practice'>Guitar Practice</Link>
                    </li>
                    <li>
                        <Link to='/theme'>Edit Theme</Link>
                    </li>
                    <li>
                        <Link to='/docs'>Documentation</Link>
                    </li>
                </ul>
            </Card>
        </StyledDevPage >
    )
};

export default DevPage;
