import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { useRootSuffix } from "../../contexts/PagePropsContext";
import { ChordId } from "../../core/models/Model.constants";
import { SearchChordsCard } from "../search/SearchPage";
import BreadcrumbList from "../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../_shared/layout/Pane";
import Card from "../_shared/ui/Card";

const StyledChordsPage = styled(StyledPageBody)`
    width: 100%;
    max-width: 1024px;
    margin: auto;
    
    .intro {
        padding: 0 16px;
    }

    h3, p {
        margin: 16px 0;
    }

    ${StyledPane} {
        li {
            list-style-type: disc;
            margin-left: 16px;
        }
    }
`;

const ChordsPage: React.FC<any> = props => {
    const rootSuffix = useRootSuffix();

    return (
        <StyledChordsPage>
            <BreadcrumbList path={props.path} />
            <PageTitle title="Chords" subtitle="The foundation of harmony" />
            <div>
                <p className="intro">
                    A chord is a collection of musical notes, usually played simultaneously.
                    Chords are defined by their first note (the <em>root</em>) and its relationship to the following notes (<em>intervals</em>).
                </p>
                {false && <p className="intro">
                    Most chords contain a root, a third, and a fifth. Advanced chords may include additional intervals, substitutions, and/or omissions.
                    In their most common form, chords contain at least three notes spanning a single octave.
                    Chords spanning more than one octave are called <em>extended chords</em> and are not yet covered here.
                </p>}
                {/*
                    <h3>Types of Chords</h3>
                    <ul>
                        <li><a href="#triad">Triads</a></li>
                        <li><a href="#seventh">Seventh Chords</a></li>
                        <li><a href="#sixth">Sixth Chords</a></li>
                        <li><a href="#suspended">Suspended Chords</a></li>
                    </ul>*/}
            </div>
            <StyledDoublePane>
                <StyledPane>
                    <SearchChordsCard />
                </StyledPane>
                <StyledPane>
                    <Card title="Triads" id="triad">
                        <p>
                            A triad is the most basic type of chord. It consists of 3 intervals (a root, a third, and a fifth).
                            The specific thirds and fifths used determine the type (or <em>quality</em>) of the triad.
                        </p>
                        <h3>Examples</h3>
                        <ul>
                            <li><Link to={`/browse/chords/${ChordId.MajTriad}/${rootSuffix}`}>Major Triad</Link></li>
                            <li><Link to={`/browse/chords/${ChordId.MinTriad}/${rootSuffix}`}>Minor Triad</Link></li>
                            <li><Link to={`/browse/chords/${ChordId.AugTriad}/${rootSuffix}`}>Augmented Triad</Link></li>
                            <li><Link to={`/browse/chords/${ChordId.DimTriad}/${rootSuffix}`}>Diminished Triad</Link></li>
                        </ul>
                    </Card>
                    <Card title="Seventh Chords" id="seventh">
                        <p>
                            A seventh chord is a triad with an additional seventh interval stacked on top.
                        </p>
                        <h3>Examples</h3>
                        <ul>
                            <li><Link to={`/browse/chords/${ChordId.Maj7}/${rootSuffix}`}>Major 7th</Link></li>
                            <li><Link to={`/browse/chords/${ChordId.Min7}/${rootSuffix}`}>Minor 7th</Link></li>
                            <li><Link to={`/browse/chords/${ChordId.Dom7}/${rootSuffix}`}>Dominant 7th</Link></li>
                            <li><Link to={`/browse/chords/${ChordId.MinMaj7}/${rootSuffix}`}>Minor-Major 7th</Link></li>
                            <li><Link to={`/browse/chords/${ChordId.Dim7}/${rootSuffix}`}>Diminished 7th</Link></li>
                            <li><Link to={`/browse/chords/${ChordId.HalfDim7}/${rootSuffix}`}>Half-Diminished 7th</Link></li>
                            <li><Link to={`/browse/chords/${ChordId.Aug7}/${rootSuffix}`}>Augmented 7th</Link></li>
                            <li><Link to={`/browse/chords/${ChordId.AugMaj7}/${rootSuffix}`}>Augmented Major 7th</Link></li>
                        </ul>
                    </Card>
                    <Card title="Sixth Chords" id="sixth">
                        <p>
                            A sixth chord is a triad with an additional sixth interval stacked on top.
                            They are similar in function to seventh chords.
                        </p>
                        <h3>Examples</h3>
                        <ul>
                            <li><Link to={`/browse/chords/${ChordId.Maj6}/${rootSuffix}`}>Major 6th</Link></li>
                            <li><Link to={`/browse/chords/${ChordId.Min6}/${rootSuffix}`}>Minor 6th</Link></li>
                        </ul>
                    </Card>
                    <Card title="Suspended Chords" id="suspended">
                        <p>
                            A suspended chord is a like a triad, except it sustitutes a second or fourth interval in place of the third.
                        </p>
                        <h3>Examples</h3>
                        <ul>
                            <li><Link to={`/browse/chords/${ChordId.Sus2}/${rootSuffix}`}>Suspended 2nd</Link></li>
                            <li><Link to={`/browse/chords/${ChordId.Sus4}/${rootSuffix}`}>Suspended 4th</Link></li>
                        </ul>
                    </Card>
                </StyledPane>

            </StyledDoublePane>
        </StyledChordsPage>
    );
};

export default ChordsPage;
