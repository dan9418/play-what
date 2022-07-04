import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../layout/PageBody";
import PageTitle from "../layout/PageTitle";
import Card, { StyledCard } from "../ui/Card";



const StyledComingSoonPage = styled(StyledPageBody)`
	${StyledCard} {
        margin-top: 16px;
		ul {
			margin-bottom: 16px;
		}
        li {
            padding: 8px;
            font-size: 120%;
        }
    }
`;

const IndexPage: React.FC<any> = () => {

    return (
        <StyledComingSoonPage>
            <PageTitle title="Coming Soon" subtitle="Features in Development" />
            <Card title="Public User Beta: 8/5/22">
                <ul>
                    <li>New home page</li>
                    <li>Improved navigation</li>
                    <li>Customizable note labels</li>
                    <li>Customizable note colors</li>
                    <li>Better extended chords experience</li>
                    <li>Better mobile experience</li>
                    <li>Feedback / feature request form</li>
                    <li>Basic documentation</li>
                </ul>
            </Card>
        </StyledComingSoonPage>
    );
};

export default IndexPage;
