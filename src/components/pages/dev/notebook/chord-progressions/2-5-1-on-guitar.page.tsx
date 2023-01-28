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
import { DEFAULT_DEGREE_COLOR_SCHEME } from "../../../../../core/theory/Degree.constants";
import { IFretProps } from "../../../../../viewers/fretboard/Fretboard.utils";
import { VOICING_PRESET_MAP } from "../../../../../viewers/fretboard/Fretboard.voicing";
import ColumnManager from "../../../../column-manager/ColumnManager";
import PageLayout from "../../../../layout/PageLayout";
import Card, { StyledCard } from "../../../../ui/Card";
import FretboardCell from "../../../../ui/FretboardCell";
import { Table } from "../../../../ui/Table";

const StyledCAGEDPage = styled(PageLayout)`
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

const ROOT = Note.fromId(NoteId.C);

const MAJOR = new Scale(ScaleId.Ionian, { root: ROOT });
const MAJOR_NOTES = MAJOR.notes as Note[];

const MINOR = new Scale(ScaleId.Ionian, { root: ROOT });
const MINOR_NOTES = MINOR.notes as Note[];

const MAJOR_ITEMS = [
  {
    model: Chord,
    modelId: ChordId.Min7,
    rootId: MAJOR_NOTES[1].modelId,
    voicingId: null,
  },
  {
    model: Chord,
    modelId: ChordId.Dom7,
    rootId: MAJOR_NOTES[4].modelId,
    voicingId: null,
  },
  {
    model: Chord,
    modelId: ChordId.Maj7,
    rootId: MAJOR_NOTES[0].modelId,
    voicingId: null,
  },
];

const MINOR_ITEMS = [
  {
    model: Chord,
    modelId: ChordId.HalfDim7,
    rootId: MINOR_NOTES[2].modelId,
    voicingId: null,
  },
  {
    model: Chord,
    modelId: ChordId.Min7,
    rootId: MINOR_NOTES[4].modelId,
    voicingId: null,
  },
  {
    model: Chord,
    modelId: ChordId.Min7,
    rootId: MINOR_NOTES[0].modelId,
    voicingId: null,
  },
];

const getColor = (fretProps: IFretProps) => {
  const { stringIndex, fretIndex, tuning, model } = fretProps;
  // @ts-ignore
  const noteIndex = tuning[stringIndex] + fretIndex;
  // @ts-ignore
  const [interval, note] = model.tryGetPodPairAtPitch(noteIndex);

  if (!note) return;

  if (interval.pod[1] === 0) return DEFAULT_DEGREE_COLOR_SCHEME[0];
  if (interval.pod[1] === 2) return DEFAULT_DEGREE_COLOR_SCHEME[4];
  if (interval.pod[1] === 4) return "black";
  if (interval.pod[1] === 6) return "black";
  return "black";
};

const getRows = (items: any[]) => {
  return [
    {
      cols: items.map((item) => {
        const { model, modelId, rootId, voicingId } = item as any;
        const instance = new model(modelId, {
          root: Note.fromId(rootId),
        });
        const voicing = voicingId
          ? VOICING_PRESET_MAP.get(voicingId)
          : undefined;
        const fretRange = [1, 14] as [number, number];
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
                colorMapFn: getColor,
              }}
            />
          ),
        };
      }),
    },
  ];
};

const Page: React.FC<any> = () => {
  return (
    <StyledCAGEDPage title="Chord Progressions">
      <ColumnManager>
        <Card title="Major II-V-I">
          <Table
            className="links"
            thead={[{ cols: ["II", "V", "I"] }]}
            tbody={getRows(MAJOR_ITEMS)}
          />
        </Card>
        <Card title="Minor ii-v-i">
          <Table
            className="links"
            thead={[{ cols: ["ii", "v", "i"] }]}
            tbody={getRows(MINOR_ITEMS)}
          />
        </Card>
      </ColumnManager>
    </StyledCAGEDPage>
  );
};

export default Page;
