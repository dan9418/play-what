import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useRootId } from "../../../contexts/PagePropsContext";
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
    margin-bottom: 16px;
  }

  h3,
  p {s
    margin: 16px 0;
  }
`;

const ChordsPage: React.FC<any> = (props) => {
  const rootId = useRootId();

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
      <ColumnManager desktop={["2fr", "1fr"]}>
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
                  getModelRoute(ModelType.Chord, ChordId.MajTriad, rootId),
                ],
                [
                  "Minor Triad",
                  getModelRoute(ModelType.Chord, ChordId.MinTriad, rootId),
                ],
                [
                  "Augmented Triad",
                  getModelRoute(ModelType.Chord, ChordId.AugTriad, rootId),
                ],
                [
                  "Diminished Triad",
                  getModelRoute(ModelType.Chord, ChordId.DimTriad, rootId),
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
                  getModelRoute(ModelType.Chord, ChordId.Maj7, rootId),
                ],
                [
                  "Minor 7th",
                  getModelRoute(ModelType.Chord, ChordId.Min7, rootId),
                ],
                [
                  "Dominant 7th",
                  getModelRoute(ModelType.Chord, ChordId.Dom7, rootId),
                ],
                [
                  "Minor - Major 7th",
                  getModelRoute(ModelType.Chord, ChordId.MinMaj7, rootId),
                ],
                [
                  "Diminished 7th",
                  getModelRoute(ModelType.Chord, ChordId.Dim7, rootId),
                ],
                [
                  "Half - Diminished 7th",
                  getModelRoute(ModelType.Chord, ChordId.HalfDim7, rootId),
                ],
                [
                  "Augmented 7th",
                  getModelRoute(ModelType.Chord, ChordId.Aug7, rootId),
                ],
                [
                  "Augmented Major 7th",
                  getModelRoute(ModelType.Chord, ChordId.AugMaj7, rootId),
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
                  getModelRoute(ModelType.Chord, ChordId.Maj6, rootId),
                ],
                [
                  "Minor 6th",
                  getModelRoute(ModelType.Chord, ChordId.Min6, rootId),
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
                  getModelRoute(ModelType.Chord, ChordId.Sus2, rootId),
                ],
                [
                  "Suspended 4th",
                  getModelRoute(ModelType.Chord, ChordId.Sus4, rootId),
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
