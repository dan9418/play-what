import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../layout/PageBody";
import PageTitle from "../layout/PageTitle";
import { StyledPane } from "../layout/Pane";
import Card from "../ui/Card";

const StyledAboutPage = styled(StyledPageBody)`
    width: 100%;
    max-width: 1024px;
    margin: auto;


`;


const AboutPage: React.FC<any> = props => {


    return (
        <StyledAboutPage>
            <PageTitle title="About" subtitle={null} />
            <StyledPane>
                <Card title="What Is Play What?">
                    <p>Play What is a website for exploring music theory concepts complete with a suite of open-source tools.</p>
                </Card>
                <Card title="About The Author">
                    <p>Play What is developed by Dan Bednarczyk.</p>
                </Card>
            </StyledPane>
        </StyledAboutPage>
    );
};

export default AboutPage;
