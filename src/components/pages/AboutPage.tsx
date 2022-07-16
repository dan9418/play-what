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

    ${StyledPane} a {
        display: block;
        padding: 8px;
    }
`;


const AboutPage: React.FC<any> = props => {


    return (
        <StyledAboutPage>
            <PageTitle title="About" subtitle={null} />
            <StyledPane>
                <Card title="What Is Play What?">
                    <p>Play What is a website for visualizing and exploring music theory concepts. More info coming soon.</p>
                </Card>
                <Card title="About The Author">
                    <p>Play What is developed by Dan Bednarczyk.</p>
                    <ul>
                        <li><a href="https://www.instagram.com/dan.bednarczyk/">Instagram</a></li>
                        <li><a href="https://danbednarczyk.com/">Website</a></li>
                        <li><a href="https://danbednarczyk.bandcamp.com/">Bandcamp</a></li>
                        <li><a href="https://open.spotify.com/artist/37bMMmv82uI3xhb0S8hL9V?si=HTEihmXtSt-aBan4obvTJQ">Spotify</a></li>
                        <li><a href="https://music.apple.com/us/artist/dan-bednarczyk/1590781822">Apple Music</a></li>
                    </ul>
                </Card>
            </StyledPane>
        </StyledAboutPage>
    );
};

export default AboutPage;
