import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { useRootSuffix } from "../../contexts/PagePropsContext";
import { ScaleId } from "../../core/models/Model.constants";
import { SCALE_PRESETS } from "../../core/models/Model.presets";
import CollectionCard from "../collection/CollectionCard";
import { StyledPageBody } from "../layout/PageBody";
import PageTitle from "../layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../layout/Pane";
import Card from "../ui/Card";

const StyledScalesPage = styled(StyledPageBody)`
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

const ScalesPage: React.FC<any> = props => {
    const rootSuffix = useRootSuffix();

    return (
        <StyledScalesPage>
            <PageTitle title="Scales" subtitle="The foundation of melody" />
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
            <StyledDoublePane>
                <StyledPane>
                    <CollectionCard title="All Scales" data={SCALE_PRESETS} />
                </StyledPane>
                <StyledPane>
                    <Card title="Common Scales" id="common">
                        <ul>
                            <li><Link to={`/browse/scales/${ScaleId.Ionian}/${rootSuffix}`}>Major (Ionian)</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.Aeolian}/${rootSuffix}`}>Natural Minor (Aeolian)</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.MelodicMinor}/${rootSuffix}`}>Melodic Minor</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.HarmonicMinor}/${rootSuffix}`}>Harmonic Minor</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.MajorPentatonic}/${rootSuffix}`}>Major Pentatonic</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.MinorPentatonic}/${rootSuffix}`}>Minor Pentatonic</Link></li>
                        </ul>
                    </Card>
                    <Card title="Diatonic Modes" id="diatonic">
                        <p>
                            Diatonic scales are by far the most common type in Western music. They are defined by a specific sequence of seven intervals containing five whole-steps and two half-steps.
                            The most common form of the diatonic scale is the Major scale (AKA the Ionian mode), which follows the pattern W-W-W-H-W-W-H.
                        </p>
                        <h3>Examples</h3>
                        <ul>
                            <li><Link to={`/browse/scales/${ScaleId.Ionian}/${rootSuffix}`}>Ionian</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.Dorian}/${rootSuffix}`}>Dorian</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.Phrygian}/${rootSuffix}`}>Phrygian</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.Lydian}/${rootSuffix}`}>Lydian</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.Mixolydian}/${rootSuffix}`}>Mixolydian</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.Aeolian}/${rootSuffix}`}>Aeolian</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.Locrian}/${rootSuffix}`}>Locrian</Link></li>
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
                            <li><Link to={`/browse/scales/${ScaleId.Ionian}/${rootSuffix}`}>Harmonic Minor</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.Locrian6}/${rootSuffix}`}>Locrian 6</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.IonianSharp5}/${rootSuffix}`}>Ionian #5</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.DorianSharp4}/${rootSuffix}`}>Dorian #4</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.PhrygianDominant}/${rootSuffix}`}>Phrygian Dominant</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.LydianSharp2}/${rootSuffix}`}>Lydian #2</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.SuperLocrianDoubleFlat7}/${rootSuffix}`}>Super Locrian bb7</Link></li>
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
                            <li><Link to={`/browse/scales/${ScaleId.MelodicMinor}/${rootSuffix}`}>Melodic Minor</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.DorianFlat2}/${rootSuffix}`}>Dorian b2</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.LydianSharp5}/${rootSuffix}`}>Lydian #5</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.LydianDominiant}/${rootSuffix}`}>Lydian Dominant</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.MixolydianFlatSix}/${rootSuffix}`}>Mixolydian b6</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.AeolianFlat5}/${rootSuffix}`}>Aeolian b5</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.SuperLocrian}/${rootSuffix}`}>Super Locrian (Altered)</Link></li>
                        </ul>
                    </Card>
                    <Card title="Pentatonic Modes" id="pentatonic">
                        <p>
                            Pentatonic scales contain only five notes and are often a subset of diatonic scales.
                            For example, the Major Pentatonic scale is the same as a Major Diatonic scale without the 4th and 7th degrees.
                        </p>
                        <h3>Examples</h3>
                        <ul>
                            <li><Link to={`/browse/scales/${ScaleId.MajorPentatonic}/${rootSuffix}`}>Major Pentatonic</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.Egyptian}/${rootSuffix}`}>Egyptian</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.ManGong}/${rootSuffix}`}>Man Gong</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.Ritusen}/${rootSuffix}`}>Ritusen</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.MinorPentatonic}/${rootSuffix}`}>Minor Pentatonic</Link></li>
                        </ul>
                    </Card>
                    <Card title="Blues Scales" id="blues">
                        <p>
                            Blues scales are pentatonic scales with an extra "blue" note.
                        </p>
                        <h3>Examples</h3>
                        <ul>
                            <li><Link to={`/browse/scales/${ScaleId.MajorBlues}/${rootSuffix}`}>Major Blues</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.MinorBlues}/${rootSuffix}`}>Minor Blues</Link></li>
                        </ul>
                    </Card>
                    <Card title="Bebop Scales" id="bebop">
                        <p>
                            Bebop scales are diatonic scales with an extra chomatic passing note.
                        </p>
                        <h3>Examples</h3>
                        <ul>
                            <li><Link to={`/browse/scales/${ScaleId.MajorBebop}/${rootSuffix}`}>Major Bebop</Link></li>
                            <li><Link to={`/browse/scales/${ScaleId.DominantBebop}/${rootSuffix}`}>Dominant Bebop</Link></li>
                        </ul>
                    </Card>
                </StyledPane>
            </StyledDoublePane>
        </StyledScalesPage>
    );
};

export default ScalesPage;
