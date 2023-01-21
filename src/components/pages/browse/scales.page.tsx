import React from "react";
import styled from "styled-components";
import { useRootId } from "../../../contexts/PagePropsContext";
import {
  ModelType,
  NoteId,
  ScaleId,
} from "../../../core/models/Model.constants";
import { SCALE_PRESETS } from "../../../core/models/Model.presets";
import { getModelRoute } from "../../../core/routing/Routing.utils";
import CollectionCard from "../../collection/CollectionCard";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";
import Card from "../../ui/Card";
import { SimpleList } from "../../ui/List";

const StyledScalesPage = styled(PageLayout)`
  .intro {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  h3,
  p {
    margin: 16px 0;
  }
`;

const ScalesPage: React.FC<any> = (props) => {
  const rootId = useRootId();

  return (
    <StyledScalesPage title="Scales" subtitle="The foundation of melody">
      <div>
        <p className="intro">
          A scale is a collection of musical notes, which are generally played
          sequentially and ordered by pitch. Scales are defined by their first
          note (the <em>root</em>) and its relationship to the following notes (
          <em>intervals</em>).
        </p>
        <p className="intro">
          In their most common form, scales contain seven notes spanning a
          single octave. These seven <em>degrees</em> are lettered A-G.
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
            <SimpleList
              items={[
                [
                  "Major (Ionian)",
                  getModelRoute(ModelType.Scale, ScaleId.Ionian, rootId),
                ],
                [
                  "Natural Minor (Aeolian)",
                  getModelRoute(ModelType.Scale, ScaleId.Aeolian, rootId),
                ],
                [
                  "Melodic Minor",
                  getModelRoute(ModelType.Scale, ScaleId.MelodicMinor, rootId),
                ],
                [
                  "Harmonic Minor",
                  getModelRoute(ModelType.Scale, ScaleId.HarmonicMinor, rootId),
                ],
                [
                  "Major Pentatonic",
                  getModelRoute(
                    ModelType.Scale,
                    ScaleId.MajorPentatonic,
                    rootId
                  ),
                ],
                [
                  "Minor Pentatonic",
                  getModelRoute(
                    ModelType.Scale,
                    ScaleId.MinorPentatonic,
                    rootId
                  ),
                ],
              ]}
            />
          </Card>
          <Card title="Diatonic Modes" id="diatonic">
            <p>
              Diatonic scales are by far the most common type in Western music.
              They are defined by a specific sequence of seven intervals
              containing five whole-steps and two half-steps. The most common
              form of the diatonic scale is the Major scale (AKA the Ionian
              mode), which follows the pattern W-W-W-H-W-W-H.
            </p>
            <h3>Examples</h3>
            <SimpleList
              items={[
                [
                  "Ionian",
                  getModelRoute(ModelType.Scale, ScaleId.Ionian, rootId),
                ],
                [
                  "Dorian",
                  getModelRoute(ModelType.Scale, ScaleId.Dorian, rootId),
                ],
                [
                  "Phrygian",
                  getModelRoute(ModelType.Scale, ScaleId.Phrygian, rootId),
                ],
                [
                  "Lydian",
                  getModelRoute(ModelType.Scale, ScaleId.Lydian, rootId),
                ],
                [
                  "Mixolydian",
                  getModelRoute(ModelType.Scale, ScaleId.Mixolydian, rootId),
                ],
                [
                  "Aeolian",
                  getModelRoute(ModelType.Scale, ScaleId.Aeolian, rootId),
                ],
                [
                  "Locrian",
                  getModelRoute(ModelType.Scale, ScaleId.Locrian, rootId),
                ],
              ]}
            />
          </Card>
          <Card title="Harmonic Minor Modes" id="harmonic">
            <p>
              The Harmonic Minor scale is a slight variation of the Natural
              Minor scale (which itself is just a mode of the Diatonic scale).
              The only difference is that the seventh degree is raised a
              half-step, creating a Major 7th interval instead of a Minor 7th.
              This slight variation to the diatonic scale creates seven more
              unique modes.
            </p>
            <h3>Examples</h3>
            <SimpleList
              items={[
                [
                  "Harmonic Minor",
                  getModelRoute(ModelType.Scale, ScaleId.Ionian, rootId),
                ],
                [
                  "Locrian 6",
                  getModelRoute(ModelType.Scale, ScaleId.Locrian6, rootId),
                ],
                [
                  "Ionian #5",
                  getModelRoute(ModelType.Scale, ScaleId.IonianSharp5, rootId),
                ],
                [
                  "Dorian #4",
                  getModelRoute(ModelType.Scale, ScaleId.DorianSharp4, rootId),
                ],
                [
                  "Phrygian Dominant",
                  getModelRoute(
                    ModelType.Scale,
                    ScaleId.PhrygianDominant,
                    rootId
                  ),
                ],
                [
                  "Lydian #2",
                  getModelRoute(ModelType.Scale, ScaleId.LydianSharp2, rootId),
                ],
                [
                  "Super Locrian bb7",
                  getModelRoute(
                    ModelType.Scale,
                    ScaleId.SuperLocrianDoubleFlat7,
                    rootId
                  ),
                ],
              ]}
            />
          </Card>
          <Card title="Melodic Minor Modes" id="melodic">
            <p>
              The Melodic Minor scale is formed by making one additional change
              to the Harmonic Minor scale. We simply raise the sixth degree by a
              half-step, creating a Major 6th interval instead of a Major 7th.
              This variation also creates seven unique modes.
            </p>
            <h3>Examples</h3>
            <SimpleList
              items={[
                [
                  "Melodic Minor",
                  getModelRoute(ModelType.Scale, ScaleId.MelodicMinor, rootId),
                ],
                [
                  "Dorian b2",
                  getModelRoute(ModelType.Scale, ScaleId.DorianFlat2, rootId),
                ],
                [
                  "Lydian #5",
                  getModelRoute(ModelType.Scale, ScaleId.LydianSharp5, rootId),
                ],
                [
                  "Lydian Dominant",
                  getModelRoute(
                    ModelType.Scale,
                    ScaleId.LydianDominiant,
                    rootId
                  ),
                ],
                [
                  "Mixolydian b6",
                  getModelRoute(
                    ModelType.Scale,
                    ScaleId.MixolydianFlatSix,
                    rootId
                  ),
                ],
                [
                  "Aeolian b5",
                  getModelRoute(ModelType.Scale, ScaleId.AeolianFlat5, rootId),
                ],
                [
                  "Super Locrian (Altered)",
                  getModelRoute(ModelType.Scale, ScaleId.SuperLocrian, rootId),
                ],
              ]}
            />
          </Card>
          <Card title="Pentatonic Modes" id="pentatonic">
            <p>
              Pentatonic scales contain only five notes and are often a subset
              of diatonic scales. For example, the Major Pentatonic scale is the
              same as a Major Diatonic scale without the 4th and 7th degrees.
            </p>
            <h3>Examples</h3>
            <SimpleList
              items={[
                [
                  "Major Pentatonic",
                  getModelRoute(
                    ModelType.Scale,
                    ScaleId.MajorPentatonic,
                    rootId
                  ),
                ],
                [
                  "Egyptian",
                  getModelRoute(ModelType.Scale, ScaleId.Egyptian, rootId),
                ],
                [
                  "Man Gong",
                  getModelRoute(ModelType.Scale, ScaleId.ManGong, rootId),
                ],
                [
                  "Ritusen",
                  getModelRoute(ModelType.Scale, ScaleId.Ritusen, rootId),
                ],
                [
                  "Minor Pentatonic",
                  getModelRoute(
                    ModelType.Scale,
                    ScaleId.MinorPentatonic,
                    rootId
                  ),
                ],
              ]}
            />
          </Card>
          <Card title="Blues Scales" id="blues">
            <p>Blues scales are pentatonic scales with an extra "blue" note.</p>
            <h3>Examples</h3>
            <SimpleList
              items={[
                [
                  "Major Blues",
                  getModelRoute(ModelType.Scale, ScaleId.MajorBlues, rootId),
                ],
                [
                  "Minor Blues",
                  getModelRoute(ModelType.Scale, ScaleId.MinorBlues, rootId),
                ],
              ]}
            />
          </Card>
          <Card title="Bebop Scales" id="bebop">
            <p>
              Bebop scales are diatonic scales with an extra chomatic passing
              note.
            </p>
            <h3>Examples</h3>
            <SimpleList
              items={[
                [
                  "Major Bebop",
                  getModelRoute(ModelType.Scale, ScaleId.MajorBebop, rootId),
                ],
                [
                  "Dominant Bebop",
                  getModelRoute(ModelType.Scale, ScaleId.DominantBebop, rootId),
                ],
              ]}
            />
          </Card>
        </ColumnManager>
      </ColumnManager>
    </StyledScalesPage>
  );
};

export default ScalesPage;
