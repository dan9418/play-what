import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useRootSuffix } from "../../../contexts/PagePropsContext";
import {
  ChordId,
  ModelType,
  NoteId,
} from "../../../core/models/Model.constants";
import { CHORD_PRESETS } from "../../../core/models/Model.presets";
import { getModelRoute } from "../../../core/routing/Routing.utils";
import CollectionCard from "../../collection/CollectionCard";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";
import Card from "../../ui/Card";
import { SimpleList } from "../../ui/List";

const StyledChordsPage = styled(PageLayout)`
  .intro {
    padding: 0 16px;
  }

  h3,
  p {s
    margin: 16px 0;
  }
`;

const ChordsPage: React.FC<any> = (props) => {
  const rootSuffix = useRootSuffix() as NoteId;

  return (
    <StyledChordsPage title="Chords" subtitle="The foundation of harmony">
      <div>
        <p className="intro">
          A chord is a collection of musical notes, usually played
          simultaneously. Chords are defined by their first note (the{" "}
          <em>root</em>) and its relationship to the following notes (
          <em>intervals</em>).
        </p>
        {false && (
          <p className="intro">
            Most chords contain a root, a third, and a fifth. Advanced chords
            may include additional intervals, substitutions, and/or omissions.
            In their most common form, chords contain at least three notes
            spanning a single octave. Chords spanning more than one octave are
            called <em>extended chords</em> and are not yet covered here.
          </p>
        )}
        {/*
                    <h3>Types of Chords</h3>
                    <ul>
                        <li><a href="#triad">Triads</a></li>
                        <li><a href="#seventh">Seventh Chords</a></li>
                        <li><a href="#sixth">Sixth Chords</a></li>
                        <li><a href="#suspended">Suspended Chords</a></li>
                    />*/}
      </div>
      <ColumnManager>
        <ColumnManager>
          <CollectionCard title="All Chords" data={CHORD_PRESETS} />
        </ColumnManager>
        <ColumnManager>
          <Card title="Triads" id="triad">
            <p>
              A triad is the most basic type of chord. It consists of 3
              intervals (a root, a third, and a fifth). The specific thirds and
              fifths used determine the type (or <em>quality</em>) of the triad.
            </p>
            <h3>Examples</h3>
            <SimpleList
              items={[
                [
                  "Major Triad",
                  getModelRoute(ModelType.Chord, ChordId.MajTriad, rootSuffix),
                ],
                [
                  "Minor Triad",
                  getModelRoute(ModelType.Chord, ChordId.MinTriad, rootSuffix),
                ],
                [
                  "Augmented Triad",
                  getModelRoute(ModelType.Chord, ChordId.AugTriad, rootSuffix),
                ],
                [
                  "Diminished Triad",
                  getModelRoute(ModelType.Chord, ChordId.DimTriad, rootSuffix),
                ],
              ]}
            />
          </Card>
          <Card title="Seventh Chords" id="seventh">
            <p>
              A seventh chord is a triad with an additional seventh interval
              stacked on top.
            </p>
            <h3>Examples</h3>
            <SimpleList
              items={[
                [
                  "Major 7th",
                  getModelRoute(ModelType.Chord, ChordId.Maj7, rootSuffix),
                ],
                [
                  "Minor 7th",
                  getModelRoute(ModelType.Chord, ChordId.Min7, rootSuffix),
                ],
                [
                  "Dominant 7th",
                  getModelRoute(ModelType.Chord, ChordId.Dom7, rootSuffix),
                ],
                [
                  "Minor - Major 7th",
                  getModelRoute(ModelType.Chord, ChordId.MinMaj7, rootSuffix),
                ],
                [
                  "Diminished 7th",
                  getModelRoute(ModelType.Chord, ChordId.Dim7, rootSuffix),
                ],
                [
                  "Half - Diminished 7th",
                  getModelRoute(ModelType.Chord, ChordId.HalfDim7, rootSuffix),
                ],
                [
                  "Augmented 7th",
                  getModelRoute(ModelType.Chord, ChordId.Aug7, rootSuffix),
                ],
                [
                  "Augmented Major 7th",
                  getModelRoute(ModelType.Chord, ChordId.AugMaj7, rootSuffix),
                ],
              ]}
            />
          </Card>
          <Card title="Sixth Chords" id="sixth">
            <p>
              A sixth chord is a triad with an additional sixth interval stacked
              on top. They are similar in function to seventh chords.
            </p>
            <h3>Examples</h3>
            <SimpleList
              items={[
                [
                  "Major 6th",
                  getModelRoute(ModelType.Chord, ChordId.Maj6, rootSuffix),
                ],
                [
                  "Minor 6th",
                  getModelRoute(ModelType.Chord, ChordId.Min6, rootSuffix),
                ],
              ]}
            />
          </Card>
          <Card title="Suspended Chords" id="suspended">
            <p>
              A suspended chord is a like a triad, except it sustitutes a second
              or fourth interval in place of the third.
            </p>
            <h3>Examples</h3>
            <SimpleList
              items={[
                [
                  "Suspended 2nd",
                  getModelRoute(ModelType.Chord, ChordId.Sus2, rootSuffix),
                ],
                [
                  "Suspended 4th",
                  getModelRoute(ModelType.Chord, ChordId.Sus4, rootSuffix),
                ],
              ]}
            />
          </Card>
        </ColumnManager>
      </ColumnManager>
    </StyledChordsPage>
  );
};

export default ChordsPage;
