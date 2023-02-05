import React from "react";
import styled from "styled-components";
import Chord from "../../../../../core/models/Chord";
import {
  ChordId,
  NoteId,
  ScaleId,
} from "../../../../../core/models/Model.constants";
import Note from "../../../../../core/models/Note";
import Scale from "../../../../../core/models/Scale";
import {
  VoicingId,
  VOICING_PRESET_MAP,
} from "../../../../../viewers/fretboard/Fretboard.voicing";
import PageLayout from "../../../../layout/PageLayout";
import FretboardCell from "../../../../ui/FretboardCell";
import SmartCard, { ICardConfig } from "../../../../ui/SmartCard";

export const CAGED_CHORDS = [
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: NoteId.C,
    voicingId: VoicingId.Chord_Triad_CShape_1,
    range: [0, 3],
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: NoteId.A,
    voicingId: VoicingId.Chord_Triad_AShape_1,
    range: [-1, 2],
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: NoteId.G,
    voicingId: VoicingId.Chord_Triad_GShape_1,
    range: [-1, 3],
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: NoteId.E,
    voicingId: VoicingId.Chord_Triad_EShape_1,
    range: [-1, 2],
  },
  {
    model: Chord,
    modelId: ChordId.MajTriad,
    rootId: NoteId.D,
    voicingId: VoicingId.Chord_Triad_DShape_1,
    range: [0, 3],
  },
];

export const CAGED_SCALES = [
  {
    model: Scale,
    modelId: ScaleId.Phrygian,
    rootId: NoteId.E,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_1,
    range: [0, 3],
  },
  {
    model: Scale,
    modelId: ScaleId.Mixolydian,
    rootId: NoteId.G,
    voicingId: VoicingId.Scale_DoubleOctave_GShape_1,
    range: [2, 5],
  },
  {
    model: Scale,
    modelId: ScaleId.Aeolian,
    rootId: NoteId.A,
    voicingId: VoicingId.Scale_DoubleOctave_GShape_1,
    range: [4, 8],
  },
  {
    model: Scale,
    modelId: ScaleId.Ionian,
    rootId: NoteId.E,
    voicingId: VoicingId.Scale_DoubleOctave_EShape_2,
    range: [11, 14],
  },
  {
    model: Scale,
    modelId: ScaleId.Dorian,
    rootId: NoteId.D,
    voicingId: VoicingId.Scale_DoubleOctave_DShape_1,
    range: [10, 13],
  },
];

const StyledCAGEDPage = styled(PageLayout)``;

const HEAD = [{ cols: ["C", "A", "G", "E", "D"] }];

const getRows = (rows: any[]) => {
  return rows.map((row, i) => {
    return {
      cols: row.map((col, j) => {
        const { model, modelId, rootId, voicingId, range } = col as any;
        const instance = new model(modelId, {
          root: Note.fromId(rootId),
        });
        const voicing = VOICING_PRESET_MAP.get(voicingId);
        const fretRange: [number, number] = range;
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
      tbody: getRows([CAGED_CHORDS, CAGED_SCALES]),
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
