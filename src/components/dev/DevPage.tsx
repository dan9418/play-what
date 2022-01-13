import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";

const StyledDevPage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
	align-items: center;

    li {
        padding: 8px;
        font-size: 120%;
        text-align: center;
    }
`;

const DevPage: React.FC<any> = () => {
    return (
        <StyledDevPage>
            <PageTitle title="Developer Panel" />
            <ul>
                <li>
                    <Link to='/test'>Code Tests</Link>
                </li>
                <li>
                    <Link to='/theme'>Edit Theme</Link>
                </li>
                <li>
                    <Link to='/docs'>Documentation</Link>
                </li>
                <li>
                    <Link to='/practice'>Guitar Practice</Link>
                </li>
                <li>
                    <Link to='/charts'>Chord Charts</Link>
                </li>
            </ul>
        </StyledDevPage>
    )
};

export default DevPage;
