import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { ScaleId } from "../../core/models/Model.constants";
import BreadcrumbList from "../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";
import { StyledPane } from "../_shared/layout/Pane";
import Card from "../_shared/ui/Card";

const StyledScalesPage = styled(StyledPageBody)`
    width: 100%;
    max-width: 1024px;
    margin: auto;

    .intro {
        font-size: 110%;
        line-height: 120%;
    }

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

const ScalesPage: React.FC<any> = props => {
    return (
        <StyledScalesPage>
            <BreadcrumbList id="scales" name="Scales" path={props.path} />
            <PageTitle title="Scales" subtitle="The foundation of melody" />
            <StyledPane>
                <div>
                    <p className="intro">
                        A scale is a collection of musical notes, which are generally played sequentially and ordered by pitch.
                        Scales are defined by their first note (the <em>root</em>) and its relationship to the following notes (<em>intervals</em>).
                    </p>
                    <p className="intro">
                        In their most common form, scales contain seven notes spanning a single octave. These seven <em>degrees</em> are lettered A-G.
                    </p>
                    <h2>Modes</h2>
                    <p className="intro">
                        A <em>mode</em> is simply a rotation of any given scale.
                    </p>
                    {/*<h3>Types of Scales</h3>
                    <ul>
                        <li><a href="#diatonic">Diatonic</a></li>
                        <li><a href="#pentatonic">Pentatonic</a></li>
                        <li><a href="#blues">Blues</a></li>
                        <li><a href="#bebop">Bebop</a></li>
                    </ul>*/}
                </div>
                <Card title="Common Scales" id="common">
                    <ul>
                        <li><Link to={`/scales/${ScaleId.Ionian}`}>Major (Ionian)</Link></li>
                        <li><Link to={`/scales/${ScaleId.Aeolian}`}>Natural Minor (Aeolian)</Link></li>
                        <li><Link to={`/scales/${ScaleId.MelodicMinor}`}>Melodic Minor</Link></li>
                        <li><Link to={`/scales/${ScaleId.HarmonicMinor}`}>Harmonic Minor</Link></li>
                        <li><Link to={`/scales/${ScaleId.MajorPentatonic}`}>Major Pentatonic</Link></li>
                        <li><Link to={`/scales/${ScaleId.MinorPentatonic}`}>Minor Pentatonic</Link></li>
                    </ul>
                </Card>
                <Card title="Diatonic Modes" id="diatonic">
                    <p>
                        Diatonic scales are by far the most common type in Western music. They are defined by a specific sequence of seven intervals containing five whole-steps and two half-steps.
                        The most common form of the diatonic scale is the Major scale (AKA the Ionian mode), which follows the pattern W-W-W-H-W-W-H.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to={`/scales/${ScaleId.Ionian}`}>Ionian</Link></li>
                        <li><Link to={`/scales/${ScaleId.Dorian}`}>Dorian</Link></li>
                        <li><Link to={`/scales/${ScaleId.Phrygian}`}>Phrygian</Link></li>
                        <li><Link to={`/scales/${ScaleId.Lydian}`}>Lydian</Link></li>
                        <li><Link to={`/scales/${ScaleId.Mixolydian}`}>Mixolydian</Link></li>
                        <li><Link to={`/scales/${ScaleId.Aeolian}`}>Aeolian</Link></li>
                        <li><Link to={`/scales/${ScaleId.Locrian}`}>Locrian</Link></li>
                    </ul>
                </Card>
                <Card title="Harmonic Minor Modes" id="harmonic">
                    <p>
                        The Harmonic Minor scale is a slight variation of the Natural Minor scale (which itself is just a mode of the Diatonic scale).
                        The only difference is that the seventh degree is raised a half-step, creating a Major 7th interval instead of a Minor 7th.
                        This slight variation to the diatonic scale creates seven more unique modes.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to={`/scales/${ScaleId.Ionian}`}>Harmonic Minor</Link></li>
                        <li><Link to={`/scales/${ScaleId.Locrian6}`}>Locrian 6</Link></li>
                        <li><Link to={`/scales/${ScaleId.IonianSharp5}`}>Ionian #5</Link></li>
                        <li><Link to={`/scales/${ScaleId.DorianSharp4}`}>Dorian #4</Link></li>
                        <li><Link to={`/scales/${ScaleId.PhrygianDominant}`}>Phrygian Dominant</Link></li>
                        <li><Link to={`/scales/${ScaleId.LydianSharp2}`}>Lydian #2</Link></li>
                        <li><Link to={`/scales/${ScaleId.SuperLocrianDoubleFlat7}`}>Super Locrian bb7</Link></li>
                    </ul>
                </Card>
                <Card title="Melodic Minor Modes" id="melodic">
                    <p>
                        The Melodic Minor scale is formed by making one additional change to the Harmonic Minor scale.
                        We simply raise the sixth degree by a half-step, creating a Major 6th interval instead of a Major 7th.
                        This variation also creates seven unique modes.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to={`/scales/${ScaleId.MelodicMinor}`}>Melodic Minor</Link></li>
                        <li><Link to={`/scales/${ScaleId.DorianFlat2}`}>Dorian b2</Link></li>
                        <li><Link to={`/scales/${ScaleId.LydianSharp5}`}>Lydian #5</Link></li>
                        <li><Link to={`/scales/${ScaleId.LydianDominiant}`}>Lydian Dominant</Link></li>
                        <li><Link to={`/scales/${ScaleId.MixolydianFlatSix}`}>Mixolydian b6</Link></li>
                        <li><Link to={`/scales/${ScaleId.AeolianFlat5}`}>Aeolian b5</Link></li>
                        <li><Link to={`/scales/${ScaleId.SuperLocrian}`}>Super Locrian (Altered)</Link></li>
                    </ul>
                </Card>
                <Card title="Pentatonic Modes" id="pentatonic">
                    <p>
                        Pentatonic scales contain only five notes and are often a subset of diatonic scales.
                        For example, the Major Pentatonic scale is the same as a Major Diatonic scale without the 4th and 7th degrees.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to={`/scales/${ScaleId.MajorPentatonic}`}>Major Pentatonic</Link></li>
                        <li><Link to={`/scales/${ScaleId.Egyptian}`}>Egyptian</Link></li>
                        <li><Link to={`/scales/${ScaleId.ManGong}`}>Man Gong</Link></li>
                        <li><Link to={`/scales/${ScaleId.Ritusen}`}>Ritusen</Link></li>
                        <li><Link to={`/scales/${ScaleId.MinorPentatonic}`}>Minor Pentatonic</Link></li>
                    </ul>
                </Card>
                <Card title="Blues Scales" id="blues">
                    <p>
                        Blues scales are pentatonic scales with an extra "blue" note.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to={`/scales/${ScaleId.MajorBlues}`}>Major Blues</Link></li>
                        <li><Link to={`/scales/${ScaleId.MinorBlues}`}>Minor Blues</Link></li>
                    </ul>
                </Card>
                <Card title="Bebop Scales" id="bebop">
                    <p>
                        Bebop scales are diatonic scales with an extra chomatic passing note.
                    </p>
                    <h3>Examples</h3>
                    <ul>
                        <li><Link to={`/scales/${ScaleId.MajorBebop}`}>Major Bebop</Link></li>
                        <li><Link to={`/scales/${ScaleId.DominantBebop}`}>Dominant Bebop</Link></li>
                    </ul>
                </Card>
            </StyledPane>
        </StyledScalesPage>
    );
};

export default ScalesPage;
