import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../../layout/PageBody";
import PageTitle from "../../layout/PageTitle";
import Card, { StyledCard } from "../../ui/Card";

const StyledViewPage = styled(StyledPageBody)`
	
    ${StyledCard} {
        margin-top: 16px;
         li {
            padding: 8px;
            font-size: 120%;
        }
    }
`;

const ViewPage: React.FC<any> = () => {
    return (
        <StyledViewPage>
            <PageTitle title="View" subtitle="Choose an instrument" />
            <Card title="Instruments" >
                <ul>
                    <li>
                        <Link to='/view/keyboard/'>Keyboard</Link>
                    </li>
                    <li>
                        <Link to='/view/fretboard/'>Fretboard</Link>
                    </li>
                </ul>
            </Card>
        </StyledViewPage >
    )
};

export default ViewPage;
