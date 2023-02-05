import React from "react";
import styled from "styled-components";
import Chord from "../../../../../core/models/Chord";
import { ChordId, NoteId } from "../../../../../core/models/Model.constants";
import Note from "../../../../../core/models/Note";
import {
  VoicingId,
  VOICING_PRESET_MAP,
} from "../../../../../viewers/fretboard/Fretboard.voicing";
import PageLayout from "../../../../layout/PageLayout";
import FretboardCell from "../../../../ui/FretboardCell";
import SmartCard, { ICardConfig } from "../../../../ui/SmartCard";

export const CAGED_ITEMS = [
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: NoteId.C,
    voicingId: VoicingId.Chord_Triad_CShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: NoteId.A,
    voicingId: VoicingId.Chord_Triad_AShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: NoteId.G,
    voicingId: VoicingId.Chord_Triad_GShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: NoteId.E,
    voicingId: VoicingId.Chord_Triad_EShape_1,
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: NoteId.D,
    voicingId: VoicingId.Chord_Triad_DShape_1,
  },
];

const StyledCAGEDPage = styled(PageLayout)``;

const HEAD = [{ cols: ["C", "A", "G", "E", "D"] }];

const RANGE = [3, 2, 3, 2, 3];

const getRows = (rows: any[]) => {
  return rows.map((row, i) => {
    return {
      cols: row.map((col, j) => {
        const { model, modelId, rootId, voicingId } = col as any;
        const instance = new model(modelId, {
          root: Note.fromId(rootId),
        });
        const voicing = VOICING_PRESET_MAP.get(voicingId);
        const startingFret = 0;
        const fretRange: [number, number] = [
          startingFret,
          startingFret + RANGE[j],
        ];
        return {
          content: (
            <FretboardCell
              caption={instance.getName()}
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
      }),
    };
  });
};

const getCardConfig = (): ICardConfig => {
  return {
    title: "",
    table: {
      thead: HEAD,
      tbody: getRows([CAGED_ITEMS]),
      headerColIndicies: [0],
    },
  };
};

const Page: React.FC = () => {
  return (
    <StyledCAGEDPage title="The CAGED System">
      <SmartCard cards={[getCardConfig()]} />
    </StyledCAGEDPage>
  );
};

export default Page;
