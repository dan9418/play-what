import React from "react";
import styled from 'styled-components';
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledPane } from "../../_shared/layout/Pane";
import Card from "../../_shared/ui/Card";

const StyledChordsPage = styled(StyledPageBody)`
    width: 100%;
    max-width: 1024px;
    margin: auto;

    ${StyledPane} {
        h3, p {
            margin: 16px 0;
        }
        li {
            list-style-type: circle;
            margin-left: 16px;
        }
    }
`;

const ChordsPage: React.FC<any> = props => {
    return (
        <StyledChordsPage>
            <BreadcrumbList id="chords" name="Chords" path={props.path} />
            <PageTitle title="Chords" subtitle="The bulding blocks of harmony" />
            <StyledPane>
                <Card title="Chord Basics">
                    <p>
                        A chord is a group of notes played simultaneously. They are the basic building blocks of harmony.
                    </p>
                    <h3>Types of Chords</h3>
                    <ul>
                        <li><a href="#triads">Triads</a></li>
                        <li><a href="#triads">Seventh Chords</a></li>
                        <li><a href="#triads">Sixth Chords</a></li>
                    </ul>
                </Card>
                <Card title="Triads">
                    <p>
                        A chord is a group of notes played simultaneously. They are the basic building blocks of harmony.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><a href="#triads">Major Triad</a></li>
                        <li><a href="#triads">Minor Triad</a></li>
                        <li><a href="#triads">Augmented Triad</a></li>
                        <li><a href="#triads">Diminished Triad</a></li>
                    </ul>
                </Card>
                <Card title="Seventh Chords">
                    <p>
                        A chord is a group of notes played simultaneously. They are the basic building blocks of harmony.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><a href="#triads">Major Seventh</a></li>
                        <li><a href="#triads">Minor Seventh</a></li>
                        <li><a href="#triads">Dominant Seventh</a></li>
                        <li><a href="#triads">Half-Diminished Seventh</a></li>
                    </ul>
                </Card>
                <Card title="Sixth Chords">
                    <p>
                        A chord is a group of notes played simultaneously. They are the basic building blocks of harmony.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><a href="#triads">Major Sixth</a></li>
                        <li><a href="#triads">Minor Sixth</a></li>
                    </ul>
                </Card>
            </StyledPane>
        </StyledChordsPage>
    );
};

export default ChordsPage;
