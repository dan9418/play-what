import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { ScaleId } from "../../../core/models/Model.constants";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledPane } from "../../_shared/layout/Pane";
import Card from "../../_shared/ui/Card";

const StyledScalesPage = styled(StyledPageBody)`
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

const ScalesPage: React.FC<any> = props => {
    return (
        <StyledScalesPage>
            <BreadcrumbList id="scales" name="Scales" path={props.path} />
            <PageTitle title="Scales" subtitle="The foundation of melody" />
            <StyledPane>
                <Card title="Scale Basics">
                    <p>
                        A scale is a group of notes played sequentially. They are the basic building blocks of melody.
                    </p>
                    <h3>Types of Scales</h3>
                    <ul>
                        <li><a href="#diatonic">Diatonic</a></li>
                        <li><a href="#pentatonic">Pentatonic</a></li>
                        <li><a href="#blues">Blues</a></li>
                        <li><a href="#bebop">Bebop</a></li>
                    </ul>
                </Card>
                <Card title="Common Scales" id="common">
                    <ul>
                        <li><Link to={`/browse/scales/${ScaleId.Ionian}`}>Major (Ionian)</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.Aeolian}`}>Natural Minor (Aeolian)</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.MelodicMinor}`}>Melodic Minor</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.HarmonicMinor}`}>Harmonic Minor</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.MajorPentatonic}`}>Major Pentatonic</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.MinorPentatonic}`}>Minor Pentatonic</Link></li>
                    </ul>
                </Card>
                <Card title="Diatonic Modes" id="diatonic">
                    <p>
                        Diatonic scales are the most common type in Western music.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to={`/browse/scales/${ScaleId.Ionian}`}>Ionian</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.Dorian}`}>Dorian</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.Phrygian}`}>Phrygian</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.Lydian}`}>Lydian</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.Mixolydian}`}>Mixolydian</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.Aeolian}`}>Aeolian</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.Locrian}`}>Locrian</Link></li>
                    </ul>
                </Card>
                <Card title="Harmonic Minor Modes" id="harmonic">
                    <p>
                        Harmonic minor scales are...
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to={`/browse/scales/${ScaleId.Ionian}`}>Harmonic Minor</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.Locrian6}`}>Locrian 6</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.IonianSharp5}`}>Ionian #5</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.DorianSharp4}`}>Dorian #4</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.PhrygianDominant}`}>Phrygian Dominant</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.LydianSharp2}`}>Lydian #2</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.SuperLocrianDoubleFlat7}`}>Super Locrian bb7</Link></li>
                    </ul>
                </Card>
                <Card title="Melodic Minor Modes" id="melodic">
                    <p>
                        Melodic minor scales are...
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to={`/browse/scales/${ScaleId.MelodicMinor}`}>Melodic Minor</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.DorianFlat2}`}>Dorian b2</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.LydianSharp5}`}>Lydian #5</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.LydianDominiant}`}>Lydian Dominant</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.MixolydianFlatSix}`}>Mixolydian b6</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.AeolianFlat5}`}>Aeolian b5</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.SuperLocrian}`}>Super Locrian (Altered)</Link></li>
                    </ul>
                </Card>
                <Card title="Pentatonic" id="pentatonic">
                    <p>
                        Pentatonic scales contains 5 notes.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to={`/browse/scales/${ScaleId.MajorPentatonic}`}>Major Pentatonic</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.Egyptian}`}>Egyptian</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.ManGong}`}>Man Gong</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.Ritusen}`}>Ritusen</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.MinorPentatonic}`}>Minor Pentatonic</Link></li>
                    </ul>
                </Card>
                <Card title="Blues" id="blues">
                    <p>
                        Blues scales are pentatonic scales with an extra note.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to={`/browse/scales/${ScaleId.MajorBlues}`}>Major Blues</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.MinorBlues}`}>Minor Blues</Link></li>
                    </ul>
                </Card>
                <Card title="Bebop" id="bebop">
                    <p>
                        Bebop scales are diatonic scales with an extra note.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to={`/browse/scales/${ScaleId.MajorBebop}`}>Major Bebop</Link></li>
                        <li><Link to={`/browse/scales/${ScaleId.DominantBebop}`}>Dominant Bebop</Link></li>
                    </ul>
                </Card>
            </StyledPane>
        </StyledScalesPage>
    );
};

export default ScalesPage;
