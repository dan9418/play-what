import React from "react";
import styled from "styled-components";
import Chord from "../../../../../../core/models/Chord";
import { ChordId, NoteId } from "../../../../../../core/models/Model.constants";
import Note from "../../../../../../core/models/Note";
import {
  VoicingId,
  VOICING_PRESET_MAP,
} from "../../../../../../viewers/fretboard/Fretboard.voicing";
import PageLayout from "../../../../../layout/PageLayout";
import Card, { StyledCard } from "../../../../../ui/Card";
import FretboardCell from "../../../../../ui/FretboardCell";
import { Table } from "../../../../../ui/Table";

const StyledVoicingsPage = styled(PageLayout)`
  overflow-x: scroll;
  min-width: 1024px;
  ${StyledCard} {
    margin-top: 16px;
    > table {
      table-layout: fixed;
      width: 100%;
      > tbody > tr > td {
        vertical-align: top;
      }
    }
  }
`;

const THEAD = ["Model", "Triad", "Seventh", "Drop 3-7", "Drop 7-3"];

const CHORD_IDS = [ChordId.Maj7, ChordId.Min7, ChordId.Dom7, ChordId.HalfDim7];

const CHORD_ROOT = Note.fromId(NoteId.C);

interface IRootCard {
  stringRoot: string;
  fretRange: [number, number];
  voicingids: VoicingId[];
}

const CARDS: IRootCard[] = [
  {
    stringRoot: "E",
    fretRange: [6, 10],
    voicingids: [
      VoicingId.Chord_Triad_EShape_1,
      VoicingId.Chord_Seventh_EShape_1,
      VoicingId.Chord_Shell_E_37,
      VoicingId.Chord_Shell_E_73,
    ],
  },
  {
    stringRoot: "A",
    fretRange: [2, 6],
    voicingids: [
      VoicingId.Chord_Triad_AShape_1,
      VoicingId.Chord_Seventh_AShape_1,
      VoicingId.Chord_Shell_A_37,
      VoicingId.Chord_Shell_A_73,
    ],
  },
  {
    stringRoot: "D",
    fretRange: [8, 12],
    voicingids: [
      VoicingId.Chord_Triad_DShape_1,
      VoicingId.Chord_Seventh_DShape_1,
      VoicingId.Chord_Shell_D_37,
      VoicingId.Chord_Shell_D_73,
    ],
  },
];

const getVoicingCols = ({ voicingIds, modelId, root, fretRange }) =>
  voicingIds.map((voicingId, i) => {
    const instance = new Chord(modelId, { root });
    const voicing = VOICING_PRESET_MAP.get(voicingId);
    return {
      content: (
        <FretboardCell
          fretboardConfig={{
            model: instance,
            voicing,
            fretRange,
            showFretNumbers: false,
            showFretDots: false,
          }}
        />
      ),
    };
  });

const getChordRows = (
  chordIds: ChordId[],
  voicingIds: VoicingId[],
  root: Note,
  fretRange: [number, number]
) => {
  return chordIds.map((modelId, i) => {
    return {
      cols: [
        new Chord(modelId).getName(),
        ...getVoicingCols({
          voicingIds,
          modelId,
          root,
          fretRange,
        }),
      ],
    };
  });
};

const getRootCard = (
  chordIds: ChordId[],
  root: Note,
  stringRoot: string,
  voicingIds: VoicingId[],
  fretRange: [number, number]
) => {
  return (
    <Card title={`${stringRoot} Root`}>
      <Table
        thead={[{ cols: THEAD }]}
        tbody={getChordRows(chordIds, voicingIds, root, fretRange)}
        headerColIndicies={[0]}
      />
    </Card>
  );
};

const Page: React.FC = () => {
  return (
    <StyledVoicingsPage title="Chord Voicings">
      {CARDS.map(({ stringRoot, voicingids, fretRange }) =>
        getRootCard(CHORD_IDS, CHORD_ROOT, stringRoot, voicingids, fretRange)
      )}
    </StyledVoicingsPage>
  );
};

export default Page;
