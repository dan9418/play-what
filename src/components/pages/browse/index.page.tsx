import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useRootId } from "../../../contexts/PagePropsContext";
import {
  ChordId,
  ModelType,
  NoteId,
  ScaleId,
} from "../../../core/models/Model.constants";
import { getModelRoute } from "../../../core/routing/Routing.utils";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";
import Card from "../../ui/Card";
import Icon from "../../ui/Icon";
import { SimpleList } from "../../ui/List";

const StyledBrowsePage = styled(PageLayout)`
  a.all {
    display: block;
    font-size: 140%;
    text-align: right;
    margin-top: 32px;
  }
`;

const Page: React.FC<any> = (props) => {
  const rootId = useRootId();

  return (
    <StyledBrowsePage title="Browse">
      <ColumnManager desktop={["1fr", "1fr"]}>
        <Card title="Chords">
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
                "Half-Diminished 7th",
                getModelRoute(ModelType.Chord, ChordId.HalfDim7, rootId),
              ],
            ]}
          />
          <Link to={getModelRoute(ModelType.Chord)} className="all">
            See All Chords <Icon iconId="next" size={12} />
          </Link>
        </Card>
        <Card title="Scales">
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
                getModelRoute(ModelType.Scale, ScaleId.MajorPentatonic, rootId),
              ],
              [
                "Minor Pentatonic",
                getModelRoute(ModelType.Scale, ScaleId.MinorPentatonic, rootId),
              ],
            ]}
          />
          <Link to={getModelRoute(ModelType.Scale)} className="all">
            See All Scales <Icon iconId="next" size={12} />
          </Link>
        </Card>
      </ColumnManager>
    </StyledBrowsePage>
  );
};

export default Page;
