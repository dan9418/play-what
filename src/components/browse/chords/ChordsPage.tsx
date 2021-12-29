import { Link } from "gatsby";
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
                        <li><a href="#triad">Triads</a></li>
                        <li><a href="#seventh">Seventh Chords</a></li>
                        <li><a href="#sixth">Sixth Chords</a></li>
                        <li><a href="#suspended">Suspended Chords</a></li>
                    </ul>
                </Card>
                <Card title="Triads" id="triad">
                    <p>
                        A triad is the most basic type of chord. It consists of 3 intervals (a root, a third, and a fifth). The specific types of thirds and fifths define the different types of triads.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to='/browse/chords/major-triad'>Major Triad</Link></li>
                        <li><Link to='/browse/chords/minor-triad'>Minor Triad</Link></li>
                        <li><Link to='/browse/chords/augmented-triad'>Augmented Triad</Link></li>
                        <li><Link to='/browse/chords/diminished-triad'>Diminished Triad</Link></li>
                    </ul>
                </Card>
                <Card title="Seventh Chords" id="seventh">
                    <p>
                        A seventh chord is a triad with an additional interval (a seventh) stacked on top.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to='/browse/chords/major-7th'>Major 7th</Link></li>
                        <li><Link to='/browse/chords/minor-7th'>Minor 7th</Link></li>
                        <li><Link to='/browse/chords/dominant-7th'>Dominant 7th</Link></li>
                        <li><Link to='/browse/chords/minor-major-7th'>Minor-Major 7th</Link></li>
                        <li><Link to='/browse/chords/diminished-7th'>Diminished 7th</Link></li>
                        <li><Link to='/browse/chords/half-diminished-7th'>Half-Diminished 7th</Link></li>
                        <li><Link to='/browse/chords/augmented-7th'>Augmented 7th</Link></li>
                        <li><Link to='/browse/chords/augmented-major-7th'>Augmented Major 7th</Link></li>
                    </ul>
                </Card>
                <Card title="Sixth Chords" id="sixth">
                    <p>
                        A sixth chord is like a seventh chord, except it uses a sixth interval in place of the seventh.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to='/browse/chords/major-6th'>Major 6th</Link></li>
                        <li><Link to='/browse/chords/minor-6th'>Minor 6th</Link></li>
                    </ul>
                </Card>
                <Card title="Suspended Chords" id="suspended">
                    <p>
                        A suspended chord is a like a triad, except it uses a second or fourth interval in place of the third.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to='/browse/chords/suspended-2nd'>Suspended 2nd</Link></li>
                        <li><Link to='/browse/chords/suspended-4th'>Suspended 4th</Link></li>
                    </ul>
                </Card>
            </StyledPane>
        </StyledChordsPage>
    );
};

export default ChordsPage;
