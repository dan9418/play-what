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

const DevPage: React.FC<any> = () => {
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
            <Card title="Guitar Practice" >
                <ul>
                    <li>
                        <Link to='/dev/practice/charts'>Chord Charts</Link>
                    </li>
                    <li>
                        <Link to='/dev/practice/voicings'>Chord Voicings</Link>
                    </li>
                    <li>
                        <Link to='/dev/practice/chord-progressions'>Chord Progressions</Link>
                    </li>
                    <li>
                        <Link to='/dev/practice/caged'>CAGED Shapes</Link>
                    </li>
                    <li>
                        <Link to='/dev/practice/extensions'>Extensions</Link>
                    </li>
                </ul>
            </Card>
            <Card title="Experimental Features" >
                <ul>
                    <li>
                        <Link to='/view/'>View Instruments</Link>
                    </li>
                    <li>
                        <Link to='/dev/experimental/theme'>Edit Theme</Link>
                    </li>
                    <li>
                        <Link to='/dev/experimental/docs'>Documentation</Link>
                    </li>
                </ul>
            </Card>
        </StyledDevPage >
    )
};

export default DevPage;
