import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";

const StyledDevPage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const DevPage: React.FC<any> = () => {
    return (
        <StyledDevPage>
            <PageTitle title="Developer Panel" />
            <ul>
                <li>
                    <Link to='/theme'>Theme</Link>
                </li>
                <li>
                    <Link to='/docs'>Docs</Link>
                </li>
                <li>
                    <Link to='/practice'>Practice</Link>
                </li>
            </ul>
        </StyledDevPage>
    )
};

export default DevPage;
