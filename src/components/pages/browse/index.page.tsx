import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useRootSuffix } from "../../../contexts/PagePropsContext";
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
  const rootSuffix = useRootSuffix() as NoteId;

  return (
    <StyledBrowsePage title="Browse">
      <ColumnManager desktop={["1fr", "1fr"]}>
        <Card title="Chords">
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
                "Half-Diminished 7th",
                getModelRoute(ModelType.Chord, ChordId.HalfDim7, rootSuffix),
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
                getModelRoute(ModelType.Scale, ScaleId.Ionian, rootSuffix),
              ],
              [
                "Natural Minor (Aeolian)",
                getModelRoute(ModelType.Scale, ScaleId.Aeolian, rootSuffix),
              ],
              [
                "Melodic Minor",
                getModelRoute(
                  ModelType.Scale,
                  ScaleId.MelodicMinor,
                  rootSuffix
                ),
              ],
              [
                "Harmonic Minor",
                getModelRoute(
                  ModelType.Scale,
                  ScaleId.HarmonicMinor,
                  rootSuffix
                ),
              ],
              [
                "Major Pentatonic",
                getModelRoute(
                  ModelType.Scale,
                  ScaleId.MajorPentatonic,
                  rootSuffix
                ),
              ],
              [
                "Minor Pentatonic",
                getModelRoute(
                  ModelType.Scale,
                  ScaleId.MinorPentatonic,
                  rootSuffix
                ),
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
