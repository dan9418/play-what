import React from "react";
import styled from 'styled-components';
import { useRootSuffix } from "../../../contexts/PagePropsContext";
import { ScaleId } from "../../../core/models/Model.constants";
import { SCALE_PRESETS } from "../../../core/models/Model.presets";
import CollectionCard from "../../collection/CollectionCard";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";
import Card from "../../ui/Card";
import { SimpleList } from "../../ui/List";

const StyledScalesPage = styled(PageLayout)`

    .intro {
        padding: 0 16px;
    }

    h3, p {
        margin: 16px 0;
    }
`;

const ScalesPage: React.FC<any> = props => {
    const rootSuffix = useRootSuffix();

    return (
        <StyledScalesPage title="Scales" subtitle="The foundation of melody">
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
                    ]} />*/}
            </div>
            <ColumnManager>
                <ColumnManager>
                    <CollectionCard title="All Scales" data={SCALE_PRESETS} />
                </ColumnManager>
                <ColumnManager>
                    <Card title="Common Scales" id="common">
                        <SimpleList items={[
                            ['Major (Ionian)', `/browse/scales/${ScaleId.Ionian}/${rootSuffix}`],
                            ['Natural Minor (Aeolian)', `/browse/scales/${ScaleId.Aeolian}/${rootSuffix}`],
                            ['Melodic Minor', `/browse/scales/${ScaleId.MelodicMinor}/${rootSuffix}`],
                            ['Harmonic Minor', `/browse/scales/${ScaleId.HarmonicMinor}/${rootSuffix}`],
                            ['Major Pentatonic', `/browse/scales/${ScaleId.MajorPentatonic}/${rootSuffix}`],
                            ['Minor Pentatonic', `/browse/scales/${ScaleId.MinorPentatonic}/${rootSuffix}`],
                        ]} />
                    </Card>
                    <Card title="Diatonic Modes" id="diatonic">
                        <p>
                            Diatonic scales are by far the most common type in Western music. They are defined by a specific sequence of seven intervals containing five whole-steps and two half-steps.
                            The most common form of the diatonic scale is the Major scale (AKA the Ionian mode), which follows the pattern W-W-W-H-W-W-H.
                        </p>
                        <h3>Examples</h3>
                        <SimpleList items={[
                            ['Ionian', `/browse/scales/${ScaleId.Ionian}/${rootSuffix}`],
                            ['Dorian', `/browse/scales/${ScaleId.Dorian}/${rootSuffix}`],
                            ['Phrygian', `/browse/scales/${ScaleId.Phrygian}/${rootSuffix}`],
                            ['Lydian', `/browse/scales/${ScaleId.Lydian}/${rootSuffix}`],
                            ['Mixolydian', `/browse/scales/${ScaleId.Mixolydian}/${rootSuffix}`],
                            ['Aeolian', `/browse/scales/${ScaleId.Aeolian}/${rootSuffix}`],
                            ['Locrian', `/browse/scales/${ScaleId.Locrian}/${rootSuffix}`],
                        ]} />
                    </Card>
                    <Card title="Harmonic Minor Modes" id="harmonic">
                        <p>
                            The Harmonic Minor scale is a slight variation of the Natural Minor scale (which itself is just a mode of the Diatonic scale).
                            The only difference is that the seventh degree is raised a half-step, creating a Major 7th interval instead of a Minor 7th.
                            This slight variation to the diatonic scale creates seven more unique modes.
                        </p>
                        <h3>Examples</h3>
                        <SimpleList items={[
                            ['Harmonic Minor', `/browse/scales/${ScaleId.Ionian}/${rootSuffix}`],
                            ['Locrian 6', `/browse/scales/${ScaleId.Locrian6}/${rootSuffix}`],
                            ['Ionian #5', `/browse/scales/${ScaleId.IonianSharp5}/${rootSuffix}`],
                            ['Dorian #4', `/browse/scales/${ScaleId.DorianSharp4}/${rootSuffix}`],
                            ['Phrygian Dominant', `/browse/scales/${ScaleId.PhrygianDominant}/${rootSuffix}`],
                            ['Lydian #2', `/browse/scales/${ScaleId.LydianSharp2}/${rootSuffix}`],
                            ['Super Locrian bb7', `/browse/scales/${ScaleId.SuperLocrianDoubleFlat7}/${rootSuffix}`],
                        ]} />
                    </Card>
                    <Card title="Melodic Minor Modes" id="melodic">
                        <p>
                            The Melodic Minor scale is formed by making one additional change to the Harmonic Minor scale.
                            We simply raise the sixth degree by a half-step, creating a Major 6th interval instead of a Major 7th.
                            This variation also creates seven unique modes.
                        </p>
                        <h3>Examples</h3>
                        <SimpleList items={[
                            ['Melodic Minor', `/browse/scales/${ScaleId.MelodicMinor}/${rootSuffix}`],
                            ['Dorian b2', `/browse/scales/${ScaleId.DorianFlat2}/${rootSuffix}`],
                            ['Lydian #5', `/browse/scales/${ScaleId.LydianSharp5}/${rootSuffix}`],
                            ['Lydian Dominant', `/browse/scales/${ScaleId.LydianDominiant}/${rootSuffix}`],
                            ['Mixolydian b6', `/browse/scales/${ScaleId.MixolydianFlatSix}/${rootSuffix}`],
                            ['Aeolian b5', `/browse/scales/${ScaleId.AeolianFlat5}/${rootSuffix}`],
                            ['Super Locrian (Altered)', `/browse/scales/${ScaleId.SuperLocrian}/${rootSuffix}`],
                        ]} />
                    </Card>
                    <Card title="Pentatonic Modes" id="pentatonic">
                        <p>
                            Pentatonic scales contain only five notes and are often a subset of diatonic scales.
                            For example, the Major Pentatonic scale is the same as a Major Diatonic scale without the 4th and 7th degrees.
                        </p>
                        <h3>Examples</h3>
                        <SimpleList items={[
                            ['Major Pentatonic', `/browse/scales/${ScaleId.MajorPentatonic}/${rootSuffix}`],
                            ['Egyptian', `/browse/scales/${ScaleId.Egyptian}/${rootSuffix}`],
                            ['Man Gong', `/browse/scales/${ScaleId.ManGong}/${rootSuffix}`],
                            ['Ritusen', `/browse/scales/${ScaleId.Ritusen}/${rootSuffix}`],
                            ['Minor Pentatonic', `/browse/scales/${ScaleId.MinorPentatonic}/${rootSuffix}`],
                        ]} />
                    </Card>
                    <Card title="Blues Scales" id="blues">
                        <p>
                            Blues scales are pentatonic scales with an extra "blue" note.
                        </p>
                        <h3>Examples</h3>
                        <SimpleList items={[
                            ['Major Blues', `/browse/scales/${ScaleId.MajorBlues}/${rootSuffix}`],
                            ['Minor Blues', `/browse/scales/${ScaleId.MinorBlues}/${rootSuffix}`],
                        ]} />
                    </Card>
                    <Card title="Bebop Scales" id="bebop">
                        <p>
                            Bebop scales are diatonic scales with an extra chomatic passing note.
                        </p>
                        <h3>Examples</h3>
                        <SimpleList items={[
                            ['Major Bebop', `/browse/scales/${ScaleId.MajorBebop}/${rootSuffix}`],
                            ['Dominant Bebop', `/browse/scales/${ScaleId.DominantBebop}/${rootSuffix}`],
                        ]} />
                    </Card>
                </ColumnManager>
            </ColumnManager>
        </StyledScalesPage>
    );
};

export default ScalesPage;
