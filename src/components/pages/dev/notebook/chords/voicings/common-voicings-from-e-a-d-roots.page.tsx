import React from "react";
import styled from "styled-components";
import Chord from "../../../../../../core/models/Chord";
import { ChordId, NoteId } from "../../../../../../core/models/Model.constants";
import Note from "../../../../../../core/models/Note";
import FretTable from "../../../../../../viewers/fret-table/FretTable";
import {
  VoicingId,
  VOICING_PRESET_MAP,
} from "../../../../../../viewers/fretboard/Fretboard.voicing";
import PageLayout from "../../../../../layout/PageLayout";
import Card, { StyledCard } from "../../../../../ui/Card";
import { StyledInputRow } from "../../../../../ui/InputRow";
import { Table } from "../../../../../ui/Table";

const StyledVoicingsPage = styled(PageLayout)`
  ${StyledCard} {
    margin-bottom: 16px;
    > table {
      width: 100%;
      > tbody > tr > td {
        padding: 8px;
      }
    }
  }

  ${StyledInputRow} {
    margin-bottom: 16px;
  }
`;

const VOICINGS_E = [
  VoicingId.Chord_Triad_EShape_1,
  VoicingId.Chord_Seventh_EShape_1,
  VoicingId.Chord_Shell_E_37,
  VoicingId.Chord_Shell_E_73,
];

const VOICINGS_A = [
  VoicingId.Chord_Triad_AShape_1,
  VoicingId.Chord_Seventh_AShape_1,
  VoicingId.Chord_Shell_A_37,
  VoicingId.Chord_Shell_A_73,
];

const VOICINGS_D = [
  VoicingId.Chord_Triad_DShape_1,
  VoicingId.Chord_Seventh_DShape_1,
  VoicingId.Chord_Shell_D_37,
  VoicingId.Chord_Shell_D_73,
];

const ROOTS = [
  ["E", VOICINGS_E, [6, 10]],
  ["A", VOICINGS_A, [2, 6]],
  ["D", VOICINGS_D, [8, 12]],
];

const getVoicingCols = ({ voicingIds, model, modelId, root, range }) =>
  voicingIds.map((voicingId, i) => {
    const instance = new model(modelId, { root });
    return {
      content: (
        <FretTable
          model={instance}
          voicing={VOICING_PRESET_MAP.get(voicingId)}
          fretRange={range}
          showFretDots={false}
          showFretNumbers={false}
        />
      ),
    };
  });

const getChordRows = (chords: any[], voicingIds: any[], root, range) => {
  return chords.map((chord, i) => {
    const { model, modelId } = chord;
    return {
      cols: [
        modelId,
        ...getVoicingCols({
          voicingIds,
          model,
          modelId,
          root,
          range,
        }),
      ],
    };
  });
};

const getRootCard = (root: string, voicings: any[], range: any) => {
  return (
    <Card title={`${root} Root`}>
      <Table
        thead={[{ cols: THEAD }]}
        tbody={getChordRows(CHORDS, voicings, ROOT, range)}
        headerColIndicies={[0]}
      />
    </Card>
  );
};

const THEAD = ["Model", "Triad", "Seventh", "Drop 3-7", "Drop 7-3"];

const CHORDS = [
  {
    model: Chord,
    modelId: ChordId.Maj7,
  },
  {
    model: Chord,
    modelId: ChordId.Min7,
  },
  {
    model: Chord,
    modelId: ChordId.Dom7,
  },
  {
    model: Chord,
    modelId: ChordId.HalfDim7,
  },
];

const ROOT = Note.fromId(NoteId.C);

const Page: React.FC = () => {
  return (
    <StyledVoicingsPage title="Chord Voicings">
      {ROOTS.map(([root, voicings, range]) =>
        getRootCard(root, voicings, range)
      )}
    </StyledVoicingsPage>
  );
};

export default Page;
