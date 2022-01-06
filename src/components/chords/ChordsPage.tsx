import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import BreadcrumbList from "../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";
import { StyledPane } from "../_shared/layout/Pane";
import Card from "../_shared/ui/Card";

const StyledChordsPage = styled(StyledPageBody)`
    width: 100%;
    max-width: 1024px;
    margin: auto;

    ${StyledPane} {
        h3, p {
            margin: 16px 0;
        }
        li {
            list-style-type: disc;
            margin-left: 16px;
        }
    }
`;

const ChordsPage: React.FC<any> = props => {
    return (
        <StyledChordsPage>
            <BreadcrumbList id="chords" name="Chords" path={props.path} />
            <PageTitle title="Chords" subtitle="The foundation of harmony" />
            <StyledPane>
                <div>
                    <p className="intro">
                        A chord is a collection of musical notes, which are generally played simultaneously.
                        Chords are defined by their first note (the <em>root</em>) and its relationship to the following notes (<em>intervals</em>).
                        Most chords contain a root, a third, and a fifth. Advanced chords may include additional intervals, substitutions, and omissions.
                    </p>
                    <p className="intro">
                        In their most common form, chords contain at least three notes spanning a single octave.
                        Chords spanning more than one octave are called <em>extended chords</em> and are not yet covered here.
                    </p>
                    {/*
                    <h3>Types of Chords</h3>
                    <ul>
                        <li><a href="#triad">Triads</a></li>
                        <li><a href="#seventh">Seventh Chords</a></li>
                        <li><a href="#sixth">Sixth Chords</a></li>
                        <li><a href="#suspended">Suspended Chords</a></li>
                    </ul>*/}
                </div>
                <Card title="Triads" id="triad">
                    <p>
                        A triad is the most basic type of chord. It consists of 3 intervals (a root, a third, and a fifth).
                        The specific thirds and fifths used determine the type (or <em>quality</em>) of the triad.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to='/chords/major-triad'>Major Triad</Link></li>
                        <li><Link to='/chords/minor-triad'>Minor Triad</Link></li>
                        <li><Link to='/chords/augmented-triad'>Augmented Triad</Link></li>
                        <li><Link to='/chords/diminished-triad'>Diminished Triad</Link></li>
                    </ul>
                </Card>
                <Card title="Seventh Chords" id="seventh">
                    <p>
                        A seventh chord is a triad with an additional seventh interval stacked on top.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to='/chords/major-7th'>Major 7th</Link></li>
                        <li><Link to='/chords/minor-7th'>Minor 7th</Link></li>
                        <li><Link to='/chords/dominant-7th'>Dominant 7th</Link></li>
                        <li><Link to='/chords/minor-major-7th'>Minor-Major 7th</Link></li>
                        <li><Link to='/chords/diminished-7th'>Diminished 7th</Link></li>
                        <li><Link to='/chords/half-diminished-7th'>Half-Diminished 7th</Link></li>
                        <li><Link to='/chords/augmented-7th'>Augmented 7th</Link></li>
                        <li><Link to='/chords/augmented-major-7th'>Augmented Major 7th</Link></li>
                    </ul>
                </Card>
                <Card title="Sixth Chords" id="sixth">
                    <p>
                        A sixth chord is a triad with an additional sixth interval stacked on top.
                        They are similar in function to seventh chords.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to='/chords/major-6th'>Major 6th</Link></li>
                        <li><Link to='/chords/minor-6th'>Minor 6th</Link></li>
                    </ul>
                </Card>
                <Card title="Suspended Chords" id="suspended">
                    <p>
                        A suspended chord is a like a triad, except it sustitutes a second or fourth interval in place of the third.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to='/chords/suspended-2nd'>Suspended 2nd</Link></li>
                        <li><Link to='/chords/suspended-4th'>Suspended 4th</Link></li>
                    </ul>
                </Card>
            </StyledPane>
        </StyledChordsPage>
    );
};

export default ChordsPage;
