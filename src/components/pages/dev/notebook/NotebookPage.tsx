import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../../../layout/PageBody";
import PageTitle from "../../../layout/PageTitle";
import Card, { CardHeader, StyledCard } from "../../../ui/Card";

const StyledNotebookPage = styled(StyledPageBody)`
    ${StyledCard} {
        margin-top: 16px;
         li {
            padding: 8px;
            font-size: 120%;
        }
    }
`;

const NotebookPage: React.FC<any> = () => {
    return (
        <StyledNotebookPage>
            <PageTitle title="Music Notebook" subtitle="A work in progress" />
            <Card title="Pages" >
                <CardHeader as="h3" title="Intervals" />
                <ul>
                    <li>
                        <Link to='/charts'>Chord Charts</Link>
                    </li>
                    <li>
                        <Link to='/voicings'>Chord Voicings</Link>
                    </li>
                    <li>
                        <Link to='/chord-progressions'>Chord Progressions</Link>
                    </li>
                    <li>
                        <Link to='/caged'>CAGED Shapes</Link>
                    </li>
                    <li>
                        <Link to='/extensions'>Extensions</Link>
                    </li>
                </ul>
            </Card>
            <Card title="Coming Soon" >
                <ul>
                    <li>
                        <Link to='/'>...</Link>
                    </li>
                </ul>
            </Card>
        </StyledNotebookPage >
    )
};

export default NotebookPage;
